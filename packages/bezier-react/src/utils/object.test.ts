import { has, isEqual } from '~/src/utils/object'

describe('objectUtils', () => {
  describe('has', () => {
    test('should return true', () => {
      const obj = {
        name: 'bezier',
        id: 1,
      }
      expect(has(obj, 'name')).toBe(true)
      expect(has(obj, 'id')).toBe(true)
    })
    test('should return false', () => {
      const obj = {
        name: 'bezier',
        id: 1,
      }
      expect(has(obj, 'age')).toBe(false)
    })
  })

  describe('isEqual', () => {
    test('should return true, if same object', () => {
      const source = {
        name: 'bora',
        company: 'channel.io',
      }
      const other = {
        name: 'bora',
        company: 'channel.io',
      }
      expect(isEqual(source, other)).toBe(true)
    })
    test('should return true, even if the order of the object property is different ', () => {
      const source = {
        name: 'bora',
        company: 'channel.io',
      }
      const other = {
        company: 'channel.io',
        name: 'bora',
      }
      expect(isEqual(source, other)).toBe(true)
    })
    test('should return false, if the object property length is different', () => {
      const source = {
        name: 'bora',
        company: 'channel.io',
      }
      const other = {
        company: 'channel.io',
      }
      expect(isEqual(source, other)).toBe(false)
    })
    test('should return true, if same RegExp', () => {
      const source = new RegExp('ab+c', 'i')
      const other = new RegExp(/ab+c/, 'i')
      expect(isEqual(source, other)).toBe(true)
    })
    test('should return false, if different constructor', () => {
      const source = new Set([1, 2])
      const other = new Map()
      other.set('1', '1')
      other.set('2', '2')
      expect(isEqual(source, other)).toBe(false)
    })
    test('should return true, if same Set', () => {
      const source = new Set([1, 2])
      const other = new Set()
      other.add(2).add(1)
      expect(isEqual(source, other)).toBe(true)
    })
    test('should return true, if same Map', () => {
      const source = new Map()
      const other = new Map()
      source.set('a', 'A')
      other.set('a', 'A')
      expect(isEqual(source, other)).toBe(true)
    })
    test('should return false, if different Map', () => {
      const source = new Map()
      const other = new Map()
      source.set('a', 'A')
      other.set('a', 'B')
      expect(isEqual(source, other)).toBe(false)
    })
    test('should return true, if same Array', () => {
      const source = [1, 2, 3]
      const other = [1, 2, 3]
      expect(isEqual(source, other)).toBe(true)
    })
    test('should return false, if array length is different', () => {
      const source = [1, 2, 3]
      const other = [1, 2]
      expect(isEqual(source, other)).toBe(false)
    })
    test('should return false, if array order is different', () => {
      const source = [1, 2, 3]
      const other = [1, 3, 2]
      expect(isEqual(source, other)).toBe(false)
    })
  })
})
