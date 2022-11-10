/* External dependencies */
import type { SwitchProps as SwitchPrimitiveProps } from '@radix-ui/react-switch'

/* Internal dependencies */
import type { BezierComponentProps, SizeProps, AdditionalTestIdProps } from 'Types/ComponentProps'
import type { FormComponentProps } from 'Components/Forms/Form.types'

export enum SwitchSize {
  M = 'm',
  S = 's',
}

interface SwitchOptions {}

export default interface SwitchProps extends
  BezierComponentProps,
  SizeProps<SwitchSize>,
  FormComponentProps,
  AdditionalTestIdProps<'handle'>,
  SwitchPrimitiveProps,
  SwitchOptions {}
