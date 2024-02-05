import type React from 'react'

import type * as TabsPrimitive from '@radix-ui/react-tabs'

import {
  type BezierComponentProps,
  type ChildrenProps,
  type DisableProps,
  type FormFieldProps,
  type SideContentProps,
  type SizeProps,
} from '~/src/types/props'

export enum SegmentedControlSize {
  XS = 'xs',
  S = 's',
  M = 'm',
  L = 'l',
}

export type SegmentedControlType = 'radiogroup' | 'tabs'

type SegmentedControlNonValueProps<Type extends SegmentedControlType> = {
  /**
   * The element type of segmented control.
   * It can be either `radiogroup` or `tabs`
   * @default 'radiogroup'
   */
  type?: Type
  /*
   * The width of the segmented control.
   * @default '100%'
   */
  width?: React.CSSProperties['width']
}

type SegmentedControlValueProps<Value extends string> = {
  /**
   * The controlled value of the item to check.
   * It should be used in conjunction with `onValueChange`.
   */
  value?: Value
  /**
   * The value of the segmented control that should be checked when initially rendered.
   * Use when you do not need to control the state of the items.
   */
  defaultValue?: Value
  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: Value) => void
}

type SegmentedControlRadioGroupSpecificProps =
  & FormFieldProps
  & {
  /**
   * The name of the group.
   * Submitted with its owning form as part of a name/value pair.
   */
    name?: string
  }

interface SegmentedControlItemOwnProps<Value extends string> {
  /**
   * The value of the item.
   *
   * If the type of `SegmentedControl` is `radiogroup`, It is the value given as data when submitted with a `SegmentedControlProps.name`.
   *
   * If the type of `SegmentedControl` is `tabs`, It is the value that associates the item with a content.
   */
  value: Value
}

interface SegmentedControlTabContentOwnProps<Value extends string> {
  /**
   * A unique value that associates the item with a content.
   */
  value: Value
}

type SegmentedControlOwnProps<Type extends SegmentedControlType, Value extends string> =
  (Type extends 'radiogroup'
    ? SegmentedControlRadioGroupSpecificProps
    : {})
  & SegmentedControlNonValueProps<Type>
  & SegmentedControlValueProps<Value>

type RadixTabsPredefinedPropKeys = 'dir'

export type SegmentedControlProps<Type extends SegmentedControlType, Value extends string> =
  & Omit<BezierComponentProps<'div'>, RadixTabsPredefinedPropKeys>
  & ChildrenProps
  & SizeProps<SegmentedControlSize>
  & SegmentedControlOwnProps<Type, Value>

export interface SegmentedControlRadioGroupProps<Value extends string> extends
  Omit<SegmentedControlProps<'radiogroup', Value>, keyof SegmentedControlNonValueProps<'radiogroup'>> {}

export interface SegmentedControlTabsProps<Value extends string> extends
  Omit<SegmentedControlProps<'tabs', Value>, keyof SegmentedControlNonValueProps<'tabs'>> {}

type RadixTabListPredefinedPropKeys = 'defaultValue'

export interface SegmentedControlTabListProps extends
  Omit<BezierComponentProps<'div'>, RadixTabListPredefinedPropKeys>,
  ChildrenProps {}

export type SegmentedControlItemListProps<Type extends SegmentedControlType, Value extends string> =
  Type extends 'radiogroup'
    ? SegmentedControlRadioGroupProps<Value>
    : SegmentedControlTabListProps

export interface SegmentedControlItemProps<Value extends string> extends
  Omit<BezierComponentProps<'button'>, keyof SegmentedControlItemOwnProps<Value>>,
  ChildrenProps,
  DisableProps,
  SideContentProps,
  SegmentedControlItemOwnProps<Value> {}

export interface SegmentedControlTabContentProps<Value extends string> extends
  BezierComponentProps<'div'>,
  ChildrenProps,
  Pick<TabsPrimitive.TabsContentProps, 'forceMount'>,
  SegmentedControlTabContentOwnProps<Value> {}
