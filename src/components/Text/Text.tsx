/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { TextProps } from './Text.types'
import { TextComponent } from './Text.styled'

function Text({
  title,
}: TextProps) {
  return (
    <TextComponent
      data-testid="text"
      className="text"
    >
      { title }
    </TextComponent>
  )
}

export default Text
