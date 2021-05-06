/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { Typography } from '../../foundation'
import TextProps from './Text.types'
import TextView from './Text.styled'

export const TEXT_TEST_ID = 'ch-design-system-text'

function Text({
  as,
  testId = TEXT_TEST_ID,
  inheritColor = false,
  bold = false,
  italic = false,
  typo = Typography.Size15,
  marginTop = 0,
  marginRight = 0,
  marginBottom = 0,
  marginLeft = 0,
  style,
  className,
  children,
}: TextProps) {
  return (
    <TextView
      as={as}
      style={style}
      className={className}
      inheritColor={inheritColor}
      bold={bold}
      italic={italic}
      typo={typo}
      data-testid={testId}
      margintop={marginTop}
      marginright={marginRight}
      marginbottom={marginBottom}
      marginleft={marginLeft}
    >
      { children }
    </TextView>
  )
}

export default Text
