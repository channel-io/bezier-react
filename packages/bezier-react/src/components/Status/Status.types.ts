/* Internal dependencies */
import type {
  BezierComponentProps,
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
  M = 8,
  L = 14,
}

interface StatusOptions {
  type: StatusType
}

export interface StatusProps extends
  BezierComponentProps,
  SizeProps<StatusSize>,
  React.HTMLAttributes<HTMLDivElement>,
  StatusOptions {}
