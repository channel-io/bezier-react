/* Internal dependencies */
import { SemanticNames } from 'Foundation'
import { ChildrenComponentProps } from 'Types/ComponentProps'
import { TagBadgeSize, TagBadgeVariant } from 'Components/TagBadge'

interface TagProps extends ChildrenComponentProps, React.HTMLAttributes<HTMLDivElement> {
  size?: TagBadgeSize
  variant?: TagBadgeVariant
  color?: SemanticNames
  // Handlers
  onDelete?: (e: React.MouseEvent) => void
}

export default TagProps
