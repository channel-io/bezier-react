import React, { forwardRef } from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { type SegmentedControlItemProps } from './SegmentedControl.types'
import { useSegmentedControlContext } from './SegmentedControlContext'

function SegmentedControlItemImpl<Value extends string>({
  value,
  children,
  ...rest
}: SegmentedControlItemProps<Value>, forwardedRef: React.Ref<HTMLButtonElement>) {
  const contextValue = useSegmentedControlContext()

  if (!contextValue) {
    throw new Error('SegmentedControlItem must be used within SegmentedControl')
  }

  // TODO: Implement size
  const { type, size } = contextValue

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
