import { isDev } from './assert'

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

