import { type BezierIcon } from '@channel.io/bezier-icons'

import {
  type BezierComponentProps,
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

export interface BadgeProps extends
  BezierComponentProps<'div'>,
  ChildrenProps,
  SizeProps<TagBadgeSize>,
  VariantProps<TagBadgeVariant>,
  BadgeOwnProps {}
