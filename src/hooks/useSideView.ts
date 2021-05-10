/* External dependencies */
import { useCallback } from 'react'
import { LayoutActions } from '../layout/redux'

/* Internal dependencies */
import useLayoutDispatch from './useLayoutDispatch'

export default function useSideView() {
  const dispatch = useLayoutDispatch()

  const handleShowSideView = useCallback(() => dispatch(LayoutActions.openSideView()), [dispatch])
  const handleCloseSideView = useCallback(() => dispatch(LayoutActions.closeSideView()), [dispatch])

  return [
    handleShowSideView,
    handleCloseSideView,
  ]
}
