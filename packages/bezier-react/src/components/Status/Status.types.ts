import type { BezierComponentProps, SizeProps } from '~/src/types/props'

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export type StatusType =
  | 'online'
  | 'offline'
  | 'lock'
  | 'online-crescent'
  | 'offline-crescent'

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export type StatusSize = 'm' | 'l'

interface StatusOwnProps {
  /**
   * Type of Status image.
   */
  type: StatusType
}

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export interface StatusProps
  extends BezierComponentProps<'div'>,
    SizeProps<StatusSize>,
    StatusOwnProps {}
