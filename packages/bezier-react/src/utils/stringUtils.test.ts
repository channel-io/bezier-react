import {
  camelCase,
  isNumberString,
  kebabCase,
  mergeClassNames,
  toString,
} from './stringUtils'

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

describe('toString', () => {
  test('nullish value to empty string', () => {
    expect(toString(null)).toBe('')
    expect(toString(undefined)).toBe('')
  })
  test('number to string', () => {
    expect(toString(-0)).toBe('-0')
    expect(toString(123)).toBe('123')
    expect(toString([1, 2, 3])).toBe('1,2,3')
  })
  test('array to string', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3')
  })
})

describe('kebabCase', () => {
  test('camelCase -> kebab-case', () => {
    const input = 'oneTimeMsg'
    const expected = 'one-time-msg'
    expect(kebabCase(input)).toBe(expected)
  })
  test('snake_case -> kebab-case', () => {
    const input = 'one_time_msg'
    const expected = 'one-time-msg'
    expect(kebabCase(input)).toBe(expected)
  })
  test('space separated -> kebab-case', () => {
    const input = 'one time msg'
    const expected = 'one-time-msg'
    expect(kebabCase(input)).toBe(expected)
  })
  test('upper case -> kebab-case', () => {
    const input = 'ONE TIME MSG'
    const expected = 'one-time-msg'
    expect(kebabCase(input)).toBe(expected)
  })
  test('include number -> kebab-case', () => {
    const input = 'Hourglass1'
    const expected = 'hourglass-1'
    expect(kebabCase(input)).toBe(expected)
  })
  test('include number2 -> kebab-case', () => {
    const input = '2Hourglass1'
    const expected = '2-hourglass-1'
    expect(kebabCase(input)).toBe(expected)
  })
})

describe('camelCase', () => {
  test('kebab-case -> camelCase', () => {
    const input = 'one-time-msg'
    const expected = 'oneTimeMsg'
    expect(camelCase(input)).toBe(expected)
  })
  test('snake_case -> camelCase', () => {
    const input = 'one_time_msg'
    const expected = 'oneTimeMsg'
    expect(camelCase(input)).toBe(expected)
  })
  test('space separated -> camelCase', () => {
    const input = 'one time msg'
    const expected = 'oneTimeMsg'
    expect(camelCase(input)).toBe(expected)
  })
  test('upper case -> camelCase', () => {
    const input = 'ONE TIME MSG'
    const expected = 'oneTimeMsg'
    expect(camelCase(input)).toBe(expected)
  })
  test('include number -> camelCase', () => {
    const input = 'Hourglass1'
    const expected = 'hourglass1'
    expect(camelCase(input)).toBe(expected)
  })
  test('include number2 -> camelCase', () => {
    const input = '2hourglass1'
    const expected = '2Hourglass1'
    expect(camelCase(input)).toBe(expected)
  })
})
