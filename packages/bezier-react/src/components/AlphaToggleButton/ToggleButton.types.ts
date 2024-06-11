import { type ReactNode } from 'react'

import { type BezierIcon } from '@channel.io/bezier-icons'

import {
  type BezierComponentProps,
  type DisableProps,
  type PolymorphicProps,
  type SizeProps,
} from '~/src/types/props'

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
   * Props that shows whether the button is selected.
   * @default false
   */
  selected?: boolean

  /**
   * Types of visual styles for button.
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary'

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
