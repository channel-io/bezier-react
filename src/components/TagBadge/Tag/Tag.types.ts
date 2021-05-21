/* Internal dependencies */
import { SemanticNames } from '../../../foundation/Colors/Theme'
import { ChildrenComponentProps } from '../../../types/ComponentProps'
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
}

export default TagProps
