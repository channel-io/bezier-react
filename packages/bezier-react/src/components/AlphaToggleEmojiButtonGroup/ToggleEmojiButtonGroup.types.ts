import { type BezierComponentProps, type SizeProps } from '~/src/types/props'

interface ToggleEmojiButtonSourceOwnProps {
  /**
   * Types of visual styles for button.
   * @default 'primary'
   */
  variant: 'primary' | 'secondary'

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
  value: string
  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: string) => void
}

export interface ToggleEmojiButtonGroupProps
  extends BezierComponentProps<'div'>,
    ToggleEmojiButtonGroupOwnProps {}

export interface ToggleEmojiButtonSourceProps
  extends Omit<
      BezierComponentProps<'button'>,
      keyof ToggleEmojiButtonSourceOwnProps
    >,
    SizeProps<'m'>,
    ToggleEmojiButtonSourceOwnProps {}
