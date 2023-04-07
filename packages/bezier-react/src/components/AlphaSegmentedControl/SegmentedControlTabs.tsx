import React, { forwardRef } from 'react'

import * as TabsPrimitive from '@radix-ui/react-tabs'

import { type SegmentedControlProps } from './SegmentedControl.types'

type SegmentedControlTabsProps<Value extends string> = Omit<SegmentedControlProps<'tabs', Value>, 'type'>

function SegmentedControlTabsImpl<Value extends string>({
  children,
  onValueChange,
  ...rest
}: SegmentedControlTabsProps<Value>, forwardedRef: React.Ref<HTMLDivElement>) {
  return (
    <TabsPrimitive.Root
      ref={forwardedRef}
      onValueChange={onValueChange as TabsPrimitive.TabsProps['onValueChange']}
      {...rest}
    >
      { /* TODO: Isolate TabList */ }
      <TabsPrimitive.List>
        { children }
      </TabsPrimitive.List>
    </TabsPrimitive.Root>
  )
}

export const SegmentedControlTabs = forwardRef(SegmentedControlTabsImpl) as <Value extends string>(
  props: SegmentedControlTabsProps<Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof SegmentedControlTabsImpl<Value>>
