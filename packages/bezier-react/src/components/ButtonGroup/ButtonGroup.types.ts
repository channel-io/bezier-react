/* Internal dependencies */
import { BezierComponentProps, ChildrenProps } from 'Types/ComponentProps'
import { HStackProps } from 'Components/Stack'

interface ButtonGroupOptions {
  /**
   * Determines whether there is a 6px gap between the buttons.
   * @default false
   */
  withoutSpacing?: boolean
}

export default interface ButtonGroupProps extends
  BezierComponentProps,
  ChildrenProps,
  Pick<HStackProps, 'justify'>,
  ButtonGroupOptions {}
