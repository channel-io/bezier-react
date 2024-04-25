import { type BezierIcon } from '@channel.io/bezier-icons'

import {
  type BezierComponentProps,
  type DisableProps,
  type PolymorphicProps,
  type SizeProps,
} from '~/src/types/props'

export type ButtonStyleVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'floating'

export type ButtonColorVariant =
  | 'blue'
  | 'cobalt'
  | 'red'
  | 'orange'
  | 'green'
  | 'pink'
  | 'purple'
  | 'dark-grey'
  | 'light-grey'
  | 'white'

export type ButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl'

export type SideContent = BezierIcon

interface ButtonOwnProps {
  /**
   * The text content in the button.
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
   * You may want to use this prop for a button which opens dropdown, etc.
   * @default false
   */
  active?: boolean

  /**
   * The style variant.
   * @default 'primary'
   */
  variant?: ButtonStyleVariant

  /**
   * The color variant.
   * @default ButtonColorVariant.Blue
   */
  color?: ButtonColorVariant

  /**
   * Icon on the left.
   */
  prefixIcon?: BezierIcon

  /**
   * Icon on the left.
   */
  suffixIcon?: BezierIcon
}

export interface ButtonProps
  extends Omit<BezierComponentProps<'button'>, 'color'>,
    PolymorphicProps,
    SizeProps<ButtonSize>,
    DisableProps,
    ButtonOwnProps {}
