/* External dependencies */
import React, { useRef } from 'react'

/* Internal dependencies */
import useDragResizer from '../../hooks/useDragResizer'
import { StyledNavigation } from './Navigation.styled'
import NavigationProps from './Navigation.types'

/* eslint-disable @typescript-eslint/no-unused-vars */
function Navigation({
  as,
  testId,
  style,
  className,
  minWidth = 240,
  maxWidth = 540,
  disableResize = false,
  children,
}: NavigationProps) {
  const navigationRef = useRef<HTMLElement>(null)

  const Wrapper = useDragResizer(minWidth, maxWidth)

  return (
    <Wrapper>
      <StyledNavigation
        ref={navigationRef}
        as={as}
        data-testid={testId}
        style={style}
        className={className}
      >
        { children }
      </StyledNavigation>
    </Wrapper>
  )
}

export default Navigation
