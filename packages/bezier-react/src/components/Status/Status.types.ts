import type {
  BezierComponentProps,
  SizeProps,
} from '~/src/types/props'

export type StatusType =
| 'Online'
| 'Offline'
| 'Lock'
| 'OnlineCrescent'
| 'OfflineCrescent'

export type StatusSize =
| 'm'
| 'l'

interface StatusOwnProps {
  /**
   * Type of Status image.
   */
  type: StatusType
}

export interface StatusProps extends
  BezierComponentProps<'div'>,
  SizeProps<StatusSize>,
  StatusOwnProps {}
