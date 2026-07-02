import { type HStackProps } from '~/src/beta/HStack'
import type {
  BezierComponentProps,
  ChildrenProps,
  MarginProps,
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
    MarginProps,
    Pick<HStackProps, 'justify'>,
    ButtonGroupOwnProps {}
