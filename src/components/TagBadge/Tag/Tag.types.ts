/* Internal dependencies */
import { ThemeKey } from '../../../foundation/Theme/ThemeType'
import { ChildrenComponentProps } from '../../../types/ComponentProps'
import InjectedInterpolation from '../../../types/InjectedInterpolation'
import TagBadgeSize from '../constants/TagBadgeSize'
import TagBadgeVariant from '../constants/TagBadgeVariant'

interface TagProps extends ChildrenComponentProps {
  size: TagBadgeSize
  variant?: TagBadgeVariant
  color?: ThemeKey
  closable?: boolean
  // Handlers
  onClose?: (e: React.MouseEvent) => void
  // Injected Styles
  wrapperClassName?: string
  wrapperInterpolation?: InjectedInterpolation
}

export default TagProps
