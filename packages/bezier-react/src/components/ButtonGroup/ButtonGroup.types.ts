import { HStackProps } from 'Components/Stack'

interface ButtonGroupOption {
  /**
   * Determines whether there is a 6px gap between the buttons.
   * @default true
   */
  hasGap?: boolean
}

export default interface ButtonGroupProps extends
  HStackProps,
  ButtonGroupOption
{}
