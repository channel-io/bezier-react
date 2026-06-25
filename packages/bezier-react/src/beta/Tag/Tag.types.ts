import { type BaseTagBadgeSize } from '~/src/beta/BaseTagBadge'
import {
  type BezierComponentProps,
  type ChildrenProps,
  type SizeProps,
  type VariantProps,
} from '~/src/types/props'

export type TagSize = BaseTagBadgeSize

export type TagVariant =
  | 'default'
  | 'blue'
  | 'cobalt'
  | 'teal'
  | 'green'
  | 'olive'
  | 'pink'
  | 'navy'
  | 'yellow'
  | 'orange'
  | 'red'
  | 'purple'

interface TagOwnProps {
  /**
   * Handler to be called when the delete button is clicked.
   *
   * The delete button is not shown when this prop is not provided.
   */
  onDelete?: React.MouseEventHandler<HTMLButtonElement>
}

export interface TagProps
  extends Omit<BezierComponentProps<'div'>, keyof TagOwnProps>,
    ChildrenProps,
    SizeProps<TagSize>,
    VariantProps<TagVariant>,
    TagOwnProps {}
