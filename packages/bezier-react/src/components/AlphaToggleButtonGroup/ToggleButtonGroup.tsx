import React, { forwardRef, useMemo } from 'react'

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
 *   value="two"
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
  const { children, shape, className, fullWidth, onValueChange, ...rest } =
    props

  const handleValueChange = (value: string | string[]) => {
    if (props.type === 'single' && typeof value === 'string' && !value.length) {
      props?.onValueChange?.(value)
    } else if (
      props.type === 'multiple' &&
      typeof value === 'object' &&
      !value.length
    ) {
      props?.onValueChange?.(value)
    }
  }

  const ToggleButtons = React.Children.map(children, (toggleButton) => {
    if (!React.isValidElement<ToggleButtonProps>(toggleButton)) {
      return null
    }

    return (
      <ToggleGroupPrimitive.Item
        asChild
        value={toggleButton.props.value}
        key={toggleButton.props.value}
        className={styles.item}
      >
        {toggleButton}
      </ToggleGroupPrimitive.Item>
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
      onValueChange={handleValueChange}
      {...(rest as typeof props.type extends 'multiple'
        ? ToggleButtonMultipleGroupProps
        : ToggleButtonSingleGroupProps)}
    >
      <ToggleButtonProvider value={useMemo(() => ({ shape }), [shape])}>
        {ToggleButtons}
      </ToggleButtonProvider>
    </ToggleGroupPrimitive.Root>
  )
})
