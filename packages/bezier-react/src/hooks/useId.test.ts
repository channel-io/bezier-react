/* Internal dependencies */
import { renderHook } from '~/src/utils/testUtils'
import useId, { useIdLegacy } from './useId'

describe('useId >', () => {
  it('should return unique id', () => {
    const { result } = renderHook(() => useId())

    expect(result.current).toBe(':r0:')
  })

  it('should return unique id with 1 added on the next call', () => {
    const { result } = renderHook(() => useId())

    expect(result.current).toBe(':r1:')
  })

  it('should return id prop when given id prop', () => {
    const { result } = renderHook(() => useId('test'))

    expect(result.current).toBe('test')
  })

  it('should return unique id with a prefix when given prefix prop', () => {
    const { result } = renderHook(() => useId(undefined, 'prefix'))

    expect(result.current).toBe('prefix-:r3:')
  })
})

describe('useIdLegacy >', () => {
  it('should return unique id', () => {
    const { result } = renderHook(() => useIdLegacy())

    expect(result.current).toBe('1')
  })

  it('should return unique id with 1 added on the next call', () => {
    const { result } = renderHook(() => useIdLegacy())

    expect(result.current).toBe('2')
  })

  it('should return id prop when given id prop', () => {
    const { result } = renderHook(() => useIdLegacy('test'))

    expect(result.current).toBe('test')
  })

  it('should return unique id with a prefix when given prefix prop', () => {
    const { result } = renderHook(() => useIdLegacy(undefined, 'prefix'))

    expect(result.current).toBe('prefix-3')
  })
})
