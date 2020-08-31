/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import { Text } from '../Text'
import type ButtonProps from './Button.types'
import { StyledBaseButton } from './Button.styled'

export const BUTTON_TEST_ID = 'ch-design-system-button'

function Button(
  {
    as,
    text,
  }: ButtonProps,
  forwardedRef: React.Ref<HTMLElement>,
) {
  return (
    <StyledBaseButton
      as={as}
      ref={forwardedRef}
      data-testid="button"
    >
      <Text>
        { text }
      </Text>
    </StyledBaseButton>
  )
}

export default forwardRef(Button)
