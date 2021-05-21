/* Internal dependencies */
import { ChildrenComponentProps } from '../../../types/ComponentProps'
import { IconName } from '../../Icon/generated'
import {
  TagBadgeSize,
  TagBadgeVariant,
} from '../TagBadgeCommon'

interface BadgeProps extends ChildrenComponentProps, React.HTMLAttributes<HTMLDivElement> {
  size?: TagBadgeSize
  variant?: TagBadgeVariant
  iconName?: IconName
}

export default BadgeProps
