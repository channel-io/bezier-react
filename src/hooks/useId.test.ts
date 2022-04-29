/* Internal dependencies */
import { renderHook } from 'Utils/testUtils'
import useId from './useId'

describe('useId >', () => {
  it('should return unique id', () => {
    const { result } = renderHook(() => useId())

    expect(result.current).toBe('1')
  })

  it('should return unique id with 1 added on the next call', () => {
    const { result } = renderHook(() => useId())

    expect(result.current).toBe('2')
  })

  it('should return id prop when given id prop', () => {
    const { result } = renderHook(() => useId('test'))

    expect(result.current).toBe('test')
  })

  it('should return unique id with a prefix when given prefix prop', () => {
    const { result } = renderHook(() => useId(undefined, 'prefix'))

    expect(result.current).toBe('prefix-3')
  })
})
