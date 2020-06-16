/* External dependencies */
import React from 'react'

/* Internal depdencies */
import { TextViewProps } from './Text.types'

function TextView({
  props,
  ElementType = 'span',
}: TextViewProps) {
  const { content, styles } = props

  return (
    <ElementType
      style={styles}
      data-testid="text"
    >
      { content }
    </ElementType>
  )
}

export default TextView
