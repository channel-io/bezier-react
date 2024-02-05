import { type BezierIcon } from '@channel.io/bezier-icons'

import {
  type AlphaBezierComponentProps,
  type ChildrenProps,
  type SizeProps,
  type VariantProps,
} from '~/src/types/props'

import {
  type TagBadgeSize,
  type TagBadgeVariant,
} from '~/src/components/TagBadgeCommon'

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
  BadgeOwnProps {}

export default BadgeProps
