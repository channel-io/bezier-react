import { existsSync } from 'node:fs'
import { createRequire } from 'node:module'
import { join, resolve } from 'node:path'

import { loadInstalledCatalog } from './catalog.js'
import { readAllInstalledManifests } from './manifests.js'

const LOCKFILES = [
  ['yarn', 'yarn.lock'],
  ['pnpm', 'pnpm-lock.yaml'],
  ['npm', 'package-lock.json'],
  ['bun', 'bun.lock'],
  ['bun', 'bun.lockb'],
] as const

function supportsNode(nodeVersion: string): boolean {
  const major = Number(nodeVersion.split('.')[0])
  return Number.isInteger(major) && major >= 18
}

function resolveToolkitPackageJson(cwd: string): string | null {
  const consumerRequire = createRequire(join(resolve(cwd), 'package.json'))
  try {
    return consumerRequire.resolve('@channel.io/bezier-toolkit/package.json')
  } catch (error) {
    if (
      typeof error === 'object' &&
      error !== null &&
      'code' in error &&
      (error.code === 'MODULE_NOT_FOUND' ||
        error.code === 'ERR_PACKAGE_PATH_NOT_EXPORTED')
    ) {
      return null
    }
    throw error
  }
}

function toolkitVersion(cwd: string): { path: string | null; version: string } {
  const packagePath = resolveToolkitPackageJson(cwd)
  if (!packagePath) return { path: null, version: 'unknown' }
  const consumerRequire = createRequire(join(resolve(cwd), 'package.json'))
  const packageJson = consumerRequire(packagePath) as { version?: unknown }
  return {
    path: packagePath,
    version:
      typeof packageJson.version === 'string' ? packageJson.version : 'unknown',
  }
}

function lockfile(cwd: string) {
  for (const [packageManager, filename] of LOCKFILES) {
    const path = join(resolve(cwd), filename)
    if (existsSync(path)) return { packageManager, path }
  }
  return null
}

export interface DoctorOptions {
  cwd?: string
  nodeVersion?: string
}

export function inspectInstallation(options: DoctorOptions = {}) {
  const cwd = resolve(options.cwd ?? process.cwd())
  const nodeVersion = options.nodeVersion ?? process.versions.node
  const node = {
    version: nodeVersion,
    supported: supportsNode(nodeVersion),
    requirement: '>=18',
  }
  const installed = readAllInstalledManifests(cwd)
  const manifests = installed.map(({ spec, result }) =>
    result.ok
      ? {
          packageName: spec.name,
          status: 'ready' as const,
          path: result.value.path,
          version: result.value.manifest.package.version,
          schemaVersion: result.value.manifest.schemaVersion,
          sourceCommit: result.value.manifest.source.commit,
        }
      : {
          packageName: spec.name,
          status: result.issue.code,
          path: result.issue.path,
          message: result.issue.message,
        }
  )
  const catalog = loadInstalledCatalog(cwd)
  const resolvedLockfile = lockfile(cwd)
  const toolkit = toolkitVersion(cwd)
  return {
    ok:
      node.supported &&
      resolvedLockfile !== null &&
      manifests.every(({ status }) => status === 'ready'),
    cwd,
    node,
    toolkit: {
      ...toolkit,
      resolution: toolkit.path ? 'repo-local' : 'unresolved',
    },
    lockfile: resolvedLockfile,
    manifests,
    packageTuple: catalog.ok ? catalog.catalog.packageTuple : null,
    cacheKey: catalog.ok ? catalog.catalog.cacheKey : null,
  }
}
