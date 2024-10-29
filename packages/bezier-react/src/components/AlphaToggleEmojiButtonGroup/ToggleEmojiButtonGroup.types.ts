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
}

interface ToggleEmojiButtonGroupOwnProps {
  /**
   * Growing direction of button.
   * @default undefined
   */
  fillDirection?: 'horizontal' | 'all'
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
