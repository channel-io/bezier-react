import { resolve } from 'node:path'

import { loadInstalledCatalog } from './catalog.js'
import { inspectInstallation } from './doctor.js'
import { lookup } from './lookup.js'

const HELP = `Usage: bezier <command> [options]

Commands:
  lookup <query>  Search installed component, icon, and token manifests
  doctor          Diagnose package, schema, Node, and lockfile compatibility
  version         Print Toolkit and installed Bezier package versions

Options:
  --cwd <path>    Resolve packages from this consumer directory
  --help          Show this help
`

export interface CliIo {
  cwd: string
  stdout: (value: string) => void
  stderr: (value: string) => void
}

function defaultIo(): CliIo {
  return {
    cwd: process.cwd(),
    stdout: (value) => process.stdout.write(value),
    stderr: (value) => process.stderr.write(value),
  }
}

function json(value: unknown): string {
  return `${JSON.stringify(value, null, 2)}\n`
}

function parsedArguments(args: string[], defaultCwd: string) {
  const cwdIndex = args.indexOf('--cwd')
  if (cwdIndex === -1) return { cwd: resolve(defaultCwd), args }
  const cwd = args[cwdIndex + 1]
  if (!cwd) return { cwd: null, args }
  return {
    cwd: resolve(defaultCwd, cwd),
    args: args.filter(
      (_, index) => index !== cwdIndex && index !== cwdIndex + 1
    ),
  }
}

export function runCli(rawArgs: string[], io: CliIo = defaultIo()): number {
  const parsed = parsedArguments(rawArgs, io.cwd)
  if (!parsed.cwd) {
    io.stderr(json({ error: 'missing_cwd', message: '--cwd requires a path.' }))
    return 1
  }
  const [command, ...args] = parsed.args
  if (!command || command === '--help' || command === 'help') {
    io.stdout(HELP)
    return 0
  }

  if (command === 'doctor') {
    const report = inspectInstallation({ cwd: parsed.cwd })
    io.stdout(json(report))
    return report.ok ? 0 : 1
  }

  if (command === 'version') {
    const report = inspectInstallation({ cwd: parsed.cwd })
    io.stdout(
      json({
        toolkit: report.toolkit,
        packageTuple: report.packageTuple,
        packages: report.manifests.map((manifest) => ({
          packageName: manifest.packageName,
          status: manifest.status,
          version: 'version' in manifest ? manifest.version : null,
          schemaVersion:
            'schemaVersion' in manifest ? manifest.schemaVersion : null,
        })),
      })
    )
    return report.packageTuple ? 0 : 1
  }

  if (command === 'lookup') {
    const query = args.join(' ').trim()
    if (!query) {
      io.stderr(
        json({ error: 'missing_query', message: 'lookup requires a query.' })
      )
      return 1
    }
    const loaded = loadInstalledCatalog(parsed.cwd)
    if (!loaded.ok) {
      io.stderr(json({ error: 'catalog_unavailable', issues: loaded.issues }))
      return 1
    }
    const result = lookup(loaded.catalog, query)
    io.stdout(
      json({
        ...result,
        packageTuple: loaded.catalog.packageTuple,
        cacheKey: loaded.catalog.cacheKey,
      })
    )
    return result.found ? 0 : 2
  }

  io.stderr(json({ error: 'unknown_command', command }))
  return 1
}
