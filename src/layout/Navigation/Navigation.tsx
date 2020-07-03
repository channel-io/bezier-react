/* External dependencies */
import React, { useState, useRef, useEffect, useCallback } from 'react'
import _ from 'lodash'

/* Internal dependencies */
import { Text } from '../../components/Text'
import Typography from '../../styling/Typography'
import {
  StyledNavigation,
  StyledTitleWrapper,
  StyledContentWrapper,
  StyledHandle,
} from './Navigation.styled'
import NavigationProps from './Navigation.types'

export const NAV_SCROLL_TEST_ID = 'ch-design-system-nav-scroll'

function Navigation({
  testId,
  style,
  className,
  title,
  fixedTitle = false,
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
      <StyledContentWrapper
        data-testid={NAV_SCROLL_TEST_ID}
      >
        { title && (
          <StyledTitleWrapper sticky={fixedTitle}>
            <Text
              bold
              typo={Typography.Size24}
              content={title}
            />
          </StyledTitleWrapper>
        ) }
        { children }
      </StyledContentWrapper>
      <StyledHandle
        disable={disableResize}
        onMouseDown={handleMouseDown}
      />
    </StyledNavigation>
  )
}

export default Navigation
