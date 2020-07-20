/* External dependencies */
import React, { memo } from 'react'

/* Internal dependencies */
import IconProps, { IconSize } from './Icon.types'
import icons from './generated'
import Styled from './Icon.styled'

export const ICON_TEST_ID = 'ch-design-system-icon'

function Icon({
  className,
  style,
  name,
  color,
  testId = ICON_TEST_ID,
  size = IconSize.Normal,
  marginTop = 0,
  marginRight = 0,
  marginBottom = 0,
  marginLeft = 0,
}: IconProps) {
  return (
    <Styled
      data-testid={testId}
      className={className}
      color={color}
      as={icons[name]}
      width={size}
      height={size}
      style={style}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
    />
  )
}

export default memo(Icon)
