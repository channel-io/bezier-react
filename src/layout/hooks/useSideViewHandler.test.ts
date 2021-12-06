/* External dependencies */
import { renderHook, act } from '@testing-library/react-hooks'

/* Internal dependencies */
import LayoutProvider from 'Layout/LayoutProvider'
import useSideViewHandler from './useSideViewHandler'

describe('useSideViewHandler >', () => {
  it('handleOpenSideView >', () => {
    const { result, rerender } = renderHook(() => useSideViewHandler(), { wrapper: LayoutProvider })

    act(() => {
      result.current[1]()
    })
    rerender()

    expect(result.current[0]).toBe(true)
  })

  it('handleCloseSideView >', () => {
    const { result, rerender } = renderHook(() => useSideViewHandler(), { wrapper: LayoutProvider })

    act(() => {
      result.current[1]()
    })
    rerender()

    expect(result.current[0]).toBe(true)

    act(() => {
      result.current[2]()
    })
    rerender()

    expect(result.current[0]).toBe(false)
  })
})
