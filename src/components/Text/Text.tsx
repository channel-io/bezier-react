/* External dependencies */
import React from 'react'

/* Internal dependencies */
import Typography from '../../styling/Typography'
import TextProps from './Text.types'
import TextView from './Text.styled'

function Text({
  as,
  testId = 'text',
  content,
  typo = Typography.Size15,
  style,
  className,
}: TextProps) {
  return (
    <TextView
      as={as}
      style={style}
      className={className}
      typo={typo}
      data-testid={testId}
    >
      { content }
    </TextView>
  )
}

Text.displayName = 'Text'

export default Text
