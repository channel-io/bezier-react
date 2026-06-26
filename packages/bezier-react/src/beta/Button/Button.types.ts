import { type ReactNode } from 'react'

import { type BezierIcon } from '@channel.io/bezier-icons'

import {
  type BezierComponentProps,
  type DisableProps,
  type LeadingTrailingContentProps,
  type SizeProps,
} from '~/src/types/props'

export type ButtonVariant = 'filled' | 'outlined' | 'ghost'

export type ButtonSemantic = 'primary' | 'secondary' | 'destructive'

export type ButtonSize = 'xs' | 's' | 'm' | 'l'

export type ButtonSideContent = BezierIcon | ReactNode

interface ButtonOwnProps
  extends LeadingTrailingContentProps<ButtonSideContent> {
  /**
   * The label content in the button.
   */
  label: string
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
}

interface ButtonButtonProps
  extends Omit<
    BezierComponentProps<'button'>,
    keyof ButtonOwnProps | 'children' | 'color' | 'as'
  > {
  as?: 'button'
  /**
   * `type` attribute of typical HTML button.
   *
   * You may want to set `type` to `submit` to the button
   * which is used as a submit button in `<form>` component.
   * @default 'button'
   */
  type?: 'button' | 'reset' | 'submit'
}

interface ButtonAnchorProps
  extends Omit<
    BezierComponentProps<'a'>,
    keyof ButtonOwnProps | 'children' | 'color' | 'as' | 'type'
  > {
  as: 'a'
  type?: never
}

interface ButtonCustomElementProps
  extends Omit<
    BezierComponentProps,
    keyof ButtonOwnProps | 'children' | 'color' | 'as'
  > {
  /**
   * Custom element type to render.
   *
   * Prefer the default button or `as="a"` when possible. Custom elements are
   * kept as an escape hatch for wrapper components.
   */
  as: React.ElementType
}

export type ButtonProps = ButtonOwnProps &
  SizeProps<ButtonSize> &
  DisableProps &
  (ButtonButtonProps | ButtonAnchorProps | ButtonCustomElementProps)
