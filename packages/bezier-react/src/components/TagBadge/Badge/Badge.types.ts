import { type BezierIcon } from '@channel.io/bezier-icons'

import {
  type AlphaBezierComponentProps,
  type ChildrenProps,
  type MarginProps,
  type SizeProps,
  type VariantProps,
} from '~/src/types/ComponentProps'

import {
  type TagBadgeSize,
  type TagBadgeVariant,
} from '~/src/components/TagBadge'

interface BadgeOwnProps {
  /**
   * Icon to be shown on the left side of the badge.
   */
  icon?: BezierIcon
}

interface BadgeProps extends
  AlphaBezierComponentProps,
  ChildrenProps,
  Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
  SizeProps<TagBadgeSize>,
  VariantProps<TagBadgeVariant>,
  MarginProps,
  BadgeOwnProps {}

export default BadgeProps
