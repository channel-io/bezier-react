/* External dependencies */
import React from 'react'

/* Internal dependencies */
import Typography from '../../styling/Typography'
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
    >
      { children }
    </TextView>
  )
}

Text.displayName = 'Text'

export default Text
