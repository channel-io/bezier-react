/* External dependencies */
import React, { useCallback } from 'react'

/* Internal dependencies */
import Typography from '../../styling/Typography'
import { Text } from '../Text'
import type ButtonProps from './Button.types'
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

function Button({
  // TODO: (@leo) Foundation 정의 후 Button 컴포넌트 작성
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onClick,
}: ButtonProps) {
  return (
    <StyledBaseButton
      data-testid="button"
      onClick={onClick}
    >
      button
    </StyledBaseButton>
  )
}

export default Button
