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
      /**
       * NOTE
       * According to the spec(https://www.w3.org/TR/uievents/#events-composition-key-events),
       * keyDown event that exit composition should be fired before compositionEnd event.
       * However, Safari has different behavior.
       * In Safari, keyDown event that exit composition is fired after compositionEnd event.
       * So, we need to prevent keyDown event that exit composition in Safari.
       * Browser fires keydown event with keyCode 229 when user is composing.
       * An event that exits composition is also fired with keyCode 229, even though it has fired after compositionEnd event.
       * Therefore, we need to check if the event is fired with keyCode 229 in Safari.
       */
      const isSafariKeydownWhileComposing =
        isSafari() &&
        event.type === 'keydown' &&
        event.keyCode === 229

      if (isKeyLocked || isSafariKeydownWhileComposing) {
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
