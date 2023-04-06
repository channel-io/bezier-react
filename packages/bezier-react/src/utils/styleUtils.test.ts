/* Internal dependencies */
import {
  BoxSizingUnit,
  ExplicitDefaulting,
} from '~/src/types/CSS'

import {
  isBoxSizingUnit,
  isExplicitDefaulting,
  toLength,
} from './styleUtils'

const ExplicitDefaultingValues = Object.values(ExplicitDefaulting)
const BoxSizingUnitValues = Object.values(BoxSizingUnit)

describe('isExplicitDefaulting()', () => {
  test('should return true when given value is one of ExplicitDefaulting values', () => {
    ExplicitDefaultingValues.forEach(v => {
      expect(isExplicitDefaulting(v)).toBe(true)
    })
  })

  test('should return false when given value is not one of ExplicitDefaulting values', () => {
    expect(isExplicitDefaulting('foo')).toBe(false)
    expect(isExplicitDefaulting('bar')).toBe(false)
  })
})

describe('isBoxSizingUnit()', () => {
  test('should return true when given value is one of ExplicitDefaulting values', () => {
    BoxSizingUnitValues.forEach(v => {
      expect(isBoxSizingUnit(v)).toBe(true)
    })
  })

  test('should return false when given value is not one of ExplicitDefaulting values', () => {
    expect(isBoxSizingUnit('foo')).toBe(false)
    expect(isBoxSizingUnit('bar')).toBe(false)
  })
})

describe('toLength()', () => {
  describe('Case type of value argument is string', () => {
    test('should returns string consists of value and implicit default unit(px) when given argument has no any unit', () => {
      expect(toLength('100')).toBe('100px')
    })

    test('should returns argument when given argument has proper unit', () => {
      expect(toLength('100px')).toBe('100px')
    })

    test('should returns 0px when given argument is empty string', () => {
      expect(toLength('')).toBe('0px')
    })

    test('should returns defaultValue when given argument is empty string and defaultValue has given', () => {
      expect(toLength('', '100%')).toBe('100%')
    })

    test('should returns argument when given argument has unit which is included in option.allowUnits', () => {
      expect(toLength('100px', { allowUnits: ['px'] })).toBe('100px')
    })

    test('should returns undefined when given argument has unit which is not included in option.allowUnits', () => {
      expect(toLength('100pt', { allowUnits: ['px'] })).toBe(undefined)
    })
  })

  describe('Case value argument is one of ExplicitDefaulting', () => {
    test('should returns value itself when given argument is one of ExplicitDefaulting', () => {
      expect(toLength('initial')).toBe('initial')
      expect(toLength('inherit')).toBe('inherit')
      expect(toLength('unset')).toBe('unset')
      expect(toLength('revert')).toBe('revert')
    })
  })

  describe('Case value argument is one of BoxSizingUnit', () => {
    test('should returns value itself when given argument is one of BoxSizingUnit', () => {
      expect(toLength('auto')).toBe('auto')
      expect(toLength('min-content')).toBe('min-content')
      expect(toLength('max-content')).toBe('max-content')
      expect(toLength('fit-content')).toBe('fit-content')
    })
  })

  describe('Case type of value argument is number', () => {
    test('should returns string consists of value and implicit default unit(px)', () => {
      expect(toLength(100)).toBe('100px')
      expect(toLength(100.5)).toBe('100.5px')
      expect(toLength(-100)).toBe('-100px')
      expect(toLength(-100.5)).toBe('-100.5px')
    })

    test('should returns string consists of value and explicit defaultUnit', () => {
      expect(toLength(100, { defaultUnit: 'em' })).toBe('100em')
      expect(toLength(100.5, { defaultUnit: 'em' })).toBe('100.5em')
      expect(toLength(-100, { defaultUnit: 'em' })).toBe('-100em')
      expect(toLength(-100.5, { defaultUnit: 'em' })).toBe('-100.5em')
    })

    test('should returns 0px when given argument is NaN or Infinity', () => {
      expect(toLength(NaN)).toBe('0px')
      expect(toLength(Infinity)).toBe('0px')
    })

    test('should returns defaultValue when given argument is NaN or Infinity and defaultValue has given', () => {
      expect(toLength(NaN, '100%')).toBe('100%')
      expect(toLength(Infinity, '100%')).toBe('100%')
    })
  })

  describe('Case type of value argument is neither string nor number', () => {
    test('should returns undefined when type of given argument is neither string nor number', () => {
      expect(toLength({})).toBeUndefined()
      expect(toLength([])).toBeUndefined()
      expect(toLength(true)).toBeUndefined()
    })

    test(`
    should returns defaultValue when type of given argument is neither string nor number and defaultValue has given
    `, () => {
      expect(toLength({}, '100%')).toBe('100%')
      expect(toLength([], '100%')).toBe('100%')
      expect(toLength(true, '100%')).toBe('100%')
    })

    test('should returns undefined when given argument is nil value and defaultValue has given', () => {
      expect(toLength(null)).toBeUndefined()
      expect(toLength(undefined)).toBeUndefined()
    })

    test('should returns defaultValue when given argument is nil value', () => {
      expect(toLength(null, '100%')).toBe('100%')
      expect(toLength(undefined, '100%')).toBe('100%')
    })
  })
})
