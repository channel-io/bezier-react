import assert from 'node:assert/strict'
import test from 'node:test'

import { validateFamilyMetadata } from './generate.mjs'

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
    () => validateFamilyMetadata('Tabs', ['Tabs', 'TabList', 'TabItem', 'TabBadge'], valid),
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
