/* Internal dependencies */
import type {
  BezierComponentProps,
  ChildrenProps,
} from '~/src/types/ComponentProps'

import type { AxisAlignment } from '~/src/components/Stack/types'

interface AlphaStackOptions {
  /**
   * Direction of this stack.
   */
  direction: 'horizontal' | 'vertical'

  /**
   * Determines the default aligning of children along the main axis.
   *
   * @default start
   */
  justify?: AxisAlignment

  /**
   * Determines the default aligning of children along the cross axis.
   *
   * @default stretch
   */
  align?: AxisAlignment

  /**
   * Default spacing between children, in pixels.
   *
   * @remarks
   * `spacing` could be enumerated in later design, if bezier design system
   * decides to define a guideline for linear layout.
   *
   * @default 0
   */
  spacing?: number
}

export interface AlphaStackProps extends
  BezierComponentProps,
  ChildrenProps,
  React.HTMLAttributes<HTMLElement>,
  AlphaStackOptions {}
