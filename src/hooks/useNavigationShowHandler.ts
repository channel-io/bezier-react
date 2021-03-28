/* External dependencies */
import { useCallback } from 'react'

/* Internal dependencies */
import { LayoutActions } from '../layout/redux'
import useLayoutDispatch from './useLayoutDispatch'
import useLayoutState from './useLayoutState'

export default function useNavigationShowHandler() {
  const dispatch = useLayoutDispatch()
  const { showNavigation } = useLayoutState()

  return useCallback(() => {
    dispatch(LayoutActions.setShowNavigation(!showNavigation))
  }, [dispatch, showNavigation])
}
