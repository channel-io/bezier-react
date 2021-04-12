import { mergeClassNames, isNumberString } from './stringUtils'

describe('mergeClassNames()', () => {
  test('mergeClassNames() function should returns className string when 1st argument given', () => {
    expect(mergeClassNames('foo')).toBe('foo')
  })

  test('mergeClassNames() function should returns className string when both of 1st and 2nd arguments given', () => {
    expect(mergeClassNames('foo', 'bar')).toBe('foo bar')
  })

  test('mergeClassNames() function should returns className string when both of 1st, 2nd and 3rd or more arguments given', () => {
    expect(mergeClassNames('foo', 'bar', 'fooz', 'barz')).toBe('foo bar fooz barz')
  })

  test('mergeClassNames() function should returns className string when 2nd arguments given and 1st is not', () => {
    expect(mergeClassNames(undefined, 'bar')).toBe('bar')
  })

  test('mergeClassNames() function should returns className string when 2nd arguments given and 1st is empty string', () => {
    expect(mergeClassNames('', 'bar')).toBe('bar')
  })

  test('mergeClassNames() function should returns undefined when not any argument given', () => {
    expect(mergeClassNames()).toBe(undefined)
  })

  test('mergeClassNames() function should returns undefined when given every arguments are empty string', () => {
    expect(mergeClassNames('', ' ', undefined, '  ')).toBe(undefined)
  })
})

describe('isNumberString()', () => {
  test('should returns true when given argument is number', () => {
    expect(isNumberString(1)).toBe(true)
    expect(isNumberString(100)).toBe(true)
    expect(isNumberString(12345678900)).toBe(true)
    expect(isNumberString(Number.POSITIVE_INFINITY)).toBe(true)
    expect(isNumberString(Number.MAX_VALUE)).toBe(true)
  })

  test('should returns true when given argument consists of number character', () => {
    expect(isNumberString('1')).toBe(true)
    expect(isNumberString('1000')).toBe(true)
    expect(isNumberString('12345678900')).toBe(true)
  })

  test('should returns true when given argument consists of number character with a positive or a negative symbol', () => {
    expect(isNumberString('-1000')).toBe(true)
    expect(isNumberString('+1000')).toBe(true)
    expect(isNumberString('--1000')).toBe(false)
    expect(isNumberString('++1000')).toBe(false)
    expect(isNumberString('+-1000')).toBe(false)
  })

  test('should returns true when given argument is thousand-comma-formatted string', () => {
    expect(isNumberString('1,000,000,000')).toBe(true)
    expect(isNumberString('34,104,950,100')).toBe(true)
    expect(isNumberString('-34,104,950,100')).toBe(true)
    expect(isNumberString('+34,104,950,100')).toBe(true)
    expect(isNumberString('1,000,00')).toBe(false)
  })

  test('should returns true when given argument consists of number character with floating point', () => {
    expect(isNumberString('1.000')).toBe(true)
    expect(isNumberString('1.123')).toBe(true)
    expect(isNumberString('10000.12345')).toBe(true)
    expect(isNumberString('-10000.12345')).toBe(true)
    expect(isNumberString('+10000.12345')).toBe(true)
  })

  test('should returns true when given argument is thousand-comma-formatted string with floating point', () => {
    expect(isNumberString('34,104,950,100.000')).toBe(true)
    expect(isNumberString('34,104,950,100.123')).toBe(true)
    expect(isNumberString('-34,104,950,100.123')).toBe(true)
    expect(isNumberString('+34,104,950,100.123')).toBe(true)
  })

  test('should returns false when given argument is neither string nor number', () => {
    expect(isNumberString()).toBe(false)
    expect(isNumberString(true)).toBe(false)
    expect(isNumberString({ value: 123 })).toBe(false)
    expect(isNumberString(() => 100)).toBe(false)
    expect(isNumberString('abcd')).toBe(false)
    expect(isNumberString('34,104,9250,100.123')).toBe(false)
    expect(isNumberString('1234-5678')).toBe(false)
  })
})
