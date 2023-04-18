import { noop } from './functionUtils'

describe('functionUtils', () => {
  describe('noop', () => {
    it('should return undefined', () => {
      expect(noop()).toBe(undefined)
    })
  })
})
