/* External dependencies */
import React, {
  forwardRef,
  useCallback,
  type ReactElement,
  type MouseEvent,
  type Ref,
} from 'react'

/* Internal dependencies */
import useFormFieldProps from 'Components/Forms/useFormFieldProps'
import type SwitchProps from './Switch.types'
import { SwitchSize } from './Switch.types'
import * as Styled from './Switch.styled'

export const SWITCH_TEST_ID = 'bezier-react-switch'
export const SWITCH_HANDLE_TEST_ID = 'bezier-react-switch-handle'

function Switch(
  {
    testId = SWITCH_TEST_ID,
    handleTestId = SWITCH_HANDLE_TEST_ID,
    checked = false,
    size = SwitchSize.M,
    onClick,
    ...rest
  }: SwitchProps,
  forwardedRef: Ref<HTMLDivElement>,
): ReactElement {
  const {
    disabled,
    ...ownProps
  } = useFormFieldProps(rest)

  const handleClick = useCallback((event: MouseEvent) => {
    if (!disabled && onClick) {
      onClick(!checked, event)
    }
  }, [
    onClick,
    checked,
    disabled,
  ])

  return (
    <Styled.Wrapper
      {...ownProps}
      ref={forwardedRef}
      size={size}
      checked={checked}
      disabled={disabled}
      onClick={handleClick}
      data-testid={testId}
    >
      <Styled.Content
        size={size}
        checked={checked}
        data-testid={handleTestId}
      />
    </Styled.Wrapper>
  )
}

export default forwardRef(Switch)
