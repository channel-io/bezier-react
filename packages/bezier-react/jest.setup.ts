import '@testing-library/jest-dom'
import 'jest-styled-components'

/**
 * @see https://github.com/radix-ui/primitives/blob/83a8c13bf66f3d9f17d77caeb187a69eb146930b/scripts/setup-tests.ts
 */
global.ResizeObserver = class ResizeObserver {
  cb: any

  constructor(cb: any) {
    this.cb = cb
  }

  observe() {
    this.cb([{ borderBoxSize: { inlineSize: 0, blockSize: 0 } }])
  }

  unobserve() {}

  disconnect() {}
}

/**
 * Radix-ui uses the APIs below, but the DOM in jest (JSDOM) hasn't implemented them.
 * @see https://github.com/radix-ui/primitives/issues/1822
 */
window.HTMLElement.prototype.hasPointerCapture = jest.fn()
window.HTMLElement.prototype.setPointerCapture = jest.fn()

beforeEach(() => {
  // @ts-ignore
  jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => cb())
})

afterEach(() => {
  // @ts-ignore
  window.requestAnimationFrame.mockRestore()
})
