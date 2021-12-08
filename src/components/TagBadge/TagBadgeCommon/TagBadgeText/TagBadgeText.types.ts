/* Internal dependencies */
import { css } from 'Foundation'
import { ChildrenComponentProps } from 'Types/ComponentProps'

interface TagBadgeTextProps extends Omit<ChildrenComponentProps, 'style' | 'className' | 'interpolation'>{
  typo: ReturnType<typeof css>
  horizontalPadding: number
}

export default TagBadgeTextProps
