/* External dependencies */
import React, { forwardRef, useState, useEffect, useCallback, useRef } from 'react'
import { noop } from 'lodash-es'
import { window, document, extend } from 'ssr-window'

/* Internal dependencies */
import { listen } from '../../../utils/utils'
import NavigationProps from './Navigation.types'
import { NavigationWrapper, StyledNavigation, ResizeBar } from './Navigation.styled'

extend(document, {
  requestAnimationFrame() {},
})

function Navigation({
  className = '',
  optionIndex = 0,
  onMouseDown = noop,
  onMouseUp = noop,
  onMouseMove = noop,
  children,
}: NavigationProps, forwardedRef: React.Ref<HTMLDivElement>) {
  const [allowMouseMove, setAllowMouseMove] = useState(false)
  const resizeBarRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = useCallback((event: HTMLElementEventMap['mousedown']) => {
    onMouseDown(event, optionIndex)
    setAllowMouseMove(true)
  }, [optionIndex, onMouseDown])

  const handleMouseUp = useCallback(() => {
    setAllowMouseMove(false)
    onMouseUp()
  }, [onMouseUp])

  const handleMouseMove = useCallback((event: HTMLElementEventMap['mousemove']) => {
    window.requestAnimationFrame!(() => {
      if (!allowMouseMove) return
      onMouseMove(event)
    })
  }, [allowMouseMove, onMouseMove])

  useEffect(() => {
    const removeNavigationMouseDownListener = listen(resizeBarRef.current, 'mousedown', handleMouseDown)
    const removeDocumentMouseUpListener = listen(document, 'mouseup', handleMouseUp)

    return function cleanup() {
      removeNavigationMouseDownListener()
      removeDocumentMouseUpListener()
    }
  }, [handleMouseDown, handleMouseUp])

  useEffect(() => {
    if (allowMouseMove) {
      const removeDocumentMouseMoveListener = listen(document, 'mousemove', handleMouseMove)

      return function cleanup() {
        removeDocumentMouseMoveListener()
      }
    }

    return noop
  }, [allowMouseMove, handleMouseMove])

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
