import React, { forwardRef } from 'react'

import { type SegmentedControlProps } from './SegmentedControl.types'

type SegmentedControlTabsProps<Value extends string> = Omit<SegmentedControlProps<'tabs', Value>, 'type'>

function SegmentedControlTabsImpl<Value extends string>({
  children,
  ...rest
}: SegmentedControlTabsProps<Value>, forwardedRef: React.Ref<HTMLDivElement>) {
  return (
    <div
      ref={forwardedRef}
      {...rest}
    >
      { children }
    </div>
  )
}

export const SegmentedControlTabs = forwardRef(SegmentedControlTabsImpl) as <Value extends string>(
  props: SegmentedControlTabsProps<Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof SegmentedControlTabsImpl<Value>>
