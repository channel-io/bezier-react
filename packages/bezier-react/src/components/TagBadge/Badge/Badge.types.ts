/* Internal dependencies */
import { BezierComponentProps, VariantProps, SizeProps, ChildrenProps } from 'Types/ComponentProps'
import { IconName } from 'Components/Icon'
import { TagBadgeSize, TagBadgeVariant } from 'Components/TagBadge'

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
