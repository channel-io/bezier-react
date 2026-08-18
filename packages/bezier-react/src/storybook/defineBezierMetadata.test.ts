import { defineBezierMetadata } from './defineBezierMetadata'

describe('defineBezierMetadata', () => {
  it('returns the metadata object unchanged', () => {
    const metadata = {
      model: 'compound',
      root: 'Tabs',
      parts: {
        TabList: { requiresAncestor: ['Tabs'] },
      },
      independent: {},
    } as const

    expect(defineBezierMetadata(metadata)).toBe(metadata)
  })
})
