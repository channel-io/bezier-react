/* External dependencies */
import { MouseEvent } from 'react'

/* Internal dependencies */
import { BezierComponentProps, DisableProps } from 'Types/ComponentProps'

interface SwitchOptions {
  size?: number
  checked?: boolean
  onClick?: (checked: boolean, event: MouseEvent) => void
}

export default interface SwitchProps extends
  BezierComponentProps,
  DisableProps,
  SwitchOptions {}

type StyledSwitchProps = Required<Omit<SwitchOptions, 'onClick'>>

export interface WrapperProps extends
  StyledSwitchProps,
  Required<DisableProps> {}

export interface ContentProps extends StyledSwitchProps {}
