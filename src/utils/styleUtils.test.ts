import { toCSSNumberType } from './styleUtils'

describe('toCSSNumberType()', () => {
  test('should returns defaultValue when type of given argument is neither string nor number', () => {
    expect(toCSSNumberType({}, '100%')).toBe('100%')
    expect(toCSSNumberType([], '100%')).toBe('100%')
    expect(toCSSNumberType(true, '100%')).toBe('100%')
  })

  test('should returns defaultValue when given argument is nil value', () => {
    expect(toCSSNumberType(null, '100%')).toBe('100%')
    expect(toCSSNumberType(undefined, '100%')).toBe('100%')
  })

  test('should returns undefined when type of given argument is neither string nor number and also defaultValue not set', () => {
    expect(toCSSNumberType({})).toBeUndefined()
    expect(toCSSNumberType([])).toBeUndefined()
    expect(toCSSNumberType(true)).toBeUndefined()
    expect(toCSSNumberType(null)).toBeUndefined()
    expect(toCSSNumberType(undefined)).toBeUndefined()
  })

  describe('Case type of value argument is string', () => {
    test('should returns string consists of value and implicit default unit(px) when given argument has no any unit', () => {
      expect(toCSSNumberType('100')).toBe('100px')
    })

    test('should returns argument when given argument has proper unit', () => {
      expect(toCSSNumberType('100px')).toBe('100px')
    })

    test('should returns 0px when given argument is empty string', () => {
      expect(toCSSNumberType('')).toBe('0px')
    })

    test('should returns argument when given argument has unit which is included in option.allowUnits', () => {
      expect(toCSSNumberType('100px', { allowUnits: ['px'] })).toBe('100px')
    })

    test('should returns undefined when given argument has unit which is not included in option.allowUnits', () => {
      expect(toCSSNumberType('100pt', { allowUnits: ['px'] })).toBe(undefined)
    })
  })

  describe('Case type of value argument is number', () => {
    test('should returns string consists of value and implicit default unit(px)', () => {
      expect(toCSSNumberType(100)).toBe('100px')
      expect(toCSSNumberType(100.5)).toBe('100.5px')
      expect(toCSSNumberType(-100)).toBe('-100px')
      expect(toCSSNumberType(-100.5)).toBe('-100.5px')
    })

    test('should returns string consists of value and explicit defaultUnit', () => {
      expect(toCSSNumberType(100, { defaultUnit: 'em' })).toBe('100em')
      expect(toCSSNumberType(100.5, { defaultUnit: 'em' })).toBe('100.5em')
      expect(toCSSNumberType(-100, { defaultUnit: 'em' })).toBe('-100em')
      expect(toCSSNumberType(-100.5, { defaultUnit: 'em' })).toBe('-100.5em')
    })
  })
})
