import type * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import {
  type BezierComponentProps,
  type ChildrenProps,
  type FormFieldProps,
} from '~/src/types/props'

export type RadioGroupDirection = 'horizontal' | 'vertical'

interface RadioGroupOwnProps<Value extends string> {
  /**
   * Custom CSS class name for the component.
   */
  className?: string
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
   * Spacing between `Radio` items, in pixels.
   * Defaults to 0 for vertical groups and 20 for horizontal groups.
   */
  spacing?: string | number
  /**
   * Direction of this RadioGroup.
   * @default 'vertical'
   */
  direction?: RadioGroupDirection
  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: Value) => void
}

interface RadioOwnProps<Value extends string> {
  /**
   * Custom CSS class name for the component.
   */
  className?: string
  /**
   * The value given as data when submitted with a `RadioGroupProps.name`.
   */
  value: Value
}

type RadioFormComponentProps = Pick<
  FormFieldProps,
  'disabled' | 'required' | 'hasError'
>

export interface RadioGroupProps<Value extends string>
  extends Omit<
      BezierComponentProps<'div'>,
      | keyof RadioGroupOwnProps<Value>
      | keyof RadioGroupPrimitive.RadioGroupProps
    >,
    ChildrenProps,
    RadioFormComponentProps,
    RadioGroupOwnProps<Value> {}

export interface RadioProps<Value extends string>
  extends Omit<
      BezierComponentProps<'button'>,
      keyof RadioOwnProps<Value> | keyof RadioGroupPrimitive.RadioGroupItemProps
    >,
    ChildrenProps,
    Pick<RadioFormComponentProps, 'disabled' | 'required'>,
    RadioOwnProps<Value> {}
