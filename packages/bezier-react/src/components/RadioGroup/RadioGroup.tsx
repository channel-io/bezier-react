import React, { forwardRef } from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import classNames from 'classnames'

import useId from '~/src/hooks/useId'
import { getFormFieldSizeClassName } from '~/src/utils/props'

import { BaseButton } from '~/src/components/BaseButton'
import { useFormFieldProps } from '~/src/components/FormControl'
import { Stack } from '~/src/components/Stack'
import { Text } from '~/src/components/Text'

import {
  type RadioGroupProps,
  type RadioProps,
} from './RadioGroup.types'

import styles from './RadioGroup.module.scss'

function RadioGroupImpl<Value extends string>({
  children,
  spacing = 0,
  direction = 'vertical',
  ...rest
}: RadioGroupProps<Value>, forwardedRef: React.Ref<HTMLDivElement>) {
  const { hasError, ...formFieldProps } = useFormFieldProps(rest)

  return (
    <RadioGroupPrimitive.Root
      asChild
      {...formFieldProps}
    >
      <Stack
        ref={forwardedRef}
        justify="start"
        align="stretch"
        spacing={spacing}
        direction={direction}
      >
        { children }
      </Stack>
    </RadioGroupPrimitive.Root>
  )
}

/**
 * `RadioGroup` is a set of checkable buttons, known as radio buttons.
 *
 * `RadioGroup` is a context of the `Radio` components. also, it renders an element which has the 'radiogroup' role.
 * It controls all the parts of a radio group.
 * @example
 *
 * ```tsx
 * // Anatomy of the RadioGroup
 * <RadioGroup>
 *  <Radio />
 * </RadioGroup>
 * ```
 */
export const RadioGroup = forwardRef(RadioGroupImpl) as <Value extends string>(
  props: RadioGroupProps<Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof RadioGroupImpl<Value>>

function RadioImpl<Value extends string>({
  children,
  className,
  id: idProp,
  ...rest
}: RadioProps<Value>, forwardedRef: React.Ref<HTMLButtonElement>) {
  const id = useId(idProp, 'bezier-radio')

  return (
    <RadioGroupPrimitive.Item
      asChild
      className={classNames(
        styles.RadioGroupItem,
        getFormFieldSizeClassName('m'),
        className,
      )}
      ref={forwardedRef}
      id={id}
      {...rest}
    >
      <BaseButton>
        { children && (
          <Text
            className={styles.Label}
            as="label"
            /* FIXME(@ed): Delete after applying polymorphic props */
            /* @ts-ignore */
            htmlFor={id}
            typo="14"
            color="txt-black-darkest"
          >
            { children }
          </Text>
        ) }
      </BaseButton>
    </RadioGroupPrimitive.Item>
  )
}

/**
 * `Radio` is a checkable button, known as a radio button.
 * It should be a child of `RadioGroup`.
 */
export const Radio = forwardRef(RadioImpl) as <Value extends string>(
  props: RadioProps<Value> & { ref?: React.ForwardedRef<HTMLButtonElement> }
) => ReturnType<typeof RadioImpl<Value>>
