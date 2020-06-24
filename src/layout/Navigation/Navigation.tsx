/* External dependencies */
import React from 'react'

/* Internal dependencies */
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
  children,
}: NavigationProps) {
  return (
    <StyledNavigation
      as={as}
      data-testid={testId}
      style={style}
      className={className}
    >
      { children }
    </StyledNavigation>
  )
}

export default Navigation
