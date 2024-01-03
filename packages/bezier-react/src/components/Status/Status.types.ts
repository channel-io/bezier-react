import type {
  AlphaBezierComponentProps,
  MarginProps,
  SizeProps,
} from '~/src/types/ComponentProps'

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
  AlphaBezierComponentProps,
  React.HTMLAttributes<HTMLDivElement>,
  SizeProps<StatusSize>,
  MarginProps,
  StatusOwnProps {}
