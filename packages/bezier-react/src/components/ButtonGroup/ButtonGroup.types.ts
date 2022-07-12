import { BezierComponentProps, ChildrenProps } from 'Types/ComponentProps'
import { HStackProps } from 'Components/Stack'

interface ButtonGroupOptions {
  /**
   * Determines whether there is a 6px gap between the buttons.
   * @default true
   */
  hasGap?: boolean
}

export default interface ButtonGroupProps extends
  BezierComponentProps,
  ChildrenProps,
  HStackProps,
  ButtonGroupOptions
{}
