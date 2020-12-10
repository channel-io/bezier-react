/* External dependencies */
import { DependencyList, useCallback } from 'react'
import { throttle } from 'lodash-es'

const defaultOptions = {
  leading: false,
  trailing: true,
}

function useThrottleCallback(
  fn: (...args: any[]) => any,
  wait: number = 100,
  options: typeof defaultOptions | undefined = defaultOptions,
  dependencies: DependencyList,
) {
  const throttled = throttle(fn, wait, options)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(throttled, dependencies)
}

export default useThrottleCallback
