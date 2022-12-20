/* External dependencies */
import React, { useCallback } from 'react'

/* Internal dependencies */
import useEventLocker from 'Hooks/useEventLocker'

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
  const lockKeysPredicate = useCallback((event: React.KeyboardEvent<TargetElement>) => {
    // NOTE: If keysToLock is not provided, lock all keys.
    const isKeyLocked = !keysToLock || keysToLock.some(controlKey => event.key === controlKey)
    const isSafariKeydownAfterComposition =
      isSafari() &&
      event.type === 'keydown' &&
      event.key === 'Enter' && event.keyCode === 229

    return isKeyLocked || isSafariKeydownAfterComposition
  }, [keysToLock])

  const { isLockedRef, lock, unlock, locker } = useEventLocker<TargetElement, React.KeyboardEvent<TargetElement>>(
    lockKeysPredicate,
  )

  const handleCompositionStart = useCallback((event: React.CompositionEvent<TargetElement>) => {
    lock()
    onCompositionStart(event)
  }, [
    lock,
    onCompositionStart,
  ])

  const handleCompositionEnd = useCallback((event: React.CompositionEvent<TargetElement>) => {
    unlock()
    onCompositionEnd(event)
  }, [
    onCompositionEnd,
    unlock,
  ])

  return {
    isComposingRef: isLockedRef,
    handleKeyDown: locker(onKeyDown),
    handleKeyUp: locker(onKeyUp),
    handleKeyPress: locker(onKeyPress),
    handleCompositionStart,
    handleCompositionEnd,
  }
}

export default useKeyboardActionLockerWhileComposing
