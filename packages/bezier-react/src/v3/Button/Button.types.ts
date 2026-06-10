import { type ReactNode } from 'react'

import { type BezierIcon } from '@channel.io/bezier-icons'

import {
  type BezierComponentProps,
  type DisableProps,
  type PolymorphicProps,
  type SizeProps,
} from '~/src/types/props'

export type ButtonVariant = 'filled' | 'outlined' | 'ghost'

export type ButtonSemantic = 'primary' | 'secondary' | 'destructive'

export type ButtonSize = 'xs' | 's' | 'm' | 'l'

export type ButtonSideContent = BezierIcon | ReactNode

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
   */
  text: string
  /**
   * If `loading` is true, spinner will be shown, replacing the content. Also, the button will be disabled.
   * @default false
   */
  loading?: boolean
  /**
   * If `active` is true, the button will be styled as if it is active.
   *
   * You may want to use this prop for a button which opens dropdown, etc.
   * @default false
   */
  active?: boolean
  /**
   * Types of visual styles for button.
   * @default 'filled'
   */
  variant?: ButtonVariant
  /**
   * Semantic meaning of the button.
   * @default 'primary'
   */
  semantic?: ButtonSemantic
  /**
   * Content on the left.
   */
  leadingContent?: ButtonSideContent
  /**
   * Content on the right.
   */
  trailingContent?: ButtonSideContent
}

export interface ButtonProps
  extends Omit<BezierComponentProps<'button'>, 'children' | 'color'>,
    PolymorphicProps,
    SizeProps<ButtonSize>,
    DisableProps,
    ButtonOwnProps {}
