import type { SwitchProps as SwitchPrimitiveProps } from '@radix-ui/react-switch'

import type {
  AdditionalTestIdProps,
  AlphaBezierComponentProps,
  SizeProps,
} from '~/src/types/props'

import type { FormComponentProps } from '~/src/components/Forms/Form.types'

export enum SwitchSize {
  M = 'm',
  S = 's',
}

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
   * When `true`, prevents the user from interacting with the switch.
   */
  disabled?: boolean

  /**
   * When `true`, indicates that the user must check the switch before the owning form can be submitted.
   */
  required?: boolean

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

export interface SwitchProps extends
  AlphaBezierComponentProps,
  SizeProps<SwitchSize>,
  FormComponentProps,
  AdditionalTestIdProps<'handle'>,
  SwitchOwnProps {}
