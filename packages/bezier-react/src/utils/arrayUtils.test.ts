/* Internal dependencies */
import { removeItem } from './arrayUtils'

describe('arrayUtils', () => {
  describe('removeItem', () => {
    it('should remove item of given index', () => {
      const array = [1, 2, 3, 4, 5]

      expect(removeItem(array, 0)).toEqual([2, 3, 4, 5])
      expect(removeItem(array, 2)).toEqual([1, 2, 4, 5])
    })

    it('should return given array if index is out-of-bound', () => {
      const array = [1, 2, 3, 4, 5]

      expect(removeItem(array, -1)).toEqual(array)
      expect(removeItem(array, 5)).toEqual(array)
    })
  })
})
