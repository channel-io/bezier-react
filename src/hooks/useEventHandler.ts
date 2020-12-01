/* External dependencies */
import { useEffect } from 'react'
import { noop, isNil } from 'lodash-es'

function useEventHandler<K extends keyof HTMLElementEventMap>(
  element: any,
  eventName: K,
  handler: (event: HTMLElementEventMap[K]) => any,
  condition: boolean = true,
) {
  useEffect(() => {
    if (!isNil(element) && condition) {
      element.addEventListener(eventName, handler)

      return function cleanup() {
        element.removeEventListener(eventName, handler)
      }
    }

    return noop
  }, [condition, element, eventName, handler])

  return null
}

export default useEventHandler
