import { type BezierIcon } from '@channel.io/bezier-icons'

import {
  type BezierComponentProps,
  type ChildrenProps,
  type SizeProps,
  type VariantProps,
} from '~/src/types/props'

import {
  type BaseTagBadgeSize,
  type BaseTagBadgeVariant,
} from '~/src/components/BaseTagBadge'

export type BadgeSize = BaseTagBadgeSize

export type BadgeVariant = BaseTagBadgeVariant

interface BadgeOwnProps {
  /**
   * Icon to be shown on the left side of the badge.
   */
  icon?: BezierIcon
}

export interface BadgeProps
  extends BezierComponentProps<'div'>,
    ChildrenProps,
    SizeProps<BadgeSize>,
    VariantProps<BadgeVariant>,
    BadgeOwnProps {}
