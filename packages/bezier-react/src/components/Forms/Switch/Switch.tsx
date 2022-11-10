/* External dependencies */
import React, {
  forwardRef,
  type ReactElement,
  type Ref,
} from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'

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
    onCheckedChange,
    size = SwitchSize.M,
    ...rest
  }: SwitchProps,
  forwardedRef: Ref<HTMLDivElement>,
): ReactElement {
  const {
    disabled,
    required,
    ...ownProps
  } = useFormFieldProps(rest)

  return (
    <SwitchPrimitive.Root
      asChild
      checked={checked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      required={required}
      {...rest}
    >
      <Styled.Wrapper
        {...ownProps}
        ref={forwardedRef}
        size={size}
        checked={checked}
        disabled={disabled}
        data-testid={testId}
      >
        <SwitchPrimitive.Thumb asChild>
          <Styled.Content
            size={size}
            checked={checked}
            data-testid={handleTestId}
          />
        </SwitchPrimitive.Thumb>
      </Styled.Wrapper>
    </SwitchPrimitive.Root>
  )
}

export default forwardRef(Switch)
