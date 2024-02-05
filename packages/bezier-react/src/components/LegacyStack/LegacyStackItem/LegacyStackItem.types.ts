import type {
  BezierComponentProps,
  ChildrenProps,
  PolymorphicProps,
} from '~/src/types/props'

import type { AxisAlignment } from '~/src/components/LegacyStack/types'

interface LegacyStackItemOwnProps {
  /**
   * Direction of this stack item.
   *
   * If you are directly using this prop in application code, don't.
   * This prop will be provided from parent `Stack` component.
   */
  direction?: 'horizontal' | 'vertical'

  /**
   * Determines the aligning of this item along the main axis.
   *
   * This overrides the default alignment of parent `Stack`.
   */
  justify?: AxisAlignment

  /**
   * Determines the aligning of this item along the cross axis.
   *
   * This overrides the default alignment of parent `Stack`.
   */
  align?: AxisAlignment

  /**
   * Idle size of this component along the main axis, in pixels.
   * @default auto
   */
  size?: number

  /**
   * Determines how the size of this child behaves
   * when the main axis size of parent `Stack` expands or shrinks.
   *
   * Only non-negative integers are allowed for weight values.
   *
   * If the weight is larger, this child will be affected **more** from
   * the parent size update.
   * @default 0
   */
  weight?: number

  /**
   * Allows this component to grow as parent expands.
   *
   * You might want to use this prop together with `weight`.
   * @default false
   */
  grow?: boolean

  /**
   * Allows this component to shrink as parent shrinks.
   *
   * You might want to use htis prop together with `weight`.
   * @default false
   */
  shrink?: boolean

  /**
   * Margin between the previous item, in pixels.
   *
   * If you do not specify this, the margin will be determined
   * by the default spacing of parent `Stack`.
   * @default 0
   */
  marginBefore?: number

  /**
   * Margin after this item, in pixels.
   *
   * If you do not specify this, the margin will be determined
   * by the default spacing of parent `Stack`.
   * @default 0
   */
  marginAfter?: number
}

/**
 * @deprecated Use layout components(`Box`, `Stack`) that support flex item related properties (`shrink`, `grow`) instead.
 * @example
 *
 * ```
 * <Stack>
 *   <Stack grow={1} shrink={1} {...}>
 *     { ... }
 *   </Stack>
 *   <Box grow={0} shrink={0} {...} />
 * </Stack>
 * ```
 */
export default interface LegacyStackItemProps extends
  BezierComponentProps,
  PolymorphicProps,
  ChildrenProps,
  LegacyStackItemOwnProps {}
