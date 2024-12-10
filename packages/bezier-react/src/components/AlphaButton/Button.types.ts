import { type ReactNode } from 'react'

import { type BezierIcon } from '@channel.io/bezier-icons'

import {
  type BezierComponentProps,
  type DisableProps,
  type PolymorphicProps,
  type SizeProps,
} from '~/src/types/props'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'

export type ButtonColor =
  | 'blue'
  | 'cobalt'
  | 'red'
  | 'orange'
  | 'green'
  | 'pink'
  | 'purple'
  | 'dark-grey'
  | 'light-grey'
  | 'white-absolute'

export type ButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl'

interface ButtonOwnProps {
  /**
   * The text content in the button.
   */
  text: string

  /**
   * If `loading` is true, spinner will be shown, replacing the content. Also, the button will be disabled.
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
   * Types of visual styles for button.
   * @default 'primary'
   */
  variant?: ButtonVariant

  /**
   * Color of the button.
   * @default 'blue'
   */
  color?: ButtonColor

  /**
   * Icon on the left.
   */
  prefixContent?: BezierIcon | ReactNode

  /**
   * Icon on the right.
   */
  suffixContent?: BezierIcon | ReactNode
}

export interface ButtonProps
  extends Omit<BezierComponentProps<'button'>, 'color'>,
    PolymorphicProps,
    SizeProps<ButtonSize>,
    DisableProps,
    ButtonOwnProps {}
