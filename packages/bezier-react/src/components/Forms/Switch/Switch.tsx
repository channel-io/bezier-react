import React, { forwardRef } from 'react'

import * as SwitchPrimitive from '@radix-ui/react-switch'
import classNames from 'classnames'

import {
  getMarginStyles,
  splitByMarginProps,
} from '~/src/utils/props'

import useFormFieldProps from '~/src/components/Forms/useFormFieldProps'

import {
  type SwitchProps,
  SwitchSize,
} from './Switch.types'

import styles from './Switch.module.scss'

export const SWITCH_TEST_ID = 'bezier-react-switch'
const SWITCH_HANDLE_TEST_ID = 'bezier-react-switch-handle'

/**
 * `Switch` is an input component where user can toggle checked state of the element.
 *
 * @example
 * ```tsx
 * <Switch
 *   size={SwitchSize.M}
 *   checked
 * />
 * ```
 */
export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(function Switch(props, forwardedRef) {
  const [marginProps, marginRest] = splitByMarginProps(props)
  const marginStyles = getMarginStyles(marginProps)
  const {
    testId = SWITCH_TEST_ID,
    handleTestId = SWITCH_HANDLE_TEST_ID,
    checked,
    defaultChecked = false,
    onCheckedChange,
    size = SwitchSize.M,
    style,
    className,
    ...rest
  } = marginRest

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
      <button
        ref={forwardedRef}
        data-testid={testId}
        style={{
          ...style,
          ...marginStyles.style,
        }}
        className={classNames(
          styles.Switch,
          styles[`size-${size}`],
          marginStyles.className,
          className,
        )}
        type="button"
      >
        <SwitchPrimitive.Thumb asChild>
          <span
            data-testid={handleTestId}
            className={classNames(
              styles.SwitchThumb,
              styles[`size-${size}`],
            )}
          />
        </SwitchPrimitive.Thumb>
      </button>
    </SwitchPrimitive.Root>
  )
})
