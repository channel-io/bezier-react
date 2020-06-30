/* External dependencies */
import React, { memo } from 'react'

/* Internal dependencies */
import IconProps, { IconSize } from './Icon.types'
import icons from './generated'
import Styled from './Icon.styled'

function Icon({
  className,
  style,
  icon,
  color,
  size = IconSize.Normal,
  marginTop = 0,
  marginRight = 0,
  marginBottom = 0,
  marginLeft = 0,
}: IconProps) {
  return (
    <Styled
      className={className}
      color={color}
      as={icons[icon]}
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
