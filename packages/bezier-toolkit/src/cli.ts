#!/usr/bin/env node

import { basename } from 'node:path'

import { type CliIo, runCli } from './cli-core.js'

export { runCli, type CliIo } from './cli-core.js'

export function main(rawArgs = process.argv.slice(2), io?: CliIo): number {
  return runCli(rawArgs, io)
}

export function isCliEntrypoint(path: string | undefined): boolean {
  const filename = basename(path ?? '')
  return filename === 'bezier' || filename === 'cli.js'
}

if (isCliEntrypoint(process.argv[1])) {
  process.exitCode = main()
}
