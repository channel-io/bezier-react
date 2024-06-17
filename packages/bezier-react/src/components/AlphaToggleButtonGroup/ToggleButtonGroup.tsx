import React, { forwardRef } from 'react'

import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import classNames from 'classnames'

import { type ToggleButtonProps } from '~/src/components/AlphaToggleButton/ToggleButton.types'
import { ToggleButtonProvider } from '~/src/components/AlphaToggleButton/ToggleButtonContext'
import {
  type ToggleButtonMultipleGroupProps,
  type ToggleButtonSingleGroupProps,
} from '~/src/components/AlphaToggleButtonGroup/ToggleButtonGroup.types'

import styles from './ToggleButtonGroup.module.scss'

/**
 * `ToggleButtonGroup` is a group of two-state buttons that can be toggled on or off.
 *  @example
 *
 * ```tsx
 * <ToggleButtonGroup
 *   shape="rectangle"
 *   defaultValue="two"
 * >
 *   <ToggleButton
 *     value="one"
 *     text="left"
 *   />
 *   <ToggleButton
 *     value="two"
 *     text="center"
 *   />
 *   <ToggleButton
 *     value="three"
 *     text="right"
 *   />
 * </ToggleButtonGroup>
 * ```
 */
export const ToggleButtonGroup = forwardRef<
  HTMLDivElement,
  ToggleButtonMultipleGroupProps | ToggleButtonSingleGroupProps
>(function ToggleButtonGroup(props, forwardedRef) {
  const { children, className, fullWidth, ...rest } = props

  const ToggleButtons = React.Children.map(children, (toggleButton) => {
    if (!React.isValidElement<ToggleButtonProps>(toggleButton)) {
      return null
    }

    return (
      <ToggleButtonProvider value={{ shape: props.shape }}>
        <ToggleGroupPrimitive.Item
          asChild
          value={toggleButton.props.value}
          key={toggleButton.props.value}
          className={styles.item}
        >
          {toggleButton}
        </ToggleGroupPrimitive.Item>
      </ToggleButtonProvider>
    )
  })

  return (
    <ToggleGroupPrimitive.Root
      ref={forwardedRef}
      className={classNames(
        styles.ToggleButtonGroup,
        fullWidth && styles.fullWidth,
        className
      )}
      {...(rest as typeof props.type extends 'multiple'
        ? ToggleButtonMultipleGroupProps
        : ToggleButtonSingleGroupProps)}
    >
      {ToggleButtons}
    </ToggleGroupPrimitive.Root>
  )
})
