import {
  type BezierComponentProps,
  type ChildrenProps,
  type MarginProps,
} from '~/src/types/props'

import { type StackProps } from '~/src/components/Stack'

interface ButtonGroupOwnProps {
  /**
   * Determines whether there is a 6px gap between the buttons.
   * @default false
   */
  withoutSpacing?: boolean
}

export interface ButtonGroupProps extends
  Omit<BezierComponentProps<'div'>, 'role'>,
  ChildrenProps,
  MarginProps,
  Pick<StackProps, 'justify'>,
  ButtonGroupOwnProps {}
