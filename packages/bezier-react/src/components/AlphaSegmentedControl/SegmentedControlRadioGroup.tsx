import React, { forwardRef } from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import { type SegmentedControlProps } from './SegmentedControl.types'

import * as Styled from './SegmentedControl.styled'

type SegmentedControlRadioGroupProps<Value extends string> = Omit<SegmentedControlProps<'radiogroup', Value>, 'type'>

function SegmentedControlRadioGroupImpl<Value extends string>({
  children,
  size,
  ...rest
}: SegmentedControlRadioGroupProps<Value>, forwardedRef: React.Ref<HTMLDivElement>) {
  return (
    <RadioGroupPrimitive.Root
      asChild
      ref={forwardedRef}
      {...rest}
    >
      <Styled.Container
        direction="horizontal"
        spacing={1}
      >
        { children }
      </Styled.Container>
    </RadioGroupPrimitive.Root>
  )
}

export const SegmentedControlRadioGroup = forwardRef(SegmentedControlRadioGroupImpl) as <Value extends string>(
  props: SegmentedControlRadioGroupProps<Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof SegmentedControlRadioGroupImpl<Value>>
