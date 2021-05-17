/* Internal dependencies */
import {
  document,
  window,
} from './domUtils'

describe('domUtils Test >', () => {
  describe('document Test >', () => {
    it('document has base methods', () => {
      expect(document).toHaveProperty('getElementById')
      expect(document).toHaveProperty('addEventListener')
      expect(document).toHaveProperty('removeEventListener')
    })
  })

  describe('window Test >', () => {
    it("window has 'requestAnimationFrame' method", () => {
      expect(window).toHaveProperty('requestAnimationFrame')
    })
  })
})
