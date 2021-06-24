/* External dependencies */
import { useCallback } from 'react'
import { LayoutActions } from '../layout/redux'

/* Internal dependencies */
import useLayoutDispatch from './useLayoutDispatch'
import useLayoutState from './useLayoutState'

export default function useSidePanelHandler() {
  const dispatch = useLayoutDispatch()
  const { showSidePanel } = useLayoutState()

  const handleOpenSidePanel = useCallback(() => dispatch(LayoutActions.setShowSidePanel(true)), [dispatch])
  const handleCloseSidePanel = useCallback(() => dispatch(LayoutActions.setShowSidePanel(false)), [dispatch])

  return [
    showSidePanel,
    handleOpenSidePanel,
    handleCloseSidePanel,
  ] as [boolean, () => void, () => void]
}
