import type { BezierComponentProps, SizeProps } from '~/src/types/props'

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export type StatusBadgeSize = 'm' | 'l'

interface StatusBadgeOwnProps {
  /**
   * `online` is a boolean value that determines the color of the badge.
   * If `online` is true, badge will be green.
   * If `online` is false, badge will be gray (when `doNotDisturb` is false)
   * or yellow (when `doNotDisturb` is true).
   * @default false
   */
  online?: boolean
  /**
   * `doNotDisturb` is a boolean value that determines the shape of the badge.
   * If `doNotDisturb` is true, badge will be a crescent moon.
   * If `doNotDisturb` is false, badge will be a full circle.
   * @default false
   */
  doNotDisturb?: boolean
}

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export interface StatusBadgeProps
  extends BezierComponentProps<'div'>,
    SizeProps<StatusBadgeSize>,
    StatusBadgeOwnProps {}
