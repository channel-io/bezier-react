import { type ReactNode } from 'react'

import { type BezierIcon } from '@channel.io/bezier-icons'

import {
  type BezierComponentProps,
  type DisableProps,
  type PolymorphicProps,
  type SizeProps,
} from '~/src/types/props'

type FloatingIconButtonVariant = 'primary' | 'secondary'

type FloatingIconButtonColor =
  | 'blue'
  | 'cobalt'
  | 'red'
  | 'orange'
  | 'green'
  | 'pink'
  | 'purple'
  | 'dark-grey'
  | 'light-grey'

type FloatingIconButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl'

interface FloatingIconButtonOwnProps {
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
   * Types of visual styles for button.
   * @default 'primary'
   */
  variant?: FloatingIconButtonVariant

  /**
   * Color of the button.
   * @default 'blue'
   */
  color?: FloatingIconButtonColor

  /**
   * Icon in the button.
   */
  content: BezierIcon | ReactNode
}

export interface FloatingIconButtonProps
  extends Omit<BezierComponentProps<'button'>, 'color' | 'content'>,
    PolymorphicProps,
    SizeProps<FloatingIconButtonSize>,
    DisableProps,
    FloatingIconButtonOwnProps {}
