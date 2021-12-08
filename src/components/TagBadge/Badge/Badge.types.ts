/* Internal dependencies */
import { ChildrenComponentProps } from 'Types/ComponentProps'
import { IconName } from 'Components/Icon'
import { TagBadgeSize, TagBadgeVariant } from 'Components/TagBadge'

interface BadgeProps extends ChildrenComponentProps, React.HTMLAttributes<HTMLDivElement> {
  size?: TagBadgeSize
  variant?: TagBadgeVariant
  iconName?: IconName
}

export default BadgeProps
