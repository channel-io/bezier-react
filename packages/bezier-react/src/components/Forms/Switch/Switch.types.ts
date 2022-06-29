/* External dependencies */
import type { MouseEvent } from 'react'

/* Internal dependencies */
import type { BezierComponentProps, SizeProps, DisableProps, AdditionalTestIdProps } from 'Types/ComponentProps'
import type { FormComponentProps } from 'Components/Forms/Form.types'

interface SwitchOptions {
  checked?: boolean
  onClick?: (checked: boolean, event: MouseEvent) => void
}

export default interface SwitchProps extends
  BezierComponentProps,
  SizeProps<number>,
  FormComponentProps,
  AdditionalTestIdProps<'handle'>,
  SwitchOptions {}

type StyledSwitchProps = Required<SizeProps<number> & Omit<SwitchOptions, 'onClick'>>

export interface WrapperProps extends
  StyledSwitchProps,
  Required<DisableProps> {}

export interface ContentProps extends StyledSwitchProps {}
