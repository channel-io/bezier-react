/* External dependencies */
import { useCallback } from 'react'
import { LayoutActions } from '../layout/redux'

/* Internal dependencies */
import { DispatchHandlerSuccess } from '../types/NamedPrimitive'
import useLayoutDispatch from './useLayoutDispatch'
import useLayoutState from './useLayoutState'

export default function useSidePanelHandler() {
  const dispatch = useLayoutDispatch()
  const { showSidePanel } = useLayoutState()

  const handleOpenSidePanel = useCallback((): DispatchHandlerSuccess => {
    if (showSidePanel) { return false }
    dispatch(LayoutActions.setShowSidePanel(true))
    return true
  }, [
    dispatch,
    showSidePanel,
  ])

  const handleCloseSidePanel = useCallback((): DispatchHandlerSuccess => {
    dispatch(LayoutActions.setShowSidePanel(false))
    return true
  }, [dispatch])

  return [
    handleOpenSidePanel,
    handleCloseSidePanel,
  ]
}
