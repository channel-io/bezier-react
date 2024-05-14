import { type ReactNode } from 'react'

import { type BezierIcon } from '@channel.io/bezier-icons'

import {
  type BezierComponentProps,
  type DisableProps,
  type PolymorphicProps,
  type SizeProps,
} from '~/src/types/props'

export type FloatingButtonVariant = 'primary' | 'secondary'

export type FloatingButtonColor =
  | 'blue'
  | 'cobalt'
  | 'red'
  | 'orange'
  | 'green'
  | 'pink'
  | 'purple'
  | 'dark-grey'
  | 'light-grey'

export type FloatingButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl'

interface FloatingButtonOwnProps {
  /**
   * The text content in the button.
   */
  text: string

  /**
   * If `loading` is true, spinner will be shown, replacing the content.
   * @default false
   */
  loading?: boolean

  /**
   * If `active` is true, the button will be styled as if it is hovered.
   * @default false
   */
  active?: boolean

  /**
   * Types of visual styles for button.
   * @default 'primary'
   */
  variant?: FloatingButtonVariant

  /**
   * Color of the button.
   * @default 'blue'
   */
  color?: FloatingButtonColor

  /**
   * Icon on the left.
   */
  prefixIcon?: BezierIcon | ReactNode

  /**
   * Icon on the right.
   */
  suffixIcon?: BezierIcon | ReactNode
}

export interface FloatingButtonProps
  extends Omit<BezierComponentProps<'button'>, 'color'>,
    PolymorphicProps,
    SizeProps<FloatingButtonSize>,
    DisableProps,
    FloatingButtonOwnProps {}
