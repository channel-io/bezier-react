/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import {
  type SegmentedControlType,
  type SegmentedControlProps,
} from './SegmentedControl.types'

type SegmentedControlRadioGroupProps<Value extends string> = Omit<SegmentedControlProps<'radiogroup', Value>, 'type'>

function SegmentedControlRadioGroupImpl<Value extends string>({
  children,
  ...rest
}: SegmentedControlRadioGroupProps<Value>, forwardedRef: React.Ref<HTMLDivElement>) {
  return (
    <div
      ref={forwardedRef}
      {...rest}
    >
      { children }
    </div>
  )
}

const SegmentedControlRadioGroup = forwardRef(SegmentedControlRadioGroupImpl) as <Value extends string>(
  props: SegmentedControlRadioGroupProps<Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof SegmentedControlRadioGroupImpl<Value>>

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

const SegmentedControlTabs = forwardRef(SegmentedControlTabsImpl) as <Value extends string>(
  props: SegmentedControlTabsProps<Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof SegmentedControlTabsImpl<Value>>

function SegmentedControlImpl<
  Type extends SegmentedControlType,
  Value extends string,
>({
  type = 'radiogroup' as Type,
  name: nameProp,
  children,
  ...rest
}: SegmentedControlProps<Type, Value>, forwardedRef: React.Ref<HTMLDivElement>) {
  const isRadioGroupType = type === 'radiogroup'

  const SegmentedControl = isRadioGroupType
    ? SegmentedControlRadioGroup
    : SegmentedControlTabs

  const name = isRadioGroupType
    ? nameProp
    : undefined

  return (
    <SegmentedControl
      ref={forwardedRef}
      // @ts-ignore
      name={name}
      {...rest}
    >
      { children }
    </SegmentedControl>
  )
}

export const SegmentedControl = forwardRef(SegmentedControlImpl) as <
  Type extends SegmentedControlType,
  Value extends string,
>(
  props: SegmentedControlProps<Type, Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof SegmentedControlImpl<Type, Value>>

export default SegmentedControl
