/* Internal dependencies */
import { SemanticNames } from '../../../foundation/Colors/Theme'
import { ChildrenComponentProps } from '../../../types/ComponentProps'
import InjectedInterpolation from '../../../types/InjectedInterpolation'
import {
  TagBadgeSize,
  TagBadgeVariant,
} from '../TagBadgeCommon'

interface TagProps extends ChildrenComponentProps, React.HTMLAttributes<HTMLDivElement> {
  size?: TagBadgeSize
  variant?: TagBadgeVariant
  color?: SemanticNames
  // Handlers
  onDelete?: (e: React.MouseEvent) => void
  // Injected Styles
  wrapperClassName?: string
  wrapperInterpolation?: InjectedInterpolation
}

export default TagProps
