/* External dependencies */
import { IconName } from '@channel.io/bezier-react-icons'

/* Internal dependencies */
import { BezierComponentProps, VariantProps, SizeProps, ChildrenProps } from 'Types/ComponentProps'
import { TagBadgeSize, TagBadgeVariant } from 'Components/TagBadge'

interface BadgeOptions {
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
