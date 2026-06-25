import { type HStackProps } from '~/src/beta/HStack'
import type {
  BetaMarginProps,
  BezierComponentProps,
  ChildrenProps,
} from '~/src/types/props'

interface ButtonGroupOwnProps {
  /**
   * Determines whether there is a 6px gap between the buttons.
   * @default false
   */
  withoutSpacing?: boolean
}

export interface ButtonGroupProps
  extends Omit<BezierComponentProps<'div'>, 'role'>,
    ChildrenProps,
    BetaMarginProps,
    Pick<HStackProps, 'justify'>,
    ButtonGroupOwnProps {}
