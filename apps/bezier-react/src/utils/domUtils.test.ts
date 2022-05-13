/* Internal dependencies */
import {
  document,
  window,
  getRootElement,
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

  describe('getRootElement Test >', () => {
    beforeEach(() => {
      const { body } = document
      body.innerHTML = ''
    })

    it("Get dom with 'main' id", () => {
      const target = document.createElement('span')
      target.setAttribute('id', 'main')
      const { body } = document
      body.appendChild(target)

      const rootElement = getRootElement()

      expect(rootElement).toBeInstanceOf(HTMLSpanElement)
      expect(rootElement).toHaveAttribute('id', 'main')
    })

    it("Get dom with 'root' id", () => {
      const target = document.createElement('p')
      target.setAttribute('id', 'root')
      const { body } = document
      body.appendChild(target)

      const rootElement = getRootElement()

      expect(rootElement).toBeInstanceOf(HTMLParagraphElement)
      expect(rootElement).toHaveAttribute('id', 'root')
    })

    it("Get dom with '__next' id, for Next.js", () => {
      const target = document.createElement('div')
      target.setAttribute('id', '__next')
      const { body } = document
      body.appendChild(target)

      const rootElement = getRootElement()

      expect(rootElement).toBeInstanceOf(HTMLDivElement)
      expect(rootElement).toHaveAttribute('id', '__next')
    })
  })
})
