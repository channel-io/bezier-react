import {
  assert,
  isDev,
  warn,
} from './assert'

describe('isDev', () => {
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
  it('should throw an "failed" when the predicate is false', () => {
    process.env.NODE_ENV = 'development'

    expect(() => assert(false)).toThrow('failed')
  })

  it('should throw an "failed" with a message when the predicate is false', () => {
    process.env.NODE_ENV = 'development'

    expect(() => assert(false, 'failed')).toThrow('failed')
  })

  it('should not throw when the predicate is true', () => {
    process.env.NODE_ENV = 'production'

    expect(() => assert(true)).not.toThrow()
  })
})

describe('warn', () => {
  it('should output the message using console.warn if the message argument is passed', () => {
    process.env.NODE_ENV = 'development'

    const warnSpy = jest.spyOn(console, 'warn')

    warn('Warn')

    expect(warnSpy).toHaveBeenCalled()
    expect(warnSpy).toHaveBeenCalledWith('Warn')

    warnSpy.mockRestore()
  })
})
