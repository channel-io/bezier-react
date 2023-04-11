import type React from 'react'

import type * as TabsPrimitive from '@radix-ui/react-tabs'

import {
  type BezierComponentProps,
  type ChildrenProps,
  type DisableProps,
  type SideContentProps,
} from '~/src/types/ComponentProps'

import { type FormComponentProps } from '~/src/components/Forms'

export enum SegmentedControlSize {
  XS = 'xs',
  S = 's',
  M = 'm',
  L = 'l',
}

export type SegmentedControlType = 'radiogroup' | 'tabs'

type SegmentedControlRadioGroupSpecificOptions = FormComponentProps & { name?: string }

type SegmentedControlNonValueOptions<Type extends SegmentedControlType> = {
  type?: Type
  size?: SegmentedControlSize
  width?: React.CSSProperties['width']
}

type SegmentedControlValueOptions<Value extends string> = {
  value?: Value
  defaultValue?: Value
  onValueChange?: (value: Value) => void
}

type SegmentedControlOptions<Type extends SegmentedControlType, Value extends string> =
  (Type extends 'radiogroup'
    ? SegmentedControlRadioGroupSpecificOptions
    : {})
  & SegmentedControlNonValueOptions<Type>
  & SegmentedControlValueOptions<Value>

interface SegmentedControlItemOptions<Value extends string> {
  value: Value
}

interface SegmentedControlTabContentOptions<Value extends string> {
  value: Value
}

type RadixTabsPredefinedPropKeys = 'dir'

export type SegmentedControlProps<Type extends SegmentedControlType, Value extends string> =
  & BezierComponentProps
  & ChildrenProps
  & Omit<React.HTMLAttributes<HTMLDivElement>, RadixTabsPredefinedPropKeys>
  & SegmentedControlOptions<Type, Value>

export type SegmentedControlItemListProps<Type extends SegmentedControlType, Value extends string> =
  Omit<SegmentedControlProps<Type, Value>, keyof SegmentedControlNonValueOptions<Type>>

export interface SegmentedControlItemProps<Value extends string> extends
  BezierComponentProps,
  ChildrenProps,
  DisableProps,
  React.HTMLAttributes<HTMLButtonElement>,
  SideContentProps,
  SegmentedControlItemOptions<Value> {}

type RadixTabListPredefinedPropKeys = 'defaultValue'

export interface SegmentedControlTabListProps extends
  BezierComponentProps,
  Omit<React.HTMLAttributes<HTMLDivElement>, RadixTabListPredefinedPropKeys>,
  ChildrenProps {}

export interface SegmentedControlTabContentProps<Value extends string> extends
  BezierComponentProps,
  ChildrenProps,
  React.HTMLAttributes<HTMLDivElement>,
  Pick<TabsPrimitive.TabsContentProps, 'forceMount'>,
  SegmentedControlTabContentOptions<Value> {}
