import type {
  AdditionalOverridableStyleProps,
  BezierComponentProps,
  ChildrenProps,
  SizeProps,
} from '~/src/types/props'

import { type AvatarSize } from '~/src/components/Avatar'

export enum AvatarGroupEllipsisType {
  Icon = 'Icon',
  Count = 'Count',
}

type MouseEventHandler = React.MouseEventHandler<HTMLDivElement>

interface AvatarGroupOwnProps {
  /**
   * Maximum number of avatars to display.
   *
   * If the number of avatars exceeds this number, ellipsis will be displayed.
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
   * @default AvatarGroupEllipsisType.Icon
   */
  ellipsisType?: AvatarGroupEllipsisType

  /**
   * Handler to be called when the mouse enters the ellipsis area.
   */
  onMouseEnterEllipsis?: MouseEventHandler

  /**
   * Handler to be called when the mouse leaves the ellipsis area.
   */
  onMouseLeaveEllipsis?: MouseEventHandler
}

export interface AvatarGroupProps extends
  BezierComponentProps<'div'>,
  ChildrenProps,
  SizeProps<AvatarSize>,
  AdditionalOverridableStyleProps<'ellipsis'>,
  AvatarGroupOwnProps {}
