/* External dependencies */
import { CSSProperties, MouseEvent } from 'react'

export interface SwitchProps {
  className?: string
  style?: CSSProperties
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
