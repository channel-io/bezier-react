import {
  type BezierComponentProps,
  type ChildrenProps,
  type FormFieldProps,
} from '~/src/types/props'

export type CheckedState = boolean | 'indeterminate'

interface CheckboxOwnProps<Checked extends CheckedState> {
  /**
   * The controlled checked state of the checkbox.
   * Must be used in conjunction with `onCheckedChange`.
   */
  checked?: Checked
  /**
   * The checked state of the checkbox when it is initially rendered.
   * Use when you do not need to control its checked state.
   */
  defaultChecked?: Checked
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
  onCheckedChange?: (checked: Checked) => void
}

export interface CheckboxProps<Checked extends CheckedState>
  extends Omit<BezierComponentProps<'button'>, keyof CheckboxOwnProps<Checked>>,
    ChildrenProps,
    FormFieldProps,
    CheckboxOwnProps<Checked> {}
