import React, { forwardRef } from 'react'

import * as SwitchPrimitive from '@radix-ui/react-switch'
import classNames from 'classnames'

import { useFormFieldProps } from '~/src/components/FormControl'
import { UnstyledButton } from '~/src/components/UnstyledButton'

import {
  type SwitchProps,
  SwitchSize,
} from './Switch.types'

import styles from './Switch.module.scss'

export const SWITCH_TEST_ID = 'bezier-react-switch'
const SWITCH_HANDLE_TEST_ID = 'bezier-react-switch-handle'

/**
 * `Switch` is an input component where user can toggle checked state of the element.
 * @example
 * ```tsx
 * <Switch
 *   size={SwitchSize.M}
 *   checked
 * />
 * ```
 */
export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(function Switch({
  testId = SWITCH_TEST_ID,
  handleTestId = SWITCH_HANDLE_TEST_ID,
  checked,
  defaultChecked = false,
  onCheckedChange,
  size = SwitchSize.M,
  className,
  ...rest
}, forwardedRef) {
  const {
    disabled,
    required,
    hasError,
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
      <UnstyledButton
        ref={forwardedRef}
        data-testid={testId}
        className={classNames(
          styles.Switch,
          styles[`size-${size}`],
          className,
        )}
      >
        <SwitchPrimitive.Thumb asChild>
          <span
            data-testid={handleTestId}
            className={styles.SwitchThumb}
          />
        </SwitchPrimitive.Thumb>
      </UnstyledButton>
    </SwitchPrimitive.Root>
  )
})
