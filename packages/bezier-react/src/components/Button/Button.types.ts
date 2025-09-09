import { type BezierIcon } from '@channel.io/bezier-icons'

import {
  type BezierComponentProps,
  type DisableProps,
  type PolymorphicProps,
  type SideContentProps,
  type SizeProps,
} from '~/src/types/props'

export type ButtonStyleVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'floating'
  | 'floating-alt'

export type ButtonColorVariant =
  | 'blue'
  | 'red'
  | 'green'
  | 'cobalt'
  | 'orange'
  | 'pink'
  | 'purple'
  /**
   * @deprecated use `monochrome-light` or `monochrome-dark`
   */
  | 'monochrome'
  | 'monochrome-light'
  | 'monochrome-dark'

export type ButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl'

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
   * If `loading` is true, spinner will be shown, replacing the content. Also, the button will be disabled.
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
   * @default 'primary'
   */
  styleVariant?: ButtonStyleVariant

  /**
   * The color variant.
   * @default ButtonColorVariant.Blue
   */
  colorVariant?: ButtonColorVariant
}

export interface ButtonProps
  extends Omit<BezierComponentProps<'button'>, 'children'>,
    PolymorphicProps,
    SizeProps<ButtonSize>,
    DisableProps,
    SideContentProps<SideContent, SideContent>,
    ButtonOwnProps {
  children?: never
}
