/* Internal dependencies */
import { BezierComponentProps, DisableProps, SideContentProps } from 'Types/ComponentProps'
import type { IconName } from 'Components/Icon'

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
  Orange = 'orange',
  Pink = 'pink',
  Purple = 'purple',
  /**
   * @deprecated use `ButtonColorVariant.MonochromeLight` or `ButtonColorVariant.MonochromeDark`
   */
  Monochrome = 'monochrome',
  MonochromeLight = 'monochromeLight',
  MonochromeDark = 'monochromeDark',
}

export enum ButtonSize {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
}

export type SideContent = IconName | React.ReactNode

type MouseEventHandler = React.MouseEventHandler

interface ButtonOptions {
  type?: HTMLButtonElement['type']
  text?: string
  loading?: boolean
  active?: boolean
  size?: ButtonSize
  styleVariant?: ButtonStyleVariant
  colorVariant?: ButtonColorVariant
  onClick?: MouseEventHandler
  onMouseEnter?: MouseEventHandler
  onMouseLeave?: MouseEventHandler
  onBlur?: MouseEventHandler
}

export default interface ButtonProps extends
  BezierComponentProps,
  DisableProps,
  SideContentProps<SideContent, SideContent>,
  ButtonOptions {}
