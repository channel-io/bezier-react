import { type ReactNode } from 'react'

import { type BezierIcon } from '@channel.io/bezier-icons'

import {
  type BezierComponentProps,
  type DisableProps,
  type PolymorphicProps,
  type SizeProps,
} from '~/src/types/props'

type ToggleButtonVariant = 'primary' | 'secondary'

type ToggleButtonSize = 'm'

interface ToggleButtonOwnProps {
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
   * You may want to use this prop for a button which opens dropdown, etc.
   * @default false
   */
  selected?: boolean

  /**
   * Types of visual styles for button.
   * @default 'primary'
   */
  variant?: ToggleButtonVariant

  /**
   * Shape of button.
   */
  shape?: 'rectangle' | 'capsule'

  /**
   * Icon on the left.
   */
  prefixContent?: BezierIcon | ReactNode

  /**
   * Icon on the right.
   */
  suffixContent?: BezierIcon | ReactNode
}

export interface ToggleButtonProps
  extends Omit<BezierComponentProps<'button'>, 'color'>,
    PolymorphicProps,
    SizeProps<ToggleButtonSize>,
    DisableProps,
    ToggleButtonOwnProps {}
