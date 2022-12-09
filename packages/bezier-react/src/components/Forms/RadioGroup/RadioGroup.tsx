/* External dependencies */
import React, { forwardRef } from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

/* Internal dependencies */
import { FormGroup } from 'Components/Forms/FormGroup'
import { RadioGroupProps } from './RadioGroup.types'

export const RadioGroup = forwardRef(function RadioGroup({
  children,
  value,
  defaultValue,
  name,
  disabled,
  required,
  direction = 'vertical',
  spacing = 0,
  onValueChange,
  ...rest
}: RadioGroupProps, forwardedRef: React.Ref<HTMLDivElement>) {
  return (
    <RadioGroupPrimitive.Root
      asChild
      value={value}
      defaultValue={defaultValue}
      name={name}
      disabled={disabled}
      required={required}
      onValueChange={onValueChange}
    >
      <FormGroup
        ref={forwardedRef}
        direction={direction}
        spacing={spacing}
        {...rest}
      >
        { children }
      </FormGroup>
    </RadioGroupPrimitive.Root>
  )
})
