import {
  type AlphaBezierComponentProps,
  type ChildrenProps,
} from '~/src/types/ComponentProps'

import { type StackProps } from '~/src/components/Stack'

interface ButtonGroupOptions {
  /**
   * Determines whether there is a 6px gap between the buttons.
   * @default false
   */
  withoutSpacing?: boolean
}

export default interface ButtonGroupProps extends
  AlphaBezierComponentProps,
  ChildrenProps,
  Pick<StackProps, 'justify'>,
  ButtonGroupOptions {}
