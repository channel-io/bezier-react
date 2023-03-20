/* Internal dependencies */
import { BezierComponentProps, ChildrenProps } from '~/src/types/ComponentProps'
import { HStackProps } from '~/src/components/Stack'

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
