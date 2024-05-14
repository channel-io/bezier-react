import { type ReactNode } from 'react'

import { type BezierIcon } from '@channel.io/bezier-icons'

import {
  type BezierComponentProps,
  type DisableProps,
  type PolymorphicProps,
  type SizeProps,
} from '~/src/types/props'

type IconButtonVariant = 'primary' | 'secondary' | 'tertiary'

type IconButtonColor =
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

type IconButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl'

interface IconButtonOwnProps {
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
  variant?: IconButtonVariant

  /**
   * Color of the button.
   * @default 'blue'
   */
  color?: IconButtonColor

  /**
   * Icon in the button.
   */
  icon?: BezierIcon | ReactNode

  /**
   * Shape of the button.
   * @default 'rectangle'
   */
  shape?: 'rectangle' | 'circle'
}

export interface IconButtonProps
  extends Omit<BezierComponentProps<'button'>, 'color'>,
    PolymorphicProps,
    SizeProps<IconButtonSize>,
    DisableProps,
    IconButtonOwnProps {}
