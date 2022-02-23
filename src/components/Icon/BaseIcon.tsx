/* External dependencies */
import React, { memo } from 'react'
import { noop } from 'lodash-es'

/* Internal dependencies */
import { IconSize } from './Icon.types'
import type { BaseIconProps } from './Icon.types'
import Styled from './Icon.styled'

export const ICON_TEST_ID = 'bezier-react-icon'

function BaseIcon({
  as,
  className,
  color,
  testId = ICON_TEST_ID,
  size = IconSize.Normal,
  marginTop = 0,
  marginRight = 0,
  marginBottom = 0,
  marginLeft = 0,
  onClick = noop,
  onMouseDown = noop,
}: BaseIconProps) {
  return (
    <Styled
      as={as}
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
}

export default memo(BaseIcon)
