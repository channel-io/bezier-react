/* External dependencies */
import React, {
  forwardRef,
  type ReactElement,
  type Ref,
} from 'react'

import * as SwitchPrimitive from '@radix-ui/react-switch'

/* Internal dependencies */
import useFormFieldProps from '~/src/components/Forms/useFormFieldProps'

import type SwitchProps from './Switch.types'
import { SwitchSize } from './Switch.types'

import * as Styled from './Switch.styled'

export const SWITCH_TEST_ID = 'bezier-react-switch'
export const SWITCH_HANDLE_TEST_ID = 'bezier-react-switch-handle'

export const Switch = forwardRef(function Switch(
  {
    testId = SWITCH_TEST_ID,
    handleTestId = SWITCH_HANDLE_TEST_ID,
    checked,
    defaultChecked = false,
    onCheckedChange,
    size = SwitchSize.M,
    ...rest
  }: SwitchProps,
  forwardedRef: Ref<HTMLButtonElement>,
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
      defaultChecked={defaultChecked}
      onCheckedChange={onCheckedChange}
      required={required}
      disabled={disabled}
      {...ownProps}
    >
      <Styled.SwitchRoot
        ref={forwardedRef}
        size={size}
        data-testid={testId}
      >
        <SwitchPrimitive.Thumb asChild>
          <Styled.SwitchThumb
            size={size}
            data-testid={handleTestId}
          />
        </SwitchPrimitive.Thumb>
      </Styled.SwitchRoot>
    </SwitchPrimitive.Root>
  )
})
