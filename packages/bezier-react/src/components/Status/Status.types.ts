import type {
  BezierComponentProps,
  SizeProps,
} from '~/src/types/props'

export enum StatusType {
  Online = 'Online',
  Offline = 'Offline',
  Lock = 'Lock',
  OnlineCrescent = 'OnlineCrescent',
  OfflineCrescent = 'OfflineCrescent',
}

export enum StatusSize {
  M = 'm',
  L = 'l',
}

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
