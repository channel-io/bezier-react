/* External dependencies */
import { useEffect } from 'react'

/* Internal dependencies */
import { SIDE_FALLBACK_WIDTH } from '../constants/LayoutSizes'
import { ActionType } from '../layout/Client/utils/LayoutReducer'
import useLayoutState from './useLayoutState'
import useLayoutDispatch from './useLayoutDispatch'

export default function useSidePanelWidth(width: number = SIDE_FALLBACK_WIDTH, alwaysInitialize: boolean = false) {
  const { isSideWidthPristine, prevSideWidth } = useLayoutState()
  const dispatch = useLayoutDispatch()

  useEffect(() => {
    const payload = isSideWidthPristine || alwaysInitialize ? width : prevSideWidth

    dispatch({
      type: ActionType.SET_SIDE_WIDTH,
      payload,
    })

    return function cleanUp() {
      dispatch({
        type: ActionType.SET_SIDE_WIDTH,
        payload: 0,
      })
    }

    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [])

  return null
}
