/* External dependencies */
import { useEffect } from 'react'

/* Internal dependencies */
import { SIDE_FALLBACK_WIDTH } from '../constants/LayoutSizes'
import { ActionType } from '../layout/Client/utils/LayoutReducer'
import useLayoutDispatch from './useLayoutDispatch'

export default function useSideWidth(width: number = SIDE_FALLBACK_WIDTH) {
  const dispatch = useLayoutDispatch()

  useEffect(() => {
    dispatch({
      type: ActionType.SET_SIDE_WIDTH,
      payload: width,
    })
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [])

  return null
}
