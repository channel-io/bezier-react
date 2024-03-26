import {
  type BezierComponentProps,
  type ChildrenProps,
  type SizeProps,
  type VariantProps,
} from '~/src/types/props'

import {
  type BaseTagBadgeSize,
  type BaseTagBadgeVariant,
} from '~/src/components/BaseTagBadge'

export type TagSize = BaseTagBadgeSize

export type TagVariant = BaseTagBadgeVariant

interface TagOwnProps {
  /**
   * Handler to be called when the delete button is clicked.
   *
   * The delete button will be not shown if this prop is not provided.
   */
  onDelete?: React.MouseEventHandler
}

export interface TagProps
  extends BezierComponentProps<'div'>,
    ChildrenProps,
    SizeProps<TagSize>,
    VariantProps<TagVariant>,
    TagOwnProps {}
