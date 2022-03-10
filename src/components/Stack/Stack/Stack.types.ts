/* Internal dependencies */
import type {
  BezierComponentProps,
  ChildrenProps,
} from 'Types/ComponentProps'
import type { AxisAlignment } from 'Components/Stack/types'

interface StackOptions {
  /**
   * Direction of this stack.
   *
   * @remarks
   *
   * If you are directly using this prop in application code,
   * consider using `HStack` or `VStack` instead.
   */
  direction: 'horizontal' | 'vertical'

  /**
   * Determines the default aligning of children along the main axis.
   *
   * The `mainAxis` prop given to child `StackItem` component
   * overrides the default alignment.
   *
   * @default start
   */
  mainAxis?: AxisAlignment

  /**
   * Determines the default aligning of children along the cross axis.
   *
   * The `crossAxis` prop given to child `StackItem` component
   * overrides the default alignment.
   *
   * @default start
   */
  crossAxis?: AxisAlignment

  /**
   * Default spacing between children, in pixels.
   *
   * `marginBefore` and `marginAfter` prop given to child `StackItem` component
   * overrides the default spacing.
   *
   * @default 0
   */
  spacing?: number
}

export default interface StackProps extends
  BezierComponentProps,
  ChildrenProps,
  StackOptions {}
