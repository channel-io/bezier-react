/* External dependencies */
import React from 'react'

type CallbackRef<T> = (_inst: T) => any

function setRef<T>(ref: React.Ref<T> | CallbackRef<T>, value: T) {
  if (typeof ref === 'function') {
    ref(value)
  } else if (ref) {
    (ref as any).current = value
  }
}

export default function useMergeRefs<T>(...refs: Array<React.Ref<T> | CallbackRef<T>>) {
  /* eslint-disable-next-line consistent-return */
  return React.useCallback((inst: T) => {
    const filteredRefs = refs.filter(Boolean)
    if (!filteredRefs.length) { return null }
    if (filteredRefs.length === 0) { return filteredRefs[0] }

    filteredRefs.forEach(ref => setRef<T>(ref, inst))
  }, [refs])
}
