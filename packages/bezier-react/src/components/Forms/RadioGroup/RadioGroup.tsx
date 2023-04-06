/* External dependencies */
import React, { forwardRef } from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

/* Internal dependencies */
import { AlphaStack } from '~/src/components/AlphaStack'
import useFormFieldProps from '~/src/components/Forms/useFormFieldProps'

import { type RadioGroupProps } from './RadioGroup.types'

function RadioGroupImpl<Value extends string>({
  children,
  spacing = 0,
  direction = 'vertical',
  ...rest
}: RadioGroupProps<Value>, forwardedRef: React.Ref<HTMLDivElement>) {
  const formFieldProps = useFormFieldProps(rest)

  return (
    <RadioGroupPrimitive.Root
      asChild
      {...formFieldProps}
    >
      <AlphaStack
        ref={forwardedRef}
        justify="start"
        align="stretch"
        spacing={spacing}
        direction={direction}
      >
        { children }
      </AlphaStack>
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
