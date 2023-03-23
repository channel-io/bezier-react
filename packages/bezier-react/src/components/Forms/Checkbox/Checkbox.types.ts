/* Internal dependencies */
import {
  type BezierComponentProps,
  type ChildrenProps,
} from '~/src/types/ComponentProps'
import { type FormComponentProps } from '~/src/components/Forms'

export type CheckedState = boolean | 'indeterminate'

interface CheckboxOptions {
  /**
   * The controlled checked state of the checkbox.
   * Must be used in conjunction with `onCheckedChange`.
   */
  checked?: CheckedState
  /**
   * The checked state of the checkbox when it is initially rendered.
   * Use when you do not need to control its checked state.
   */
  defaultChecked?: CheckedState
  /**
   * The unique id of the checkbox. It is created automatically by default.
   * It used by the label element in the checkbox.
   */
  id?: string
  /**
   * The name of the checkbox.
   * Submitted with its owning form as part of a name/value pair.
   */
  name?: string
  /**
   * The value given as data when submitted with a name.
   * @default 'on'
   */
  value?: string
  /**
   * Event handler called when the checked state of the checkbox changes.
   */
  onCheckedChange?: (checked: CheckedState) => void
}

export interface CheckboxProps extends
  Omit<BezierComponentProps, 'as'>,
  ChildrenProps,
  FormComponentProps,
  Omit<React.HTMLAttributes<HTMLButtonElement>, keyof CheckboxOptions>,
  CheckboxOptions {}
