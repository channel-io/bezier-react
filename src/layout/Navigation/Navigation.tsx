/* External dependencies */
import React, { useState, useRef, useEffect, useCallback } from 'react'
import _ from 'lodash'

/* Internal dependencies */
import { StyledNavigation, StyledContentWrapper, StyledHandle } from './Navigation.styled'
import NavigationProps from './Navigation.types'

/* eslint-disable @typescript-eslint/no-unused-vars */
function Navigation({
  testId,
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
  }, [])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  useEffect(() => {
    onChangeWidth(width)
  }, [width, onChangeWidth])

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove, false)
    } else {
      document.removeEventListener('mousemove', handleMouseMove, false)
    }
  }, [isDragging, handleMouseMove])

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
      <StyledContentWrapper>
        { children }
        <StyledHandle
          disable={disableResize}
          onMouseDown={handleMouseDown}
        />
      </StyledContentWrapper>
    </StyledNavigation>
  )
}

export default Navigation
