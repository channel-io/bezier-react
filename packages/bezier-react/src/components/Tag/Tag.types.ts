import {
  type AlphaBezierComponentProps,
  type ChildrenProps,
  type ColorProps,
  type SizeProps,
  type VariantProps,
} from '~/src/types/props'

import {
  type TagBadgeSize,
  type TagBadgeVariant,
} from '~/src/components/TagBadgeCommon'

interface TagOwnProps {
  /**
   * Handler to be called when the delete button is clicked.
   *
   * The delete button will be not shown if this prop is not provided.
   */
  onDelete?: React.MouseEventHandler
}

export interface TagProps extends
  AlphaBezierComponentProps,
  ChildrenProps,
  Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
  SizeProps<TagBadgeSize>,
  VariantProps<TagBadgeVariant>,
  ColorProps,
  TagOwnProps {}
