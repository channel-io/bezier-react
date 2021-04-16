/* Internal dependencies */
import { toCSSUnit } from './styleUtils'

describe('toCSSUnit()', () => {
  test('should returns defaultValue when type of given argument is neither string nor number', () => {
    expect(toCSSUnit({}, '100%')).toBe('100%')
    expect(toCSSUnit([], '100%')).toBe('100%')
    expect(toCSSUnit(true, '100%')).toBe('100%')
  })

  test('should returns defaultValue when given argument is nil value', () => {
    expect(toCSSUnit(null, '100%')).toBe('100%')
    expect(toCSSUnit(undefined, '100%')).toBe('100%')
  })

  test('should returns undefined when type of given argument is neither string nor number and also defaultValue not set', () => {
    expect(toCSSUnit({})).toBeUndefined()
    expect(toCSSUnit([])).toBeUndefined()
    expect(toCSSUnit(true)).toBeUndefined()
    expect(toCSSUnit(null)).toBeUndefined()
    expect(toCSSUnit(undefined)).toBeUndefined()
  })

  test('should returns defaultValue when given argument is empty string', () => {
    expect(toCSSUnit('', '100%')).toBe('100%')
  })

  test('should returns defaultValue when given argument is NaN or Infinity', () => {
    expect(toCSSUnit(NaN, '100%')).toBe('100%')
    expect(toCSSUnit(Infinity, '100%')).toBe('100%')
  })

  describe('Case type of value argument is string', () => {
    test('should returns string consists of value and implicit default unit(px) when given argument has no any unit', () => {
      expect(toCSSUnit('100')).toBe('100px')
    })

    test('should returns argument when given argument has proper unit', () => {
      expect(toCSSUnit('100px')).toBe('100px')
    })

    test('should returns 0px when given argument is empty string', () => {
      expect(toCSSUnit('')).toBe('0px')
    })

    test('should returns argument when given argument has unit which is included in option.allowUnits', () => {
      expect(toCSSUnit('100px', { allowUnits: ['px'] })).toBe('100px')
    })

    test('should returns undefined when given argument has unit which is not included in option.allowUnits', () => {
      expect(toCSSUnit('100pt', { allowUnits: ['px'] })).toBe(undefined)
    })
  })

  describe('Case type of value argument is number', () => {
    test('should returns string consists of value and implicit default unit(px)', () => {
      expect(toCSSUnit(100)).toBe('100px')
      expect(toCSSUnit(100.5)).toBe('100.5px')
      expect(toCSSUnit(-100)).toBe('-100px')
      expect(toCSSUnit(-100.5)).toBe('-100.5px')
    })

    test('should returns string consists of value and explicit defaultUnit', () => {
      expect(toCSSUnit(100, { defaultUnit: 'em' })).toBe('100em')
      expect(toCSSUnit(100.5, { defaultUnit: 'em' })).toBe('100.5em')
      expect(toCSSUnit(-100, { defaultUnit: 'em' })).toBe('-100em')
      expect(toCSSUnit(-100.5, { defaultUnit: 'em' })).toBe('-100.5em')
    })
  })
})
