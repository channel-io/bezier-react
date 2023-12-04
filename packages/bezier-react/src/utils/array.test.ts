import {
  compact,
  flattenDeep,
  isLastArrayIndex,
} from './array'

describe('isLastArrayIndex', () => {
  it('should return true when the last array index', () => {
    const arr = [0, 1, 2, 3, 4]

    const result = isLastArrayIndex(arr, 4)

    expect(result).toBe(true)
  })

  it('should return false when not the last array index', () => {
    const arr = [0, 1, 2, 3, 4]

    const result = isLastArrayIndex(arr, 1)

    expect(result).toBe(false)
  })
})

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
