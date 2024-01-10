import {
  type AlphaBezierComponentProps,
  type ChildrenProps,
  type MarginProps,
} from '~/src/types/ComponentProps'

import { type StackProps } from '~/src/components/Stack'

interface ButtonGroupOwnProps {
  /**
   * Determines whether there is a 6px gap between the buttons.
   * @default false
   */
  withoutSpacing?: boolean
}

export interface ButtonGroupProps extends
  AlphaBezierComponentProps,
  ChildrenProps,
  MarginProps,
  Pick<StackProps, 'justify'>,
  Omit<React.HTMLAttributes<HTMLDivElement>, 'role'>,
  ButtonGroupOwnProps {}
