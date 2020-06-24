/* External dependencies */
import React, { useState, useRef, useEffect, useCallback } from 'react'
import _ from 'lodash'

/* Internal dependencies */
import { StyledNavigation, StyledHandle } from './Navigation.styled'
import NavigationProps from './Navigation.types'

/* eslint-disable @typescript-eslint/no-unused-vars */
function Navigation({
  testId = 'nav',
  style,
  className,
  minWidth = 240,
  maxWidth = 540,
  disableResize = false,
  onChangeWidth = _.noop,
  children,
}: NavigationProps) {
  const navigationRef = useRef(null)
  const [width, setWidth] = useState<number>(minWidth)
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    onChangeWidth(width)
  }, [width, onChangeWidth])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (disableResize) { return }

    window.requestAnimationFrame(() => setWidth(
      _.clamp(
        e.pageX - navigationRef.current?.offsetLeft,
        minWidth,
        maxWidth,
      ),
    ))
  }, [
    navigationRef,
    disableResize,
    minWidth,
    maxWidth,
  ])

  const handleMouseDown = useCallback(() => {
    setIsDragging(true)
    document.addEventListener('mousemove', handleMouseMove, false)
  }, [handleMouseMove])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
    document.removeEventListener('mousemove', handleMouseMove, false)
  }, [handleMouseMove])

  document.addEventListener('mouseup', handleMouseUp, false)

  return (
    <StyledNavigation
      ref={navigationRef}
      style={style}
      className={className}
      width={width}
      data-testid={testId}
      isDragging={isDragging}
    >
      { children }
      <StyledHandle
        disable={disableResize}
        onMouseDown={handleMouseDown}
      />
    </StyledNavigation>
  )
}

export default Navigation
