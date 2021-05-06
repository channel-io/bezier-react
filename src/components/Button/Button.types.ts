/* Internal dependencies */
import { StylableComponentProps } from '../../types/ComponentProps'
import type { IconName } from '../Icon/generated'

export enum ButtonStyleVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Floating = 'floating',
}

export enum ButtonColorVariant {
  Blue = 'blue',
  Red = 'red',
  Green = 'green',
  Cobalt = 'cobalt',
  Monochrome = 'monochrome',
}

export enum ButtonSize {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
}

export interface ButtonProps extends StylableComponentProps {
  text: string
  bold?: boolean
  italic?: boolean
  disabled?: boolean
  active?: boolean
  size?: ButtonSize
  styleVariant?: ButtonStyleVariant
  colorVariant?: ButtonColorVariant
  leftIcon?: IconName
  rightIcon?: IconName
  onClick?: (event: MouseEvent) => void
}
