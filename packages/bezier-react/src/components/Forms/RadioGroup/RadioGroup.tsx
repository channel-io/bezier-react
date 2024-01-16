import React, { forwardRef } from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import useId from '~/src/hooks/useId'

import useFormFieldProps from '~/src/components/Forms/useFormFieldProps'
import { Stack } from '~/src/components/Stack'

import {
  type RadioGroupProps,
  type RadioProps,
} from './RadioGroup.types'

import * as Styled from './RadioGroup.styled'

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
 *
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
  id: idProp,
  ...rest
}: RadioProps<Value>, forwardedRef: React.Ref<HTMLButtonElement>) {
  const id = useId(idProp, 'bezier-radio')

  return (
    <Styled.RadioGroupPrimitiveItem
      ref={forwardedRef}
      id={id}
      {...rest}
    >
      { children && (
        /* FIXME(@ed): Delete after applying polymorphic props */
        /* @ts-ignore */
        <Styled.Label htmlFor={id}>
          { children }
        </Styled.Label>
      ) }
    </Styled.RadioGroupPrimitiveItem>
  )
}

/**
 * `Radio` is a checkable button, known as a radio button.
 * It should be a child of `RadioGroup`.
 */
export const Radio = forwardRef(RadioImpl) as <Value extends string>(
  props: RadioProps<Value> & { ref?: React.ForwardedRef<HTMLButtonElement> }
) => ReturnType<typeof RadioImpl<Value>>
