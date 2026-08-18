import { writeFileSync } from 'node:fs'
import { join } from 'node:path'

import { clearCatalogCache, loadInstalledCatalog } from './catalog.js'
import { lookup } from './lookup.js'
import { defaultManifests, fixtureConsumer } from './test-utils.js'

describe('installed manifest catalog', () => {
  beforeEach(() => clearCatalogCache())

  it('looks up current-contract component, icon alias, replacement, and unknown results', () => {
    const loaded = loadInstalledCatalog(fixtureConsumer())
    expect(loaded.ok).toBe(true)
    if (!loaded.ok) return

    const component = lookup(loaded.catalog, 'Tabs')
    expect(component).toMatchObject({
      found: true,
      exact: true,
      matches: [
        {
          kind: 'component',
          name: 'Tabs',
          data: { semantics: { model: 'compound', root: 'Tabs' } },
        },
      ],
    })
    expect(lookup(loaded.catalog, 'MagicIcon')).toMatchObject({
      found: true,
      matches: [{ kind: 'icon', name: 'AiIcon', matchedBy: 'alias' }],
    })
    expect(lookup(loaded.catalog, 'color.old')).toMatchObject({
      found: true,
      matches: [{ kind: 'token', deprecated: true, replacement: 'color.new' }],
    })
    expect(lookup(loaded.catalog, 'DefinitelyUnknown')).toEqual({
      found: false,
      query: 'DefinitelyUnknown',
      reason: 'unknown',
      matches: [],
    })
    expect(lookup(loaded.catalog, '   ')).toEqual({
      found: false,
      query: '   ',
      reason: 'unknown',
      matches: [],
    })
    expect(lookup(loaded.catalog, 'color')).toMatchObject({
      found: true,
      exact: false,
      matches: [{ matchedBy: 'substring' }, { matchedBy: 'substring' }],
    })
  })

  it('reuses only the same installed package tuple and manifest paths', () => {
    const cwd = fixtureConsumer()
    const first = loadInstalledCatalog(cwd)
    const second = loadInstalledCatalog(cwd)
    expect(first.ok && first.cacheHit).toBe(false)
    expect(second.ok && second.cacheHit).toBe(true)
    if (!first.ok || !second.ok) return

    const changed = defaultManifests()
    const icons = changed['@channel.io/bezier-icons']
    icons.package.version = '0.59.0-next.0'
    writeFileSync(
      join(
        cwd,
        'node_modules',
        '@channel.io',
        'bezier-icons',
        'dist',
        'manifest.json'
      ),
      `${JSON.stringify(icons, null, 2)}\n`
    )
    const third = loadInstalledCatalog(cwd)
    expect(third.ok && third.cacheHit).toBe(false)
    if (!third.ok) return
    expect(third.catalog.packageTuple).not.toBe(first.catalog.packageTuple)
  })
})
