import type {
  BezierComponentProps,
  ChildrenProps,
  V3MarginProps,
} from '~/src/types/props'
import { type HStackProps } from '~/src/v3/HStack'

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
    V3MarginProps,
    Pick<HStackProps, 'justify'>,
    ButtonGroupOwnProps {}
