import { type ReactNode } from 'react'

import { type BezierIcon } from '@channel.io/bezier-icons'

import {
  type BaseButtonAnchorProps,
  type BaseButtonButtonProps,
} from '~/src/beta/BaseButton'
import {
  type ButtonSemantic,
  type ButtonSize,
  type ButtonVariant,
} from '~/src/beta/Button'
import {
  type DisableProps,
  type SizeProps,
} from '~/src/types/props'

export type IconButtonVariant = ButtonVariant

export type IconButtonSemantic = ButtonSemantic

export type IconButtonSize = ButtonSize

export type IconButtonContent = BezierIcon | ReactNode

interface IconButtonOwnProps {
  /**
   * Icon content inside the button.
   */
  content: IconButtonContent
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
   * @default 'ghost'
   */
  variant?: IconButtonVariant
  /**
   * Semantic meaning of the button.
   * @default 'secondary'
   */
  semantic?: IconButtonSemantic
}

interface IconButtonButtonProps
  extends Omit<
    BaseButtonButtonProps,
    keyof IconButtonOwnProps | 'color' | 'type'
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

interface IconButtonAnchorProps
  extends Omit<
    BaseButtonAnchorProps,
    keyof IconButtonOwnProps | 'color'
  > {}

interface IconButtonCustomElementProps
  extends Omit<
    React.HTMLAttributes<HTMLElement>,
    keyof IconButtonOwnProps | 'children' | 'color' | 'as'
  > {
  /**
   * Custom element type to render.
   *
   * Prefer the default button or `as="a"` when possible. Custom elements are
   * kept as an escape hatch for wrapper components.
   */
  as: React.ElementType
}

export type IconButtonProps = IconButtonOwnProps &
  SizeProps<IconButtonSize> &
  DisableProps &
  (IconButtonButtonProps | IconButtonAnchorProps | IconButtonCustomElementProps)
