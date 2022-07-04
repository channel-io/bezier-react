/* External dependencies */
import type { MouseEvent } from 'react'

/* Internal dependencies */
import type { BezierComponentProps, SizeProps, AdditionalTestIdProps } from 'Types/ComponentProps'
import type { FormComponentProps } from 'Components/Forms/Form.types'

export enum SwitchSize {
  M = 'm',
  S = 's',
}

interface SwitchOptions {
  checked?: boolean
  onClick?: (checked: boolean, event: MouseEvent) => void
}

export default interface SwitchProps extends
  BezierComponentProps,
  SizeProps<SwitchSize>,
  FormComponentProps,
  AdditionalTestIdProps<'handle'>,
  SwitchOptions {}
