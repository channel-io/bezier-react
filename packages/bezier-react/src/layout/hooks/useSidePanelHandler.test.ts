/* External dependencies */
import { act } from '@testing-library/react'

/* Internal dependencies */
import { renderHook } from 'Utils/testUtils'

import LayoutProvider from 'Layout/LayoutProvider'
import useSidePanelHandler from './useSidePanelHandler'

describe('useSidePanelHandler >', () => {
  it('handleOpenSidePanel >', () => {
    const { result, rerender } = renderHook(() => useSidePanelHandler(), { wrapper: LayoutProvider })

    act(() => {
      result.current[1]()
    })
    rerender()

    expect(result.current[0]).toBe(true)
  })

  it('handleCloseSidePanel >', () => {
    const { result, rerender } = renderHook(() => useSidePanelHandler(), { wrapper: LayoutProvider })

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
