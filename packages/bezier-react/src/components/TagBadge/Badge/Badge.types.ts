import { type BezierIcon } from '@channel.io/bezier-icons'

import {
  type BezierComponentProps,
  type ChildrenProps,
  type SizeProps,
  type VariantProps,
} from '~/src/types/ComponentProps'

import {
  type TagBadgeSize,
  type TagBadgeVariant,
} from '~/src/components/TagBadge'

interface BadgeOptions {
  /**
   * Icon to be shown on the left side of the badge.
   */
  icon?: BezierIcon
}

interface BadgeProps extends
  BezierComponentProps,
  ChildrenProps,
  Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
  SizeProps<TagBadgeSize>,
  VariantProps<TagBadgeVariant>,
  BadgeOptions {}

export default BadgeProps