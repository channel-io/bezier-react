/* External dependencies */
import React from 'react'

/* Internal dependencies */
import {
  ButtonProps,
  ButtonTheme,
} from './Button.types'
import { ButtonComponent } from './Button.styled'

function Button({
  // TODO: (@leo) Foundation 정의 후 Button 컴포넌트 작성
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

export default Button
