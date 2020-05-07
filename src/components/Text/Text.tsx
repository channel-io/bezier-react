/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { TextProps } from './Text.types'
import './Text.scss'

function Text({
  title,
}: TextProps) {
  return (
    <div
      data-testid="text"
      className="text"
    >
      {title}
    </div>
  )
}

export default Text
