import { type BezierIcon } from '@channel.io/bezier-icons'

import {
  type BezierComponentProps,
  type DisableProps,
  type PolymorphicProps,
  type SideContentProps,
  type SizeProps,
} from '~/src/types/props'

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
  MonochromeLight = 'monochrome-light',
  MonochromeDark = 'monochrome-dark',
}

export enum ButtonSize {
  XS = 'xs',
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
}

export type SideContent = React.ReactNode | BezierIcon

interface ButtonOwnProps {
  /**
   * `type` attribute of typical HTML button.
   *
   * You may want to set `type` to `submit` to the button
   * which is used as a submit button in `<form>` component.
   * @default 'button'
   */
  type?: 'button' | 'reset' | 'submit'

  /**
   * The text content in the button.
   *
   * Do not pass `text` prop if it is an icon-only button.
   */
  text?: string

  /**
   * If `loading` is true, spinner will be shown, replacing the content.
   * @default false
   */
  loading?: boolean

  /**
   * If `active` is true, the button will be styled as if it is hovered.
   *
   * You may want to use this prop for a button which opens dropdown, etc.
   * @default false
   */
  active?: boolean

  /**
   * The style variant.
   * @default ButtonStyleVariant.Primary
   */
  styleVariant?: ButtonStyleVariant

  /**
   * The color variant.
   * @default ButtonColorVariant.Blue
   */
  colorVariant?: ButtonColorVariant
}

export interface ButtonProps extends
  BezierComponentProps<'button'>,
  PolymorphicProps,
  SizeProps<ButtonSize>,
  DisableProps,
  SideContentProps<SideContent, SideContent>,
  ButtonOwnProps {}
