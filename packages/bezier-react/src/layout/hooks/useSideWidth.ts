/* External dependencies */
import { useEffect } from 'react'

/* Internal dependencies */
import { LayoutActions } from '~/src/layout/redux'
import { SIDE_FALLBACK_WIDTH } from '~/src/layout/LayoutSizes'
import useLayoutDispatch from './useLayoutDispatch'

export default function useSideWidth(width: number = SIDE_FALLBACK_WIDTH) {
  const dispatch = useLayoutDispatch()

  useEffect(() => {
    dispatch(LayoutActions.setSideWidth(width))
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [])

  return null
}
