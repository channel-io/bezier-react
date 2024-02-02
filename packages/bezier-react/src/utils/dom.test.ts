import { ariaAttr } from './dom'

describe('ariaAttr', () => {
  it('returns true when condition is true', () => {
    expect(ariaAttr(true)).toBe(true)
  })

  it('returns undefined when condition is false', () => {
    expect(ariaAttr(false)).toBeUndefined()
  })

  it('returns undefined when condition is undefined', () => {
    expect(ariaAttr()).toBeUndefined()
  })
})
