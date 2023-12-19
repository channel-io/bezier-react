import {
  type AlphaBezierComponentProps,
  type ChildrenProps,
} from '~/src/types/ComponentProps'

import { type AlphaStackProps } from '~/src/components/AlphaStack'

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
  Pick<AlphaStackProps, 'justify'>,
  ButtonGroupOptions {}
