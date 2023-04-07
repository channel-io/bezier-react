import React, { forwardRef } from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { useSegmentedControlContext } from './SegmentedControl'
import { type SegmentedControlItemProps } from './SegmentedControl.types'

function SegmentedControlItemImpl<Value extends string>({
  value,
  children,
  ...rest
}: SegmentedControlItemProps<Value>, forwardedRef: React.Ref<HTMLButtonElement>) {
  // TODO: Implement size
  const { type, size } = useSegmentedControlContext('SegmentedControlItem')

  const SegmentedControlItem = type === 'radiogroup'
    ? RadioGroupPrimitive.Item
    : TabsPrimitive.Trigger

  return (
    <SegmentedControlItem
      ref={forwardedRef}
      value={value}
      {...rest}
    >
      { children }
    </SegmentedControlItem>
  )
}

export const SegmentedControlItem = forwardRef(SegmentedControlItemImpl) as <Value extends string>(
  props: SegmentedControlItemProps<Value> & { ref?: React.ForwardedRef<HTMLButtonElement> }
) => ReturnType<typeof SegmentedControlItemImpl<Value>>
