/* External dependencies */
import React from 'react'

/* Internal dependencies */
import TextProps from './Text.types'
import TextView from './Text.styled'

function Text({
  as,
  testId = 'text',
  content,
  styles,
  className,
}: TextProps) {
  return (
    <TextView
      as={as}
      style={styles}
      className={className}
      data-testid={testId}
    >
      { content }
    </TextView>
  )
}

Text.displayName = 'Text'

export default Text
