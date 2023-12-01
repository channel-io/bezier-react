import {
  assert,
  isDev,
} from './assert'

describe('isDev', () => {
  it('should return true when NODE_ENV is development', () => {
    process.env.NODE_ENV = 'development'

    const result = isDev()

    expect(result).toBe(true)
  })

  it('should return false when NODE_ENV is production', () => {
    process.env.NODE_ENV = 'production'

    const result = isDev()

    expect(result).toBe(false)
  })
})

describe('assert', () => {
  it('throws an AssertionException when predicate is false', () => {
    process.env.NODE_ENV = 'development'

    expect(() => assert(false)).toThrow('assertion failed')
  })

  it('throws an AssertionException with custom message when predicate is false', () => {
    process.env.NODE_ENV = 'development'

    const message = 'assert failed message'

    expect(() => assert(false, message)).toThrow(message)
  })

  it('does not throw an AssertionException when predicate is true', () => {
    process.env.NODE_ENV = 'production'

    expect(() => assert(true)).not.toThrow()
  })
})
