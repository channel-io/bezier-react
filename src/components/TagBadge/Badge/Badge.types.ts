/* Internal dependencies */

import { ChildrenComponentProps } from '../../../types/ComponentProps'
import InjectedInterpolation from '../../../types/InjectedInterpolation'
import { IconName } from '../../Icon/generated'
import TagBadgeSize from '../constants/TagBadgeSize'
import TagBadgeVariant from '../constants/TagBadgeVariant'

interface BadgeProps extends ChildrenComponentProps {
  size?: TagBadgeSize
  variant?: TagBadgeVariant
  iconName?: IconName
  // Injected Styles
  wrapperClassName?: string
  wrapperInterpolation?: InjectedInterpolation
}

export default BadgeProps
