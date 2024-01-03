import {
  type AlphaBezierComponentProps,
  type ChildrenProps,
  type ColorProps,
  type MarginProps,
  type SizeProps,
  type VariantProps,
} from '~/src/types/ComponentProps'

import {
  type TagBadgeSize,
  type TagBadgeVariant,
} from '~/src/components/TagBadge'

interface TagOwnProps {
  /**
   * Handler to be called when the delete button is clicked.
   *
   * The delete button will be not shown if this prop is not provided.
   */
  onDelete?: React.MouseEventHandler
}

interface TagProps extends
  AlphaBezierComponentProps,
  ChildrenProps,
  Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
  SizeProps<TagBadgeSize>,
  VariantProps<TagBadgeVariant>,
  ColorProps,
  MarginProps,
  TagOwnProps {}

export default TagProps
