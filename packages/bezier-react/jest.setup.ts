import '@testing-library/jest-dom'
import 'jest-styled-components'

beforeEach(() => {
  // @ts-ignore
  jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => cb())
})

afterEach(() => {
  // @ts-ignore
  window.requestAnimationFrame.mockRestore()
})
