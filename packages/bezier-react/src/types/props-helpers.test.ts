import { getLayoutStyles } from './props-helpers'

describe('props-helpers', () => {
  describe('getLayoutStyles', () => {
    it('maps beta layout token props to CSS module class names', () => {
      const result = getLayoutStyles({
        borderRadius: '8',
        elevation: '1',
        zIndex: 'modal',
      })

      expect(result.className).toContain('elevation-1')
      expect(result.className).toContain('radius-8')
      expect(result.className).toContain('z-index-modal')
    })
  })
})
