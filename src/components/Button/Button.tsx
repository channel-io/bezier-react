/* External dependencies */
import React, { useCallback, forwardRef } from 'react'
import _ from 'lodash'

/* Internal dependencies */
import Typography from '../../styling/Typography'
import { Text } from '../Text'
import { ButtonProps } from './Button.types'
import { StyledBaseButton } from './Button.styled'

export const BUTTON_TEST_ID = 'ch-design-system-button'

function Button(
  {
    as,
    testId = BUTTON_TEST_ID,
    className,
    style,
    text,
    typo = Typography.Size14,
    onClick = _.noop,
  }: ButtonProps,
  forwardedRef: React.Ref<HTMLElement>,
) {
  const handleClick = useCallback((e: MouseEvent) => {
    onClick(e)
  }, [onClick])

  return (
    <StyledBaseButton
      ref={forwardedRef}
      as={as}
      className={className}
      style={style}
      data-testid={testId}
      onClick={handleClick}
    >
      <Text
        inheritColor
        typo={typo}
      >
        { text }
      </Text>
    </StyledBaseButton>
  )
}

export default forwardRef(Button)
