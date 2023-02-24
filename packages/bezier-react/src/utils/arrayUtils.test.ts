/* Internal dependencies */
import { compact, flattenDeep } from './arrayUtils'

describe('arrayUtils', () => {
  describe('compact', () => {
    it('should remove falsy item', () => {
      const array = [0, 1, false, 2, '', 3]
      expect(compact(array)).toEqual([1, 2, 3])
    })
  })

  describe('flattenDeep', () => {
    it('should return flatten array', () => {
      const array = [1, [2, [3, [4]], 5]]
      expect(flattenDeep(array)).toEqual([1, 2, 3, 4, 5])
    })
  })
})
