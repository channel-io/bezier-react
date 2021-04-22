/* Internal dependencies */
import { css } from '../../../../foundation/FoundationStyledComponent'
import { ChildrenComponentProps } from '../../../../types/ComponentProps'

interface TagBadgeTextProps extends Omit<ChildrenComponentProps, 'style'|'className'|'interpolation'>{
  typo: ReturnType<typeof css>
  horizontalPadding: number
}

export default TagBadgeTextProps
