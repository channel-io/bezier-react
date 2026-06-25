import type { SwitchProps as SwitchPrimitiveProps } from '@radix-ui/react-switch'

import type {
  BezierComponentProps,
  ChildrenProps,
  FormFieldProps,
} from '~/src/types/props'

interface SwitchOwnProps extends Omit<SwitchPrimitiveProps, 'asChild'> {
  /**
   * The state of the switch when it is initially rendered.
   * Use when you do not need to control its state.
   * @default false
   */
  defaultChecked?: boolean
  /**
   * The controlled state of the switch.
   * Must be used in conjunction with `onCheckedChange`.
   */
  checked?: boolean
  /**
   * Event handler called when the state of the switch changes.
   */
  onCheckedChange?: (checked: boolean) => void
  /**
   * The name of the switch.
   * Submitted with its owning form as part of a name/value pair.
   */
  name?: string
  /**
   * The value given as data when submitted with a `name`.
   */
  value?: string
}

export interface SwitchProps
  extends Omit<BezierComponentProps<'button'>, keyof SwitchOwnProps>,
    ChildrenProps,
    FormFieldProps,
    SwitchOwnProps {}
