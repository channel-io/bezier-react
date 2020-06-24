/* External dependencies */
import React, { useRef } from 'react'
import _ from 'lodash'

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
  onChangeWidth = _.noop,
  children,
}: NavigationProps) {
  const navigationRef = useRef<HTMLElement>(null)

  const Resizer = useDragResizer(minWidth, maxWidth, onChangeWidth)

  return (
    <Resizer disable={disableResize}>
      <StyledNavigation
        ref={navigationRef}
        as={as}
        data-testid={testId}
        style={style}
        className={className}
      >
        { children }
      </StyledNavigation>
    </Resizer>
  )
}

export default Navigation
