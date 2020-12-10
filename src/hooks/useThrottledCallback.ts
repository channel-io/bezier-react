/* External dependencies */
import { DependencyList, useCallback } from 'react'
import { throttle } from 'lodash-es'

const defaultOptions = {
  leading: false,
  trailing: true,
}

type FunctionType = (...args: any[]) => any

function useThrottledCallback<T extends FunctionType>(
  fn: T,
  wait: number = 100,
  options: typeof defaultOptions | undefined = defaultOptions,
  dependencies: DependencyList,
) {
  const throttled = throttle<T>(fn, wait, options)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(throttled, dependencies)
}

export default useThrottledCallback
