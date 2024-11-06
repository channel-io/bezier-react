import { type BezierComponentProps, type SizeProps } from '~/src/types/props'

interface ToggleEmojiButtonSourceOwnProps {
  /**
   * Types of visual styles for button.
   * @default 'primary'
   */
  variant: 'primary' | 'secondary'
  /**
   * Props that shows whether the button is selected.
   * @default false
   */
  selected?: boolean
  /**
   * Name of emoji in the button.
   */
  name: string
  /**
   * Controlled value of the button.
   */
  value: string
}

interface ToggleEmojiButtonGroupOwnProps {
  /**
   * Growing direction of button.
   * @default undefined
   */
  fillDirection?: 'horizontal' | 'all'
  /**
   * Controlled value of the button item to select.
   * should be used with `onValueChange`.
   */
  value?: string
  /**
   * The value of the button to show as selected when initially rendered.
   * Use when you do not need to control the state of the items.
   */
  defaultValue?: string
  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: string) => void
}

export interface ToggleEmojiButtonGroupProps
  extends Omit<BezierComponentProps<'div'>, 'defaultValue'>,
    ToggleEmojiButtonGroupOwnProps {}

export interface ToggleEmojiButtonSourceProps
  extends Omit<
      BezierComponentProps<'button'>,
      keyof ToggleEmojiButtonSourceOwnProps
    >,
    SizeProps<'m'>,
    ToggleEmojiButtonSourceOwnProps {}
