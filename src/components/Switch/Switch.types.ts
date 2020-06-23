/* External dependencies */
import { MouseEvent } from 'react'

/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'

export default interface SwitchProps extends UIComponentProps {
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
