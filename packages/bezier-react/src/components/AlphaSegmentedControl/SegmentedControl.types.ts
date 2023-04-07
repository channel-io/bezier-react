import {
  type BezierComponentProps,
  type ChildrenProps,
  type DisableProps,
} from '~/src/types/ComponentProps'

import { type FormComponentProps } from '~/src/components/Forms'

export enum SegmentedControlSize {
  XS = 'xs',
  S = 's',
  M = 'm',
  L = 'l',
}

export type SegmentedControlType = 'radiogroup' | 'tabs'

export interface SegmentedControlRadioGroupOptions extends
  FormComponentProps {
  name?: string
}

export type SegmentedControlOptions<Type extends SegmentedControlType, Value extends string> =
  (Type extends 'radiogroup'
    ? SegmentedControlRadioGroupOptions
    : {})
  & {
    type?: Type
    size?: SegmentedControlSize
    width?: React.CSSProperties['width']
    value?: Value
    defaultValue?: Value
    onValueChange?: (value: Value) => void
  }

interface SegmentedControlItemOptions<Value extends string> extends
  DisableProps {
  value: Value
}

interface SegmentedControlTabContentOptions<Value extends string> {
  value: Value
}

export type SegmentedControlProps<Type extends SegmentedControlType, Value extends string> =
  & BezierComponentProps
  & ChildrenProps
  & SegmentedControlOptions<Type, Value>

export interface SegmentedControlItemProps<Value extends string> extends
  BezierComponentProps,
  ChildrenProps,
  SegmentedControlItemOptions<Value> {}

export interface SegmentedControlTabContentProps<Value extends string> extends
  BezierComponentProps,
  ChildrenProps,
  SegmentedControlTabContentOptions<Value> {}
