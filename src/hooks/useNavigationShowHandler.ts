/* External dependencies */
import { useCallback } from 'react'
import { LayoutActions } from '../layout/redux'
import useLayoutDispatch from './useLayoutDispatch'

/* Internal dependencies */
import useLayoutState from './useLayoutState'

export default function useNavigationShowHandler() {
  const dispatch = useLayoutDispatch()
  const { showNavigation } = useLayoutState()

  return useCallback(() => {
    dispatch(LayoutActions.setShowNavigation(!showNavigation))
  }, [dispatch, showNavigation])
}
