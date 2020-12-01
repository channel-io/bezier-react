/* External dependencies */
import React, { forwardRef, useState, useCallback } from 'react'
import { noop } from 'lodash-es'
import { window, document, extend } from 'ssr-window'

/* Internal dependencies */
import useEventHandler from '../../../hooks/useEventHandler'
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
  const [resizeBarRef, serResizeBarRef] = useState<HTMLDivElement | null>(null)

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

  useEventHandler(resizeBarRef, 'mousedown', handleMouseDown)
  useEventHandler(document, 'mouseup', handleMouseUp)
  useEventHandler(document, 'mousemove', handleMouseMove, allowMouseMove)

  return (
    <NavigationWrapper>
      <StyledNavigation className={className} ref={forwardedRef}>
        { children }
      </StyledNavigation>
      <ResizeBar ref={serResizeBarRef} />
    </NavigationWrapper>
  )
}

export default forwardRef(Navigation)
