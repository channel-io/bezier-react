import { camelCase, kebabCase, toString } from './string'

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
