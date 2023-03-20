/* Internal dependencies */
import { BezierComponentProps, SizeProps, DisableProps, SideContentProps } from '~/src/types/ComponentProps'
import type { IconName } from '~/src/components/Icon'

export enum ButtonStyleVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Floating = 'floating',
  FloatingAlt = 'floating-alt',
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

export type MouseEventHandler = React.MouseEventHandler<HTMLButtonElement>
type FocusEventHandler = React.FocusEventHandler<HTMLButtonElement>

interface ButtonOptions {
  /**
   * `type` attribute of typical HTML button.
   *
   * You may want to set `type` to `submit` to the button
   * which is used as a submit button in `<form>` component.
   *
   * @default 'button'
   */
  type?: HTMLButtonElement['type']

  /**
   * The text content in the button.
   *
   * Do not pass `text` prop if it is an icon-only button.
   */
  text?: string

  /**
   * If `loading` is true, spinner will be shown, replacing the content.
   *
   * @default false
   */
  loading?: boolean

  /**
   * If `active` is true, the button will be styled as if it is hovered.
   *
   * You may want to use this prop for a button which opens dropdown, etc.
   *
   * @default false
   */
  active?: boolean

  /**
   * The style variant.
   *
   * @default ButtonStyleVariant.Primary
   */
  styleVariant?: ButtonStyleVariant

  /**
   * The color variant.
   *
   * @default ButtonColorVariant.Blue
   */
  colorVariant?: ButtonColorVariant

  /**
   * The handler to be executed when the button is clicked.
   */
  onClick?: MouseEventHandler

  /**
   * The handler to be executed when the mouse enters the button.
   */
  onMouseEnter?: MouseEventHandler

  /**
   * The handler to be executed when the mouse leaves the button.
   */
  onMouseLeave?: MouseEventHandler

  /**
   * The handler to be executed when the button is unfocused.
   */
  onBlur?: FocusEventHandler
}

export default interface ButtonProps extends
  BezierComponentProps,
  SizeProps<ButtonSize>,
  DisableProps,
  SideContentProps<SideContent, SideContent>,
  React.HTMLAttributes<HTMLButtonElement>,
  ButtonOptions {}
