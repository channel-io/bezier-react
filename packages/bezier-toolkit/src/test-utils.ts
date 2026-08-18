import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

import { BEZIER_PACKAGES, type BezierManifest } from './types.js'

const COMMIT = '1234567890abcdef1234567890abcdef12345678'

export function defaultManifests(): Record<string, BezierManifest> {
  return {
    '@channel.io/bezier-react': {
      schemaVersion: '1.0.0',
      package: { name: '@channel.io/bezier-react', version: '4.0.0-next.18' },
      source: {
        repository: 'https://example.com/react',
        commit: COMMIT,
        entrypoint: 'src/beta/index.ts',
      },
      components: [
        {
          name: 'Tabs',
          family: 'Tabs',
          semantics: {
            model: 'compound',
            root: 'Tabs',
            parts: { TabList: { requiresAncestor: ['Tabs'] } },
            independent: {},
          },
        },
      ],
    },
    '@channel.io/bezier-icons': {
      schemaVersion: '1.0.0',
      package: { name: '@channel.io/bezier-icons', version: '0.58.0-next.0' },
      source: {
        repository: 'https://example.com/icons',
        commit: COMMIT,
        entrypoint: 'icons/*.svg',
      },
      icons: [{ name: 'ai', componentName: 'AiIcon', aliases: ['MagicIcon'] }],
    },
    '@channel.io/bezier-tokens': {
      schemaVersion: '1.0.0',
      package: { name: '@channel.io/bezier-tokens', version: '1.1.0-next.0' },
      source: {
        repository: 'https://example.com/tokens',
        commit: COMMIT,
        entrypoint: 'src/**/*.json',
      },
      tokens: [
        {
          name: 'color.old',
          category: 'color',
          deprecated: true,
          replacement: 'color.new',
        },
        { name: 'color.new', category: 'color', deprecated: false },
      ],
    },
  }
}

export function fixtureConsumer(
  manifests: Record<string, BezierManifest> = defaultManifests()
): string {
  const root = mkdtempSync(join(tmpdir(), 'bezier-toolkit-'))
  writeFileSync(join(root, 'package.json'), '{"private":true}\n')
  writeFileSync(join(root, 'yarn.lock'), '# fixture\n')
  for (const spec of BEZIER_PACKAGES) {
    const packageDir = join(root, 'node_modules', ...spec.name.split('/'))
    mkdirSync(join(packageDir, 'dist'), { recursive: true })
    writeFileSync(
      join(packageDir, 'package.json'),
      `${JSON.stringify({
        name: spec.name,
        version: manifests[spec.name]?.package.version ?? '0.0.0',
        exports: { './manifest.json': './dist/manifest.json' },
      })}\n`
    )
    const manifest = manifests[spec.name]
    if (manifest) {
      writeFileSync(
        join(packageDir, 'dist', 'manifest.json'),
        `${JSON.stringify(manifest, null, 2)}\n`
      )
    }
  }
  const toolkitDir = join(root, 'node_modules', '@channel.io', 'bezier-toolkit')
  mkdirSync(toolkitDir, { recursive: true })
  writeFileSync(
    join(toolkitDir, 'package.json'),
    `${JSON.stringify({
      name: '@channel.io/bezier-toolkit',
      version: '0.1.0-next.0',
      exports: { './package.json': './package.json' },
    })}\n`
  )
  return root
}
