import { rmSync } from 'node:fs'
import { join } from 'node:path'

import { type CliIo, isCliEntrypoint, main, runCli } from './cli.js'
import { inspectInstallation } from './doctor.js'
import { fixtureConsumer } from './test-utils.js'

describe('doctor and CLI contracts', () => {
  it('accepts Node capabilities without requiring the repository exact Node', () => {
    const report = inspectInstallation({
      cwd: fixtureConsumer(),
      nodeVersion: '20.10.0',
    })
    expect(report).toMatchObject({
      ok: true,
      node: { supported: true, requirement: '>=18' },
      lockfile: { packageManager: 'yarn' },
      toolkit: { version: '0.1.0-next.0', resolution: 'repo-local' },
    })
    expect(report.packageTuple).toContain('@channel.io/bezier-react@')
  })

  it('fails doctor when the consumer lockfile is absent', () => {
    const cwd = fixtureConsumer()
    rmSync(join(cwd, 'yarn.lock'))
    expect(inspectInstallation({ cwd })).toMatchObject({
      ok: false,
      lockfile: null,
    })
  })

  it('fails doctor when Node does not provide the minimum capability', () => {
    expect(
      inspectInstallation({ cwd: fixtureConsumer(), nodeVersion: '16.20.0' })
    ).toMatchObject({ ok: false, node: { supported: false } })
  })

  it('runs lookup from the explicit consumer cwd', () => {
    const output: string[] = []
    const errors: string[] = []
    const io: CliIo = {
      cwd: fixtureConsumer(),
      stdout: (value) => output.push(value),
      stderr: (value) => errors.push(value),
    }
    expect(runCli(['lookup', 'Tabs'], io)).toBe(0)
    expect(JSON.parse(output.join(''))).toMatchObject({
      found: true,
      matches: [{ kind: 'component', name: 'Tabs' }],
    })
    expect(errors).toEqual([])
  })

  it.each([
    ['doctor', 0, { ok: true }],
    ['version', 0, { toolkit: { version: '0.1.0-next.0' } }],
  ])('runs the %s command', (command, expectedCode, expectedOutput) => {
    const output: string[] = []
    const io: CliIo = {
      cwd: fixtureConsumer(),
      stdout: (value) => output.push(value),
      stderr: () => undefined,
    }
    expect(runCli([command], io)).toBe(expectedCode)
    expect(JSON.parse(output.join(''))).toMatchObject(expectedOutput)
  })

  it('returns an unknown lookup result with a distinct exit code', () => {
    const output: string[] = []
    const io: CliIo = {
      cwd: fixtureConsumer(),
      stdout: (value) => output.push(value),
      stderr: () => undefined,
    }
    expect(runCli(['lookup', 'DoesNotExist'], io)).toBe(2)
    expect(JSON.parse(output.join(''))).toMatchObject({
      found: false,
      reason: 'unknown',
    })
  })

  it('reports unavailable catalogs without falling back', () => {
    const cwd = fixtureConsumer()
    rmSync(
      join(
        cwd,
        'node_modules',
        '@channel.io',
        'bezier-icons',
        'dist',
        'manifest.json'
      )
    )
    const errors: string[] = []
    const io: CliIo = {
      cwd,
      stdout: () => undefined,
      stderr: (value) => errors.push(value),
    }
    expect(runCli(['lookup', 'Tabs'], io)).toBe(1)
    expect(JSON.parse(errors.join(''))).toMatchObject({
      error: 'catalog_unavailable',
      issues: [{ code: 'missing_manifest' }],
    })
  })

  it.each([
    [[], 0, 'Usage: bezier'],
    [['--help'], 0, 'Usage: bezier'],
  ])('prints help for %p', (args, expectedCode, expectedOutput) => {
    const output: string[] = []
    const io: CliIo = {
      cwd: fixtureConsumer(),
      stdout: (value) => output.push(value),
      stderr: () => undefined,
    }
    expect(runCli(args, io)).toBe(expectedCode)
    expect(output.join('')).toContain(expectedOutput)
  })

  it('exposes the CLI entrypoint for embedded runners', () => {
    const output: string[] = []
    expect(
      main(['--help'], {
        cwd: fixtureConsumer(),
        stdout: (value) => output.push(value),
        stderr: () => undefined,
      })
    ).toBe(0)
    expect(output.join('')).toContain('Usage: bezier')
  })

  it('recognizes direct file and package-manager bin entrypoints', () => {
    expect(isCliEntrypoint('/package/dist/cli.js')).toBe(true)
    expect(isCliEntrypoint('/consumer/node_modules/.bin/bezier')).toBe(true)
    expect(isCliEntrypoint('/node_modules/jest/bin/jest.js')).toBe(false)
    expect(isCliEntrypoint(undefined)).toBe(false)
  })

  it.each([
    [['lookup'], 'missing_query'],
    [['unknown'], 'unknown_command'],
    [['doctor', '--cwd'], 'missing_cwd'],
  ])('reports invalid CLI input %p', (args, expectedError) => {
    const errors: string[] = []
    const io: CliIo = {
      cwd: fixtureConsumer(),
      stdout: () => undefined,
      stderr: (value) => errors.push(value),
    }
    expect(runCli(args, io)).toBe(1)
    expect(JSON.parse(errors.join(''))).toMatchObject({ error: expectedError })
  })
})
