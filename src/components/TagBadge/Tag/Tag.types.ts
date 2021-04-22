/* Internal dependencies */
import { SemanticNames } from '../../../foundation/Colors/Theme'
import { ChildrenComponentProps } from '../../../types/ComponentProps'
import InjectedInterpolation from '../../../types/InjectedInterpolation'
import {
  TagBadgeSize,
  TagBadgeVariant,
} from '../TagBadgeCommon'

interface TagProps extends ChildrenComponentProps {
  size?: TagBadgeSize
  variant?: TagBadgeVariant
  color?: SemanticNames
  closable?: boolean
  // Handlers
  onClose?: (e: React.MouseEvent) => void
  // Injected Styles
  wrapperClassName?: string
  wrapperInterpolation?: InjectedInterpolation
}

export default TagProps
