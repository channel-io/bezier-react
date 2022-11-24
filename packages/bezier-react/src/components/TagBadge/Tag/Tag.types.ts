/* Internal dependencies */
import { BezierComponentProps, VariantProps, SizeProps, ChildrenProps, ColorProps } from 'Types/ComponentProps'
import { TagBadgeSize, TagBadgeVariant } from 'Components/TagBadge'

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
