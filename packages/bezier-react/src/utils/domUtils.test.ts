/* Internal dependencies */
import {
  document,
  window,
  getRootElement,
} from './domUtils'

describe('domUtils', () => {
  describe('document', () => {
    it('should have base methods', () => {
      expect(document).toHaveProperty('getElementById')
      expect(document).toHaveProperty('addEventListener')
      expect(document).toHaveProperty('removeEventListener')
    })
  })

  describe('window', () => {
    it("should have 'requestAnimationFrame' method", () => {
      expect(window).toHaveProperty('requestAnimationFrame')
    })
  })

  describe('getRootElement()', () => {
    it('should return document.body element', () => {
      expect(getRootElement()).toEqual(document.body)
    })
  })
})
