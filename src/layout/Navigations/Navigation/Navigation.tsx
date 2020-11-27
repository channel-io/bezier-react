/* External dependencies */
import React, { forwardRef, useState, useEffect, useCallback, useRef } from 'react'
import { noop, get } from 'lodash-es'

/* Internal dependencies */
import NavigationProps, { EventHandler } from './Navigation.types'
import { NavigationWrapper, StyledNavigation, ResizeBar } from './Navigation.styled'

function listen<K extends keyof HTMLElementEventMap>(
  element: any,
  eventName: K,
  handler: EventHandler<K>,
) {
  if (!element) return noop

  element.addEventListener(eventName, handler)
  return function cleanup() {
    element.removeEventListener(eventName, handler)
  }
}

function Navigation({
  className = '',
  _injected,
  children,
}: NavigationProps, forwardedRef: React.Ref<HTMLDivElement>) {
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false)
  const resizeBarRef = useRef<any>()

  const handleMouseDown = useCallback(
    (event: HTMLElementEventMap['mousedown']) => {
      const mouseDownHandler = get(_injected, 'onMouseDown', noop)
      const optionIndex = get(_injected, 'optionIndex', 0)
      mouseDownHandler(event, optionIndex)
      setIsMouseDown(true)
    },
    [_injected],
  )

  const handleMouseUp = useCallback(() => {
    const mouseUpHandler = get(_injected, 'onMouseUp', noop)
    mouseUpHandler()
    setIsMouseDown(false)
  }, [_injected])

  const handleMouseMove = useCallback(
    (event: HTMLElementEventMap['mousemove']) => {
      if (!isMouseDown) return

      const mouseMoveHandler = get(_injected, 'onMouseMove', noop)
      mouseMoveHandler(event)
    },
    [isMouseDown, _injected],
  )

  useEffect(() => {
    const removeNavigationMouseDownListener = listen(
      resizeBarRef.current,
      'mousedown',
      handleMouseDown,
    )
    const removeDocumentMouseUpListener = listen(
      document,
      'mouseup',
      handleMouseUp,
    )

    return function cleanup() {
      removeNavigationMouseDownListener()
      removeDocumentMouseUpListener()
    }
  }, [handleMouseDown, handleMouseUp])

  useEffect(() => {
    if (isMouseDown) {
      const removeDocumentMouseMoveListener = listen(
        document,
        'mousemove',
        handleMouseMove,
      )

      return function cleanup() {
        removeDocumentMouseMoveListener()
      }
    }

    return noop
  }, [isMouseDown, handleMouseMove])

  return (
    <NavigationWrapper>
      <StyledNavigation className={className} ref={forwardedRef}>
        { children }
      </StyledNavigation>
      <ResizeBar ref={resizeBarRef} />
    </NavigationWrapper>
  )
}

export default forwardRef(Navigation)
