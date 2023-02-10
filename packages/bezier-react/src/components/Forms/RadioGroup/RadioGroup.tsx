/* External dependencies */
import React, { forwardRef } from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

/* Internal dependencies */
import { Stack, StackItem } from 'Components/Stack'
import useFormFieldProps from 'Components/Forms/useFormFieldProps'
import { RadioGroupProps } from './RadioGroup.types'

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
export const RadioGroup = forwardRef(function RadioGroup({
  children,
  spacing = 0,
  direction = 'vertical',
  ...rest
}: RadioGroupProps, forwardedRef: React.Ref<HTMLDivElement>) {
  const formFieldProps = useFormFieldProps(rest)

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
        { React.Children.map(children, (child, index) => (
          <StackItem key={child?.key ?? index}>
            { child }
          </StackItem>
        )) }
      </Stack>
    </RadioGroupPrimitive.Root>
  )
})
