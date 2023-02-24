/* Internal dependencies */
import {
  range,
  clamp,
} from 'Utils/numberUtils'

describe('numberUtils', () => {
  describe('range', () => {
    test('should return array, if one arguments', () => {
      expect(range(0)).toEqual([])
      expect(range(4)).toEqual([0, 1, 2, 3])
      expect(range(-4)).toEqual([0, -1, -2, -3])
    })
    test('should return array, if two arguments', () => {
      expect(range(1, 5)).toEqual([1, 2, 3, 4])
    })
    test('should return array, if three arguments', () => {
      expect(range(0, 20, 5)).toEqual([0, 5, 10, 15])
      expect(range(1, 4, 0)).toEqual([1, 1, 1])
    })
  })

  describe('clamp', () => {
    test('should return clamps number within bounds, if three arguments', () => {
      expect(clamp(-10, -5, 5)).toBe(-5)
      expect(clamp(10, -5, 5)).toEqual(5)
      expect(clamp(0, -5, 5)).toEqual(0)
    })
    test('should return clamps number within bounds, if two arguments', () => {
      expect(clamp(10, -5)).toEqual(-5)
      expect(clamp(10, 99)).toEqual(10)
    })
  })
})
