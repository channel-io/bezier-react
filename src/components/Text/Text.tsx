/* External dependencies */
import React from 'react'

/* Internal depdencies */
import TextProps from './Text.types'
import TextView from './Text.styled'

function Text({
  as,
  content,
  styles,
  className,
}: TextProps) {
  return (
    <TextView
      as={as}
      style={styles}
      className={className}
      data-testid="text"
    >
      { content }
    </TextView>
  )
}

Text.displayName = 'Text'

export default Text
