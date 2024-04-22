import type {
  AdditionalOverridableStyleProps,
  BezierComponentProps,
  ChildrenProps,
  SizeProps,
} from '~/src/types/props'

import { type AvatarSize } from '~/src/components/Avatar'

export type AvatarGroupEllipsisType = 'icon' | 'count'

interface AvatarGroupOwnProps {
  /**
   * Maximum number of avatars to display.
   * If the number of avatars exceeds this number, ellipsis will be displayed.
   * @default 5
   */
  max: number

  /**
   * Spacing between the avatars.
   * Spacing could be negative, which will make the avatars overlap each other.
   * @default 4
   */
  spacing?: number

  /**
   * Controls how the ellipsis is displayed.
   * @default 'icon'
   */
  ellipsisType?: AvatarGroupEllipsisType
}

export interface AvatarGroupProps
  extends BezierComponentProps<'div'>,
    ChildrenProps,
    SizeProps<AvatarSize>,
    AvatarGroupOwnProps {}
