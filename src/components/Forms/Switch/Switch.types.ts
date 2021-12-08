/* External dependencies */
import { MouseEvent } from 'react'

/* Internal dependencies */
import { BezierComponentProps } from 'Types/ComponentProps'

export default interface SwitchProps extends BezierComponentProps {
  size?: number
  checked?: boolean
  disabled?: boolean
  onClick?: (checked: boolean, event: MouseEvent) => void
}

export interface WrapperProps {
  size: number
  checked: boolean
  disabled: boolean
}

export interface ContentProps {
  size: number
  checked: boolean
}
