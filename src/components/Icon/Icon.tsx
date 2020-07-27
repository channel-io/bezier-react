/* External dependencies */
import React, { memo } from 'react'
import _ from 'lodash'

/* Internal dependencies */
import IconProps, { IconSize } from './Icon.types'
import icons from './generated'
import Styled from './Icon.styled'

export const ICON_TEST_ID = 'ch-design-system-icon'

function Icon({
  name,
  color,
  testId = ICON_TEST_ID,
  size = IconSize.Normal,
  marginTop = 0,
  marginRight = 0,
  marginBottom = 0,
  marginLeft = 0,
  ...props
}: IconProps) {
  if (_.isNil(icons[name])) { return null }

  return (
    <Styled
      {...props}
      data-testid={testId}
      color={color}
      as={icons[name]}
      width={size}
      height={size}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
    />
  )
}

export default memo(Icon)
