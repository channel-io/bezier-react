/* External dependencies */
import React, { useRef, useEffect } from 'react'
import { isNil, isFunction } from 'lodash-es'

type ForwardedRefInstance<T> = ((instance: T | null) => void) | React.MutableRefObject<T | null> | null | undefined

function useReusableForwardedRef<T>(forwardedRef: ForwardedRefInstance<T>): React.RefObject<T> {
  const targetRef = useRef<T>(null)

  useEffect(() => {
    if (!isNil(forwardedRef)) {
      if (isFunction(forwardedRef)) {
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
