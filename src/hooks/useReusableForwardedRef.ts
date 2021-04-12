/* External dependencies */
import React, { useRef, useEffect } from 'react'

/* Internal dependencies */
import _ from 'lodash'

export type ForwardedRefInstance<T> = ((instance: T | null) => void) | React.MutableRefObject<T | null> | null | undefined

function useReusableForwardedRef<T>(forwardedRef: ForwardedRefInstance<T>): React.RefObject<T> {
  const targetRef = useRef<T>(null)

  useEffect(() => {
    if (!_.isNil(forwardedRef)) {
      if (_.isFunction(forwardedRef)) {
        forwardedRef(targetRef.current)
      } else {
        forwardedRef.current = targetRef.current
      }
    }
  }, [
    forwardedRef,
  ])

  return targetRef
}

export default useReusableForwardedRef
