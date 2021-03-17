/* External dependencies */
import { useEffect } from 'react'
import { noop, isNil, isFunction } from 'lodash-es'

interface HandlerOptionsProps {
  capture?: boolean
  once?: boolean
  passive?: boolean
}

function useEventHandler<K extends keyof HTMLElementEventMap>(
  element: any,
  eventName: K,
  handler: (event: HTMLElementEventMap[K]) => any,
  condition: boolean = true,
  options: boolean | HandlerOptionsProps = false,
) {
  useEffect(() => {
    if (!isNil(element) && isFunction(element.addEventListener) && condition) {
      element.addEventListener(eventName, handler, options)

      return function cleanup() {
        element.removeEventListener(eventName, handler, options)
      }
    }

    return noop
  }, [
    condition,
    element,
    eventName,
    options,
    handler,
  ])

  return null
}

export default useEventHandler
