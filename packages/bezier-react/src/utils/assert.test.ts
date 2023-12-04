import {
  AssertionException,
  assert,
  isDev,
  warn,
} from './assert'

describe('isDev', () => {
  const ORIGINAL_ENV = process.env

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...ORIGINAL_ENV }
  })

  afterAll(() => {
    process.env = ORIGINAL_ENV
  })

  it('should return true when NODE_ENV is not production', () => {
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
  const ORIGINAL_ENV = process.env

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...ORIGINAL_ENV }
  })

  afterAll(() => {
    process.env = ORIGINAL_ENV
  })

  it('should throw an assertion exception error in development environment when the predicate is false', () => {
    process.env.NODE_ENV = 'development'

    expect(() => assert(false)).toThrow(new AssertionException())
  })

  it('should throw an "failed" with a error in development environment when the predicate is false', () => {
    process.env.NODE_ENV = 'development'

    expect(() => assert(false, 'failed')).toThrow(new AssertionException('failed'))
  })

  it('should not throw in production environment when the predicate is true', () => {
    process.env.NODE_ENV = 'production'

    expect(() => assert(true)).not.toThrow(new AssertionException())
  })
})

describe('warn', () => {
  const ORIGINAL_ENV = process.env

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...ORIGINAL_ENV }
  })

  afterAll(() => {
    process.env = ORIGINAL_ENV
  })

  it('should output the message using console.warn if the message argument is passed', () => {
    process.env.NODE_ENV = 'development'

    const warnSpy = jest.spyOn(console, 'warn')

    warn('Warn')

    expect(warnSpy).toHaveBeenCalled()
    expect(warnSpy).toHaveBeenCalledWith('Warn')

    warnSpy.mockRestore()
  })
})
