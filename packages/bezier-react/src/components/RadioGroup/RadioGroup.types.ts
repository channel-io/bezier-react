import type * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import {
  type AlphaBezierComponentProps,
  type ChildrenProps,
  type FormFieldProps,
} from '~/src/types/props'

import { type StackProps } from '~/src/components/Stack'

interface RadioGroupOwnProps<Value extends string> {
  /**
   * The controlled value of the radio item to check.
   * Should be used in conjunction with `onValueChange`.
   */
  value?: Value
  /**
   * The value of the radio item that should be checked when initially rendered.
   * Use when you do not need to control the state of the radio items.
   */
  defaultValue?: Value
  /**
   * The name of the group.
   * Submitted with its owning form as part of a name/value pair.
   */
  name?: string
  /**
   * Default spacing between Radio, in pixels.
   * @default 0
   */
  spacing?: StackProps['spacing']
  /**
   * Direction of this RadioGroup.
   * @default vertical
   */
  direction?: StackProps['direction']
  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: Value) => void
}

interface RadioOwnProps<Value extends string> {
  /**
   * The value given as data when submitted with a `RadioGroupProps.name`.
   */
  value: Value
  /**
   * The unique id of the radio item. It is created automatically by default.
   * It used by the label element in the radio item.
   */
  id?: string
}

type RadioFormComponentProps = Pick<FormFieldProps, 'disabled' | 'required'>

export interface RadioGroupProps<Value extends string> extends
  AlphaBezierComponentProps,
  ChildrenProps,
  RadioFormComponentProps,
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof RadioGroupOwnProps<Value> | keyof RadioGroupPrimitive.RadioGroupProps>,
  RadioGroupOwnProps<Value> {}

export interface RadioProps<Value extends string> extends
  AlphaBezierComponentProps,
  ChildrenProps,
  RadioFormComponentProps,
  Omit<React.HTMLAttributes<HTMLButtonElement>, keyof RadioOwnProps<Value>>,
  RadioOwnProps<Value> {}
