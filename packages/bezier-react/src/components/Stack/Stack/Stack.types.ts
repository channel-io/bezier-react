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
   * The `justify` prop given to child `StackItem` component
   * overrides the default alignment.
   *
   * @default start
   */
  justify?: AxisAlignment

  /**
   * Determines the default aligning of children along the cross axis.
   *
   * The `align` prop given to child `StackItem` component
   * overrides the default alignment.
   *
   * @default start
   */
  align?: AxisAlignment

  /**
   * Default spacing between children, in pixels.
   *
   * `marginBefore` and `marginAfter` prop given to child `StackItem` component
   * overrides the default spacing.
   *
   * @remarks
   * `spacing` could be enumerated in later design, if bezier design system
   * decides to define a guideline for linear layout.
   *
   * @default 0
   */
  spacing?: number

  /**
   * Role attribute for accessibility
   *
   * @default undefined
   */
  role?: string
}

export default interface StackProps extends
  BezierComponentProps,
  ChildrenProps,
  React.HTMLAttributes<HTMLElement>,
  StackOptions {}
