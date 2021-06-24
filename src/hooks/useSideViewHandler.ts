/* External dependencies */
import { useCallback } from 'react'
import { LayoutActions } from '../layout/redux'

/* Internal dependencies */
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
  ] as [boolean, () => void, () => void]
}
