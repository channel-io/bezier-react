/* External dependencies */
import { useCallback } from 'react'

/* Internal dependencies */
import { LayoutActions } from '../layout/redux'
import useLayoutDispatch from './useLayoutDispatch'
import useLayoutState from './useLayoutState'

export default function useSideViewHandler() {
  const dispatch = useLayoutDispatch()
  const { showSideView } = useLayoutState()

  const handleOpenSideView = useCallback(() => dispatch(LayoutActions.setShowSideView(true)), [dispatch])
  const handleCloseSideView = useCallback(() => dispatch(LayoutActions.setShowSideView(false)), [dispatch])

  return [
    showSideView,
    handleOpenSideView,
    handleCloseSideView,
  ] as const
}
