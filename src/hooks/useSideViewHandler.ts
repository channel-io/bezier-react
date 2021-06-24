/* External dependencies */
import { useCallback } from 'react'
import { LayoutActions } from '../layout/redux'

/* Internal dependencies */
import { DispatchHandlerSuccess } from '../types/NamedPrimitive'
import useLayoutDispatch from './useLayoutDispatch'
import useLayoutState from './useLayoutState'

export default function useSideViewHandler() {
  const dispatch = useLayoutDispatch()
  const { showSideView } = useLayoutState()

  const handleOpenSideView = useCallback((): DispatchHandlerSuccess => {
    if (showSideView) { return false }
    dispatch(LayoutActions.setShowSideView(true))
    return true
  }, [
    dispatch,
    showSideView,
  ])

  const handleCloseSideView = useCallback((): DispatchHandlerSuccess => {
    dispatch(LayoutActions.setShowSideView(false))
    return true
  }, [dispatch])

  return [
    handleOpenSideView,
    handleCloseSideView,
  ]
}
