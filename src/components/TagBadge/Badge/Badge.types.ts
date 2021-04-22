/* Internal dependencies */

import { ChildrenComponentProps } from '../../../types/ComponentProps'
import InjectedInterpolation from '../../../types/InjectedInterpolation'
import { IconName } from '../../Icon/generated'
import {
  TagBadgeSize,
  TagBadgeVariant,
} from '../TagBadgeCommon'

interface BadgeProps extends ChildrenComponentProps {
  size?: TagBadgeSize
  variant?: TagBadgeVariant
  iconName?: IconName
  // Injected Styles
  wrapperClassName?: string
  wrapperInterpolation?: InjectedInterpolation
}

export default BadgeProps
