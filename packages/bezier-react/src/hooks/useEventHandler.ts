import { useEffect, useMemo, useRef } from 'react'

import { noop } from '~/src/utils/function'
import { isEqual } from '~/src/utils/object'
import { isFunction, isNil } from '~/src/utils/type'

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
  options: boolean | HandlerOptionsProps = false
) {
  const prevOptionsRef = useRef<boolean | HandlerOptionsProps>(undefined)

  const nextOptions = useMemo(() => {
    if (isEqual(prevOptionsRef.current, options)) {
      return prevOptionsRef.current
    }
    prevOptionsRef.current = options
    return options
  }, [options])

  useEffect(() => {
    if (!isNil(element) && isFunction(element.addEventListener) && condition) {
      element.addEventListener(eventName, handler, nextOptions)

      return function cleanup() {
        element.removeEventListener(eventName, handler, nextOptions)
      }
    }

    return noop
  }, [condition, element, eventName, nextOptions, handler])

  return null
}

export default useEventHandler
