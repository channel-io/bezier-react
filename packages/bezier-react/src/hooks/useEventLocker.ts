/* External dependencies */
import React, { useCallback, useRef } from 'react'

type EventHandlerCache<CurrentEvent extends React.SyntheticEvent<any>> = Map<
React.EventHandler<CurrentEvent>,
React.EventHandler<CurrentEvent>
>

function useEventLocker<
TargetElement extends HTMLElement = HTMLInputElement,
CurrentEvent extends React.SyntheticEvent<TargetElement, Event> = React.SyntheticEvent<TargetElement, Event>,
>(
  predicate?: (event: CurrentEvent) => boolean,
) {
  type CurrentEventHandler = (event: CurrentEvent) => void

  const isLockedRef = useRef(false)
  const eventHandlerCache = useRef<EventHandlerCache<CurrentEvent>>(new Map())

  const locker = useCallback((handler?: CurrentEventHandler) => {
    if (!handler) { return undefined }
    if (eventHandlerCache.current.has(handler)) { return eventHandlerCache.current.get(handler) }

    const wrappedHandler = (event: CurrentEvent) => {
      const predicateIfNeedTo = () => (predicate ? predicate(event) : true)
      if (isLockedRef.current && predicateIfNeedTo()) {
        event.stopPropagation()
        return
      }
      handler?.(event)
    }

    eventHandlerCache.current.set(handler, wrappedHandler)
    return wrappedHandler
  }, [predicate])

  const lock = useCallback(() => { isLockedRef.current = true }, [])

  const unlock = useCallback(() => { isLockedRef.current = false }, [])

  return {
    isLockedRef: isLockedRef.current,
    lock,
    unlock,
    locker,
  }
}

export default useEventLocker
