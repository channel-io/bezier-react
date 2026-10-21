import { cpSync, mkdirSync, realpathSync, rmSync, writeFileSync } from 'node:fs'
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
    manifests['@channel.io/bezier-react'].schemaVersion = '3.0.0'
    const cwd = fixtureConsumer(manifests)
    const result = loadInstalledCatalog(cwd)
    expect(result).toMatchObject({
      ok: false,
      issues: [
        {
          code: 'schema_mismatch',
          packageName: '@channel.io/bezier-react',
          actualSchemaVersion: '3.0.0',
          supportedSchemaMajor: 2,
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

const usage = {
  when: [
    {
      condition: '값을 유지하는 단일 선택',
      because: '폼 값을 저장한다',
      useInstead: null,
      platform: 'web',
    },
  ],
  avoid: [
    {
      condition: '여러 값을 선택',
      because: '복수 선택',
      useInstead: 'MultiSelect',
      platform: null,
    },
  ],
  source: {
    repository: 'https://github.com/channel-io/core-bezier-system',
    commit: 'a'.repeat(40),
    path: 'docs/components/Select-spec.md',
    sha256: 'b'.repeat(64),
  },
}
function v2Manifests() {
  const manifests = defaultManifests()
  const react = manifests['@channel.io/bezier-react']
  react.schemaVersion = '2.0.0'
  react.components![0].semantics = { usage }
  return manifests
}

describe('structured React v2 usage', () => {
  it('reads v2 alongside v1 icon/token manifests', () => {
    expect(loadInstalledCatalog(fixtureConsumer(v2Manifests()))).toMatchObject({
      ok: true,
    })
  })
  it.each([
    { ...usage, when: ['old string'] },
    { ...usage, avoid: [{ ...usage.avoid[0], platform: 'desktop' }] },
    { ...usage, when: [{ ...usage.when[0], because: 3 }] },
    { ...usage, source: { ...usage.source, commit: 'not-pinned' } },
  ])('rejects malformed v2 usage %#', (invalid) => {
    const manifests = v2Manifests()
    manifests['@channel.io/bezier-react'].components![0].semantics = {
      usage: invalid,
    }
    expect(loadInstalledCatalog(fixtureConsumer(manifests))).toMatchObject({
      ok: false,
      issues: [{ code: 'invalid_manifest' }],
    })
  })
  it('keeps icon schema v2 unsupported', () => {
    const manifests = defaultManifests()
    manifests['@channel.io/bezier-icons'].schemaVersion = '2.0.0'
    expect(loadInstalledCatalog(fixtureConsumer(manifests))).toMatchObject({
      ok: false,
      issues: [{ code: 'schema_mismatch', supportedSchemaMajor: 1 }],
    })
  })
})
