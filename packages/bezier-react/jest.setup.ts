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

beforeEach(() => {
  // @ts-ignore
  jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => cb())
})

afterEach(() => {
  // @ts-ignore
  window.requestAnimationFrame.mockRestore()
})
