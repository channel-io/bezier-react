/* External dependencies */
import React from 'react'

/* Internal depdencies */
import { TextRendererProps } from './Text.types'
import TextView from './Text.styled'

function TextRenderer({
  content,
  styles,
  className,
  config,
}: TextRendererProps) {
  const { ElementType } = config

  return (
    <TextView
      as={ElementType}
      style={styles}
      className={className}
      data-testid="text"
    >
      { content }
    </TextView>
  )
}

export default TextRenderer
