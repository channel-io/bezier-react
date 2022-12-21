/* External dependencies */
import React, { useCallback, useRef } from 'react'

type HandlerCache<TargetElement extends HTMLElement = HTMLInputElement> =
  Map<React.KeyboardEventHandler<TargetElement>, React.KeyboardEventHandler<TargetElement>>
interface UseKeyboardActionLockerWhileComposingProps<TargetElement extends HTMLElement = HTMLInputElement> {
  keysToLock?: string[]
  onKeyDown?: React.KeyboardEventHandler<TargetElement>
  onKeyUp?: React.KeyboardEventHandler<TargetElement>
  onKeyPress?: React.KeyboardEventHandler<TargetElement>
  onCompositionStart?: React.CompositionEventHandler<TargetElement>
  onCompositionEnd?: React.CompositionEventHandler<TargetElement>
}

const noop = () => {}
const isSafari = () => window.navigator.userAgent.search('Safari') >= 0 && window.navigator.userAgent.search('Chrome') < 0

function useKeyboardActionLockerWhileComposing<TargetElement extends HTMLElement = HTMLInputElement>({
  keysToLock,
  onKeyDown,
  onKeyUp,
  onKeyPress,
  onCompositionStart = noop,
  onCompositionEnd = noop,
}: UseKeyboardActionLockerWhileComposingProps<TargetElement>) {
  const isComposingRef = useRef(false)
  const handlerCache = useRef<HandlerCache<TargetElement>>(new Map())

  const wrapHandler = useCallback((handler?: React.KeyboardEventHandler<TargetElement>) => {
    if (!handler) { return undefined }
    if (handlerCache.current.has(handler)) { return handlerCache.current.get(handler) }

    const wrappedHandler = (event: React.KeyboardEvent<TargetElement>) => {
      // NOTE: If keysToLock is not provided, lock all keys.
      const isKeyLocked = isComposingRef.current && (!keysToLock || keysToLock.some(controlKey => event.key === controlKey))
      const isSafariKeydownAfterComposition =
        isSafari() &&
        event.type === 'keydown' &&
        event.key === 'Enter' && event.keyCode === 229

      if (isKeyLocked || isSafariKeydownAfterComposition) {
        event.stopPropagation()
        return
      }
      handler?.(event)
    }

    handlerCache.current.set(handler, wrappedHandler)
    return wrappedHandler
  }, [keysToLock])

  const handleCompositionStart = useCallback((event: React.CompositionEvent<TargetElement>) => {
    isComposingRef.current = true
    onCompositionStart(event)
  }, [onCompositionStart])

  const handleCompositionEnd = useCallback((event: React.CompositionEvent<TargetElement>) => {
    isComposingRef.current = false
    onCompositionEnd(event)
  }, [onCompositionEnd])

  return {
    isComposingRef,
    handleKeyDown: wrapHandler(onKeyDown),
    handleKeyUp: wrapHandler(onKeyUp),
    handleKeyPress: wrapHandler(onKeyPress),
    handleCompositionStart,
    handleCompositionEnd,
  }
}

export default useKeyboardActionLockerWhileComposing
