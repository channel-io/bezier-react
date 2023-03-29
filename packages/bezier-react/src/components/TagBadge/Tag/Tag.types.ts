/* Internal dependencies */
import {
  type BezierComponentProps,
  type VariantProps,
  type SizeProps,
  type ChildrenProps,
  type ColorProps,
} from '~/src/types/ComponentProps'
import {
  type TagBadgeSize,
  type TagBadgeVariant,
} from '~/src/components/TagBadge'

interface TagOptions {
  /**
   * Handler to be called when the delete button is clicked.
   *
   * The delete button will be not shown if this prop is not provided.
   */
  onDelete?: React.MouseEventHandler
}

interface TagProps extends
  BezierComponentProps,
  ChildrenProps,
  Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
  SizeProps<TagBadgeSize>,
  VariantProps<TagBadgeVariant>,
  ColorProps,
  TagOptions {}

export default TagProps
