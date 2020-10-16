import { mergeClassNames } from './stringUtils'

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
