import fs from 'fs'
import path from 'path'

describe('BaseTagBadge styles', () => {
  const scss = fs.readFileSync(
    path.resolve(__dirname, 'BaseTagBadge.module.scss'),
    'utf-8'
  )

  const variantBlocks = Array.from(
    scss.matchAll(/\.variant-([a-z-]+)\)\s*\{([^}]*)\}/g)
  ).map(([, variant, body]) => ({ variant, body }))

  it('has variant blocks to check', () => {
    expect(variantBlocks.length).toBeGreaterThan(0)
  })

  it('never uses a fill token for the text color', () => {
    variantBlocks.forEach(({ variant, body }) => {
      const color = body.match(/--b-tag-badge-color:\s*var\((--[a-z0-9-]+)\)/)
      expect([variant, color?.[1]]).toEqual([
        variant,
        expect.stringMatching(/^--color-text-/),
      ])
    })
  })
})
