/* Internal dependencies */
import { BezierComponentProps, VariantProps, SizeProps, ChildrenProps } from '~/src/types/ComponentProps'
import { IconName } from '~/src/components/Icon'
import { TagBadgeSize, TagBadgeVariant } from '~/src/components/TagBadge'

interface BadgeOptions {
  /**
   * Icon to be shown on the left side of the badge.
   */
  iconName?: IconName
}

interface BadgeProps extends
  BezierComponentProps,
  ChildrenProps,
  Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
  SizeProps<TagBadgeSize>,
  VariantProps<TagBadgeVariant>,
  BadgeOptions {}

export default BadgeProps
