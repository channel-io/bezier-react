import assert from 'node:assert/strict'
import test from 'node:test'

import { generateReactManifest, validateFamilyMetadata } from './generate.mjs'

const valid = {
  model: 'compound',
  root: 'Tabs',
  parts: {
    TabList: { requiresAncestor: ['Tabs'] },
    TabItem: { requiresAncestor: ['Tabs', 'TabList'] },
  },
  independent: {},
}

test('rejects a newly exported public component without classification', () => {
  assert.throws(
    () =>
      validateFamilyMetadata(
        'Tabs',
        ['Tabs', 'TabList', 'TabItem', 'TabBadge'],
        valid
      ),
    /unclassified public member.*TabBadge/
  )
})

test('rejects stale metadata after a component rename or deletion', () => {
  assert.throws(
    () => validateFamilyMetadata('Tabs', ['Tabs', 'TabList'], valid),
    /stale\/unknown member.*TabItem/
  )
})

test('rejects unknown ancestors', () => {
  assert.throws(
    () =>
      validateFamilyMetadata('Tabs', ['Tabs', 'TabList'], {
        ...valid,
        parts: { TabList: { requiresAncestor: ['Missing'] } },
      }),
    /unknown ancestor Missing/
  )
})

test('rejects ancestor cycles', () => {
  assert.throws(
    () =>
      validateFamilyMetadata('Tabs', ['Tabs', 'TabList', 'TabItem'], {
        ...valid,
        parts: {
          TabList: { requiresAncestor: ['TabItem'] },
          TabItem: { requiresAncestor: ['TabList'] },
        },
      }),
    /ancestor cycle/
  )
})

test('keeps multi-export independent members explicit', () => {
  const metadata = validateFamilyMetadata('Toast', ['Toast', 'ToastProvider'], {
    model: 'independent',
    root: 'Toast',
    parts: {},
    independent: { ToastProvider: {} },
  })
  assert.equal(metadata.model, 'independent')
  assert.deepEqual(Object.keys(metadata.independent), ['ToastProvider'])
})

test('keeps a storyless single component semantic model unknown', () => {
  assert.equal(
    validateFamilyMetadata('BaseButton', ['BaseButton'], null, false).model,
    'unknown'
  )
})

test('generates structured spec usage for every supported public family', () => {
  const manifest = generateReactManifest()
  assert.equal(manifest.schemaVersion, '2.0.0')
  const families = new Set(manifest.components.map((item) => item.family))
  assert.equal(families.size, 42)
  const withoutUsage = new Set(
    manifest.components
      .filter((item) => item.semantics.usage === null)
      .map((item) => item.family)
  )
  assert.deepEqual([...withoutUsage].sort(), [
    'Box',
    'HStack',
    'Icon',
    'SmoothCornersBox',
    'Text',
    'VStack',
  ])
  const menu = manifest.components.find((item) => item.name === 'DropdownMenu')
  assert.ok(
    menu.semantics.usage.avoid.some(
      (rule) =>
        rule.useInstead === 'Select' && rule.because.includes('폼 값 저장')
    )
  )
  assert.equal(
    menu.semantics.usage.source.repository,
    'https://github.com/channel-io/core-bezier-system'
  )
  const select = manifest.components.find((item) => item.name === 'Select')
  assert.ok(select.semantics.usage.when.some((rule) => rule.platform === 'web'))
  assert.ok(
    select.semantics.usage.when.some((rule) => rule.platform === 'mobile')
  )
})

test('rejects handwritten story usage so spec criteria cannot drift', () => {
  assert.throws(
    () =>
      validateFamilyMetadata('Tabs', ['Tabs', 'TabList', 'TabItem'], {
        ...valid,
        usage: { when: ['stale'] },
      }),
    /usage.*spec/i
  )
})
