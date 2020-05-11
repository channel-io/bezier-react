/* External dependencies */
import React from 'react'

/* Internal dependencies */
import {
  ButtonProps,
  ButtonTheme,
} from './Button.types'
import { ButtonComponent } from './Button.styled'

function Button({
  theme = ButtonTheme.Normal,
  onClick,
}: ButtonProps) {
  return (
    <ButtonComponent
      data-testid="button"
      onClick={onClick}
    >
      button
    </ButtonComponent>
  )
}

Button.ButtonTheme = ButtonTheme

export default Button
