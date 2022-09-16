import '@testing-library/jest-dom'
import 'jest-styled-components'

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
