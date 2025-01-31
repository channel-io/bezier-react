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
  /**
   * Whether the text is truncated.
   * If it is a positive integer, it means the maximum number of lines.
   * @default false
   */
  truncated?: boolean | number
}

export interface BadgeProps
  extends BezierComponentProps<'div'>,
    ChildrenProps,
    SizeProps<BadgeSize>,
    VariantProps<BadgeVariant>,
    BadgeOwnProps {}
