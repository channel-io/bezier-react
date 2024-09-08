import type { BezierComponentProps, SizeProps } from '~/src/types/props'

export type StatusBadgeSize = 'm' | 'l'

interface StatusBadgeOwnProps {
  online?: boolean
  doNotDisturb?: boolean
}

export interface StatusBadgeProps
  extends BezierComponentProps<'div'>,
    SizeProps<StatusBadgeSize>,
    StatusBadgeOwnProps {}
