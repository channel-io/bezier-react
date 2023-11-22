import { noop } from './function'

describe('functionUtils', () => {
  describe('noop', () => {
    it('should return undefined', () => {
      expect(noop()).toBe(undefined)
    })
  })
})
