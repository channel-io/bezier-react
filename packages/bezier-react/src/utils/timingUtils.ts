/* Internal dependencies */
import {
  isObject,
} from './typeUtils'

interface DebounceSettings {
  leading?: boolean | undefined
  maxWait?: number | undefined
  trailing?: boolean | undefined
}

export function debounce<T extends (...args: any[]) => any>(func: T, wait = 0, options?: DebounceSettings) {
  let lastArgs: Parameters<T> | undefined
  let maxWait: number | undefined
  let timerId: number | undefined
  let lastCallTime: number | undefined

  let lastInvokeTime: number = 0
  let leading: boolean = false
  let maxing: boolean = false
  let trailing: boolean = true

  if (isObject(options)) {
    leading = !!options.leading
    maxing = 'maxWait' in options
    maxWait = maxing ? Math.max(options.maxWait || 0, wait) : maxWait
    trailing = 'trailing' in options ? !!options.trailing : trailing
  }

  function invokeFunc(time: number) {
    const args = lastArgs

    lastArgs = undefined
    lastInvokeTime = time
    if (args) { func(...args) }
  }

  function remainingWait(time: number) {
    const timeSinceLastCall = time - lastCallTime!
    const timeSinceLastInvoke = time - lastInvokeTime
    const timeWaiting = wait - timeSinceLastCall

    return maxing
      ? Math.min(timeWaiting, maxWait! - timeSinceLastInvoke)
      : timeWaiting
  }

  function shouldInvoke(time: number) {
    if (lastCallTime === undefined) { return true }

    const timeSinceLastCall = time - lastCallTime
    const timeSinceLastInvoke = time - lastInvokeTime
    return (
      (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) ||
      (maxing && timeSinceLastInvoke >= maxWait!)
    )
  }

  function trailingEdge(time: number) {
    timerId = undefined

    if (trailing && lastArgs) {
      invokeFunc(time)
      return
    }
    lastArgs = undefined
  }

  function timerExpired() {
    const time = Date.now()
    if (shouldInvoke(time)) {
      return trailingEdge(time)
    }

    timerId = window.setTimeout(timerExpired, remainingWait(time))
    return timerId
  }

  function leadingEdge(time: number) {
    lastInvokeTime = time
    timerId = window.setTimeout(timerExpired, wait)
    if (leading) { invokeFunc(time) }
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId)
    }
    lastInvokeTime = 0
    lastArgs = undefined
    lastCallTime = undefined
    timerId = undefined
  }

  function flush() {
    if (timerId) { trailingEdge(Date.now()) }
  }

  function pending() {
    return timerId !== undefined
  }

  function debounced(...args: Parameters<T>) {
    const time = Date.now()
    const isInvoking = shouldInvoke(time)

    lastArgs = args
    lastCallTime = time

    if (isInvoking) {
      if (timerId === undefined) {
        leadingEdge(lastCallTime)
        return
      }
      if (maxing) {
        timerId = window.setTimeout(timerExpired, wait)
        invokeFunc(lastCallTime)
        return
      }
    }
    if (timerId === undefined) {
      timerId = window.setTimeout(timerExpired, wait)
    }
  }
  debounced.cancel = cancel
  debounced.flush = flush
  debounced.pending = pending
  return debounced
}

interface ThrottleSettings {
  leading?: boolean | undefined
  trailing?: boolean | undefined
}

export function throttle<T extends (...args: any[]) => any>(func: T, wait = 0, options?: ThrottleSettings) {
  let leading = true
  let trailing = true

  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading
    trailing = 'trailing' in options ? !!options.trailing : trailing
  }
  return debounce(func, wait, {
    leading,
    trailing,
    maxWait: wait,
  })
}
