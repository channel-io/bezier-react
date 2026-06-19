'use client'

import { forwardRef } from 'react'
import * as React from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import classNames from 'classnames'

import useMergeRefs from '~/src/hooks/useMergeRefs'
import { getFormFieldSizeClassName } from '~/src/types/props-helpers'
import { ariaAttr } from '~/src/utils/aria'
import { noop } from '~/src/utils/function'
import { BaseButton } from '~/src/v3/BaseButton'
import { BaseStack } from '~/src/v3/BaseStack/BaseStack'
import { useFormFieldContext } from '~/src/v3/FormField'
import { Text } from '~/src/v3/Text'

import {
  type RadioGroupProps,
  type RadioProps,
} from './RadioGroup.types'

import styles from './RadioGroup.module.scss'

function RadioGroupImpl<Value extends string>(
  {
    children,
    className,
    spacing,
    direction = 'vertical',
    disabled: disabledProp,
    required: requiredProp,
    hasError: hasErrorProp,
    ...rest
  }: RadioGroupProps<Value>,
  forwardedRef: React.Ref<HTMLDivElement>
) {
  const contextValue = useFormFieldContext()
  const disabled = disabledProp ?? contextValue?.disabled ?? false
  const required = requiredProp ?? contextValue?.required ?? false
  const hasError = hasErrorProp ?? contextValue?.hasError ?? false
  const defaultSpacing = direction === 'horizontal' ? 20 : 0
  const resolvedSpacing = spacing ?? defaultSpacing

  const { ref, ...groupProps } = contextValue?.getGroupProps(rest) ?? {
    ref: noop,
    ...rest,
  }
  const mergedRef = useMergeRefs(ref, forwardedRef)

  return (
    <RadioGroupPrimitive.Root
      asChild
      disabled={disabled}
      required={required}
      orientation={direction}
      aria-disabled={ariaAttr(disabled)}
      aria-invalid={ariaAttr(hasError)}
      aria-required={ariaAttr(required)}
      {...groupProps}
    >
      <BaseStack
        ref={mergedRef}
        className={classNames(styles.RadioGroup, className)}
        justify="start"
        align="stretch"
        spacing={resolvedSpacing}
        direction={direction}
      >
        {children}
      </BaseStack>
    </RadioGroupPrimitive.Root>
  )
}

/**
 * `RadioGroup` is a set of checkable buttons, known as radio buttons.
 *
 * `RadioGroup` is a context of the `Radio` components. It renders an element
 * with the `radiogroup` role and controls all radio items in the group.
 */
export const RadioGroup = forwardRef(RadioGroupImpl) as <Value extends string>(
  props: RadioGroupProps<Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof RadioGroupImpl<Value>>

function RadioImpl<Value extends string>(
  { children, className, ...rest }: RadioProps<Value>,
  forwardedRef: React.Ref<HTMLButtonElement>
) {
  return (
    <RadioGroupPrimitive.Item
      asChild
      className={classNames(
        styles.Radio,
        getFormFieldSizeClassName('m'),
        className
      )}
      ref={forwardedRef}
      {...rest}
    >
      <BaseButton>
        {children && (
          <Text
            className={styles.Label}
            typo="14"
            fontWeight="500"
            color="text-neutral"
          >
            {children}
          </Text>
        )}
      </BaseButton>
    </RadioGroupPrimitive.Item>
  )
}

/**
 * `Radio` is a checkable button, known as a radio button.
 * It should be used as a child of `RadioGroup`.
 */
export const Radio = forwardRef(RadioImpl) as <Value extends string>(
  props: RadioProps<Value> & { ref?: React.ForwardedRef<HTMLButtonElement> }
) => ReturnType<typeof RadioImpl<Value>>
