import {
  cpSync,
  mkdirSync,
  realpathSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import { join } from 'node:path'

import { loadInstalledCatalog } from './catalog.js'
import { defaultManifests, fixtureConsumer } from './test-utils.js'

describe('installed manifest resolution', () => {
  it('resolves tokens through the installed React dependency tree', () => {
    const cwd = fixtureConsumer()
    const rootTokenDirectory = join(
      cwd,
      'node_modules',
      '@channel.io',
      'bezier-tokens'
    )
    const nestedTokenDirectory = join(
      cwd,
      'node_modules',
      '@channel.io',
      'bezier-react',
      'node_modules',
      '@channel.io',
      'bezier-tokens'
    )
    mkdirSync(join(nestedTokenDirectory, '..'), { recursive: true })
    cpSync(rootTokenDirectory, nestedTokenDirectory, { recursive: true })

    const result = loadInstalledCatalog(cwd)
    expect(result).toMatchObject({ ok: true })
    if (!result.ok) return
    expect(
      result.catalog.packages.find(
        ({ name }) => name === '@channel.io/bezier-tokens'
      )?.manifestPath
    ).toBe(realpathSync(join(nestedTokenDirectory, 'dist', 'manifest.json')))
  })

  it('reports a missing manifest without a source-checkout fallback', () => {
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
    const result = loadInstalledCatalog(cwd)
    expect(result).toMatchObject({
      ok: false,
      issues: [
        { code: 'missing_manifest', packageName: '@channel.io/bezier-icons' },
      ],
    })
  })

  it('reports an unsupported schema major explicitly', () => {
    const manifests = defaultManifests()
    manifests['@channel.io/bezier-react'].schemaVersion = '2.0.0'
    const cwd = fixtureConsumer(manifests)
    const result = loadInstalledCatalog(cwd)
    expect(result).toMatchObject({
      ok: false,
      issues: [
        {
          code: 'schema_mismatch',
          packageName: '@channel.io/bezier-react',
          actualSchemaVersion: '2.0.0',
          supportedSchemaMajor: 1,
        },
      ],
    })
  })

  it('reports invalid JSON separately from compatibility mismatches', () => {
    const cwd = fixtureConsumer()
    writeFileSync(
      join(
        cwd,
        'node_modules',
        '@channel.io',
        'bezier-tokens',
        'dist',
        'manifest.json'
      ),
      '{invalid'
    )
    const result = loadInstalledCatalog(cwd)
    expect(result).toMatchObject({
      ok: false,
      issues: [
        { code: 'invalid_manifest', packageName: '@channel.io/bezier-tokens' },
      ],
    })
  })
})
