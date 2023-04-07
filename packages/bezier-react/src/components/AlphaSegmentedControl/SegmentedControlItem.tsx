import React, { forwardRef } from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import { type SegmentedControlItemProps } from './SegmentedControl.types'

function SegmentedControlItemImpl<Value extends string>({
  value,
  children,
  ...rest
}: SegmentedControlItemProps<Value>, forwardedRef: React.Ref<HTMLButtonElement>) {
  return (
    <RadioGroupPrimitive.Item
      ref={forwardedRef}
      value={value}
      {...rest}
    >
      { children }
    </RadioGroupPrimitive.Item>
  )
}

export const SegmentedControlItem = forwardRef(SegmentedControlItemImpl) as <Value extends string>(
  props: SegmentedControlItemProps<Value> & { ref?: React.ForwardedRef<HTMLButtonElement> }
) => ReturnType<typeof SegmentedControlItemImpl<Value>>
