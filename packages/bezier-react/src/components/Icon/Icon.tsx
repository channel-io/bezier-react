/* External dependencies */
import React, {
  memo,
} from 'react'

/* Internal dependencies */
import type IconProps from './Icon.types'
import { IconSize } from './Icon.types'
import Styled from './Icon.styled'

export const ICON_TEST_ID = 'bezier-react-icon'

export const Icon = memo(function Icon({
  source,
  className,
  color,
  testId = ICON_TEST_ID,
  size = IconSize.Normal,
  marginTop = 0,
  marginRight = 0,
  marginBottom = 0,
  marginLeft = 0,
  onClick,
  onMouseDown,
}: IconProps) {
  return (
    <Styled
      as={source}
      className={className}
      data-testid={testId}
      color={color}
      width={size}
      height={size}
      margintop={marginTop}
      marginright={marginRight}
      marginbottom={marginBottom}
      marginleft={marginLeft}
      onClick={onClick}
      onMouseDown={onMouseDown}
    />
  )
})
