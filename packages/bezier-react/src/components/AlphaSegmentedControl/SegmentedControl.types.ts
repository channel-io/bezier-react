import {
  type BezierComponentProps,
  type ChildrenProps,
  type DisableProps,
} from '~/src/types/ComponentProps'

export enum SegmentedControlSize {
  XS = 'xs',
  S = 's',
  M = 'm',
  L = 'l',
}

export type SegmentedControlType = 'radiogroup' | 'tabs'

interface SegmentedControlOptions<Type extends SegmentedControlType, Value extends string> {
  type?: Type
  size?: SegmentedControlSize
  width?: React.CSSProperties['width']
  name?: Type extends 'radiogroup' ? string : never
  value?: Value
  defaultValue?: Value
  onValueChange?: (value: Value) => void
}

export interface SegmentedControlContextValue extends
  Pick<SegmentedControlOptions<SegmentedControlType, string>, 'type' | 'size'> {}

interface SegmentedControlItemOptions<Value extends string> {
  value: Value
  id?: string
}

interface SegmentedControlTabContentOptions<Value extends string> {
  value: Value
}

export interface SegmentedControlProps<Type extends SegmentedControlType, Value extends string> extends
  BezierComponentProps,
  ChildrenProps,
  DisableProps,
  SegmentedControlOptions<Type, Value> {}

export interface SegmentedControlItemProps<Value extends string> extends
  BezierComponentProps,
  ChildrenProps,
  SegmentedControlItemOptions<Value> {}

export interface SegmentedControlTabContentProps<Value extends string> extends
  BezierComponentProps,
  ChildrenProps,
  SegmentedControlTabContentOptions<Value> {}
