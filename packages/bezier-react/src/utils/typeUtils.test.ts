/* Internal dependencies */
import {
  isFunction,
  isNil,
  isObject,
  isArray,
  isBoolean,
  isInteger,
  isNumber,
  isNaN,
  isString,
  isSymbol,
  isRegExp,
  isEmpty,
  noop,
} from './typeUtils'

describe('typeUtils', () => {
  describe('isFunction', () => {
    it('is function', () => {
      expect(isFunction(noop)).toBe(true)
      expect(isFunction(function func() {})).toBe(true)
    })
  })

  describe('isNil', () => {
    it('not null & undefined', () => {
      expect(isNil(0)).toBe(false)
      expect(isNil('')).toBe(false)
      expect(isNil(NaN)).toBe(false)
      expect(isNil({})).toBe(false)
      expect(isNil([])).toBe(false)
    })

    it('is null or undefined', () => {
      expect(isNil(null)).toBe(true)
      expect(isNil(undefined)).toBe(true)
    })
  })

  describe('isObject', () => {
    it('not an object', () => {
      expect(isObject(null)).toBe(false)
      expect(isObject(undefined)).toBe(false)
      expect(isObject(NaN)).toBe(false)
      expect(isObject('object')).toBe(false)
    })

    it('is object', () => {
      expect(isObject({})).toBe(true)
      expect(isObject({ a: 'A' })).toBe(true)
      expect(isObject([1, 2, 3])).toBe(true)
      expect(isObject(noop)).toBe(true)
    })
  })

  describe('isArray', () => {
    it('not an array', () => {
      expect(isArray(null)).toBe(false)
      expect(isArray(undefined)).toBe(false)
      expect(isArray('array')).toBe(false)
      expect(isArray(noop)).toBe(false)
    })

    it('is array', () => {
      expect(isArray([])).toBe(true)
      expect(isArray([1, 2, 3])).toBe(true)
    })
  })

  describe('isBoolean', () => {
    it('not a boolean', () => {
      expect(isBoolean(null)).toBe(false)
      expect(isBoolean(undefined)).toBe(false)
      expect(isBoolean(0)).toBe(false)
    })

    it('is boolean', () => {
      expect(isBoolean(true)).toBe(true)
      expect(isBoolean(false)).toBe(true)
      expect(isBoolean(!!'test')).toBe(true)
    })
  })

  describe('isInteger', () => {
    it('not an integer', () => {
      expect(isInteger(Number.MIN_VALUE)).toBe(false)
      expect(isInteger(Number.POSITIVE_INFINITY)).toBe(false)
      expect(isInteger(undefined)).toBe(false)
      expect(isInteger('123')).toBe(false)
    })

    it('is integer', () => {
      expect(isInteger(3)).toBe(true)
      expect(isInteger(Number('123'))).toBe(true)
      expect(isInteger(Number.MAX_SAFE_INTEGER)).toBe(true)
    })
  })

  describe('isNumber', () => {
    it('not a number', () => {
      expect(isNumber(null)).toBe(false)
      expect(isNumber(undefined)).toBe(false)
      expect(isNumber('123')).toBe(false)
    })

    it('is number', () => {
      expect(isNumber(0)).toBe(true)
      expect(isNumber(Number('123'))).toBe(true)
      expect(isNumber(Infinity)).toBe(true)
    })
  })

  describe('isNaN', () => {
    it('not a NaN', () => {
      expect(isNaN(null)).toBe(false)
      expect(isNaN(undefined)).toBe(false)
      expect(isNaN('123')).toBe(false)
    })

    it('is NaN', () => {
      expect(isNaN(NaN)).toBe(true)
      expect(isNaN(Number(NaN))).toBe(true)
    })
  })

  describe('isString', () => {
    it('not a string', () => {
      expect(isString(100)).toBe(false)
      expect(isString([])).toBe(false)
      expect(isString(true)).toBe(false)
    })

    it('is string', () => {
      expect(isString('')).toBe(true)
      expect(isString('test')).toBe(true)
      expect(isString(String(123))).toBe(true)
    })
  })

  describe('isSymbol', () => {
    it('not a Symbol', () => {
      expect(isSymbol('sym')).toBe(false)
    })

    it('is Symbol', () => {
      expect(isSymbol(Symbol('sym'))).toBe(true)
    })
  })

  describe('isRegExp', () => {
    it('not a RegExp', () => {
      expect(isRegExp('RegExp')).toBe(false)
    })

    it('is RegExp', () => {
      expect(isRegExp(new RegExp(/ab+c/, 'i'))).toBe(true)
      expect(isRegExp(new RegExp('ab+c', 'i'))).toBe(true)
      expect(isRegExp(/\w+/)).toBe(true)
    })
  })

  describe('isEmpty', () => {
    it('not empty', () => {
      expect(isEmpty('test')).toBe(false)
      expect(isEmpty({ a: 'A' })).toBe(false)
      expect(isEmpty([1, 2, 3])).toBe(false)
      expect(isEmpty(new Set([1]))).toBe(false)
      expect(isEmpty(false)).toBe(false)
      expect(isEmpty(0)).toBe(false)
    })

    it('is empty', () => {
      expect(isEmpty(null)).toBe(true)
      expect(isEmpty('')).toBe(true)
      expect(isEmpty({})).toBe(true)
      expect(isEmpty([])).toBe(true)
      expect(isEmpty(new Set())).toBe(true)
      expect(isEmpty(new Map())).toBe(true)
    })
  })

  describe('noop', () => {
    it('should return undefined', () => {
      expect(noop()).toBe(undefined)
    })
  })
})
