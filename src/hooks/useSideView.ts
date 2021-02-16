/* External dependencies */
import { useCallback } from 'react'

/* Internal dependencies */
import { ActionType } from '../layout/Client/utils/LayoutReducer'
import useLayoutDispatch from './useLayoutDispatch'

export default function useSideView() {
  const dispatch = useLayoutDispatch()

  const handleShowSideView = useCallback(() => dispatch({ type: ActionType.OPEN_SIDE_VIEW }), [dispatch])
  const handleCloseSideView = useCallback(() => dispatch({ type: ActionType.CLOSE_SIDE_VIEW }), [dispatch])

  return [
    handleShowSideView,
    handleCloseSideView,
  ]
}
