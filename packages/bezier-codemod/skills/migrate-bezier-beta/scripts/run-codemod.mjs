#!/usr/bin/env node

import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'

const PACKAGE_NAME = '@channel.io/bezier-codemod'

function readOption(args, name, fallback) {
  const index = args.indexOf(name)
  if (index === -1) {
    return fallback
  }
  const value = args[index + 1]
  if (!value || value.startsWith('--')) {
    throw new Error(`${name} requires a value`)
  }
  return value
}

function readJson(filePath) {
  if (!existsSync(filePath)) {
    return undefined
  }
  return JSON.parse(readFileSync(filePath, 'utf8'))
}

function compatiblePackage(filePath, version) {
  const manifest = readJson(filePath)
  return manifest?.name === PACKAGE_NAME && manifest.version === version
}

const args = process.argv.slice(2)
const scope = readOption(args, '--scope')
const files = readOption(args, '--files')
if (Boolean(scope) === Boolean(files)) {
  throw new Error('Pass exactly one of --scope or --files.')
}

const report = readOption(
  args,
  '--report',
  '.bezier-beta-migration-report.json'
)
const summary = readOption(
  args,
  '--summary',
  '.bezier-beta-migration-summary.md'
)
const hotspotDepth = readOption(args, '--hotspot-depth', '2')
const dryRun = args.includes('--dry-run')
const cwd = process.cwd()
const scriptDirectory = path.dirname(fileURLToPath(import.meta.url))
const skillRoot = path.resolve(scriptDirectory, '..')
const packageRoot = path.resolve(skillRoot, '../..')
const installedPin = readJson(path.join(skillRoot, 'codemod-version.json'))
const packagedManifest = readJson(path.join(packageRoot, 'package.json'))
const pin =
  installedPin?.packageName === PACKAGE_NAME
    ? installedPin
    : packagedManifest?.name === PACKAGE_NAME && packagedManifest.version
      ? { packageName: PACKAGE_NAME, version: packagedManifest.version }
      : undefined

if (!pin?.version) {
  throw new Error(
    'This skill has no codemod version pin. Reinstall it with npx @channel.io/bezier-codemod@<version> --install-skill.'
  )
}

const explicitBinary = process.env.BEZIER_CODEMOD_BIN
const localBinary = path.join(
  cwd,
  `node_modules/.bin/bezier-codemod${process.platform === 'win32' ? '.cmd' : ''}`
)
const localManifest = path.join(
  cwd,
  'node_modules/@channel.io/bezier-codemod/package.json'
)
const packagedCli = path.join(packageRoot, 'dist/cli.js')

let command
let commandArgs
let source

if (explicitBinary) {
  if (!existsSync(explicitBinary)) {
    throw new Error(`BEZIER_CODEMOD_BIN does not exist: ${explicitBinary}`)
  }
  command = explicitBinary
  commandArgs = []
  source = 'BEZIER_CODEMOD_BIN'
} else if (
  existsSync(localBinary) &&
  compatiblePackage(localManifest, pin.version)
) {
  command = localBinary
  commandArgs = []
  source = `local ${PACKAGE_NAME}@${pin.version}`
} else if (
  existsSync(packagedCli) &&
  packagedManifest?.name === PACKAGE_NAME &&
  packagedManifest.version === pin.version
) {
  command = process.execPath
  commandArgs = [packagedCli]
  source = `packaged ${PACKAGE_NAME}@${pin.version}`
} else {
  command = process.platform === 'win32' ? 'npx.cmd' : 'npx'
  commandArgs = ['--yes', `${PACKAGE_NAME}@${pin.version}`]
  source = `npx ${PACKAGE_NAME}@${pin.version}`
}

commandArgs.push(
  '--transform',
  'beta-component-migration',
  scope ? '--scope' : '--files',
  scope ?? files,
  '--report',
  report,
  '--summary',
  summary,
  '--hotspot-depth',
  hotspotDepth
)
if (dryRun) {
  commandArgs.push('--dry-run')
}

console.log(`Running ${source}.`)
const result = spawnSync(command, commandArgs, {
  cwd,
  stdio: 'inherit',
})

if (result.error) {
  throw result.error
}
process.exitCode = result.status ?? 1
