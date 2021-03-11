/* External dependencies */
import { useEffect } from 'react'
import LayoutHeaderType from '../constants/LayoutHeaderType'
import { LayoutActions } from '../layout/redux'

/* Internal dependencies */
import useLayoutDispatch from './useLayoutDispatch'

export default function useHeader(type: LayoutHeaderType) {
  const dispatch = useLayoutDispatch()

  useEffect(() => {
    const payload = (() => {
      if (type === LayoutHeaderType.ContentHeader) {
        return { showContentHeader: true }
      }
      if (type === LayoutHeaderType.CoverableHeader) {
        return { showCoverableHeader: true }
      }
      return {}
    })()

    dispatch(LayoutActions.setShowHeader(payload))

    return function cleanUp() {
      Object.keys(payload).forEach((key) => { payload[key] = !payload[key] })
      dispatch(LayoutActions.setShowHeader(payload))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
