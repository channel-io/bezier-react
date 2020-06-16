/* External dependencies */
import React from 'react'

/* Internal depdencies */
import { TextProps } from './Text.types'

function TextView(
  {
    content,
  }: TextProps,
  ElementType: React.ElementType<TextProps>,
): React.ReactNode {
  return (
    <ElementType
      data-testid="text"
    >
      { content }
    </ElementType>
  )
}

export default TextView
