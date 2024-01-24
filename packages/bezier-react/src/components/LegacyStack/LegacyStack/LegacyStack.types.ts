import type {
  AlphaBezierComponentProps,
  ChildrenProps,
  PolymorphicProps,
} from '~/src/types/ComponentProps'

import type { AxisAlignment } from '~/src/components/LegacyStack/types'

interface LegacyStackOwnProps {
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
   * @default stretch
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
}

/**
 * @deprecated Use `Stack` instead.s
 */
export default interface LegacyStackProps extends
  AlphaBezierComponentProps,
  PolymorphicProps,
  ChildrenProps,
  React.HTMLAttributes<HTMLElement>,
  LegacyStackOwnProps {}
