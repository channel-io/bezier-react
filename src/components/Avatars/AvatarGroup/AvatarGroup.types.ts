/* Internal dependencies */
import type { BezierComponentProps, ChildrenProps, AdditionalStylableProps } from 'Types/ComponentProps'
import { AvatarSize } from 'Components/Avatars/Avatar'

export enum AvatarGroupEllipsisType {
  Icon = 'Icon',
  Count = 'Count',
}

type MouseEventHandler = React.MouseEventHandler<HTMLDivElement>

interface AvatarGroupOptions {
  max: number
  size?: AvatarSize
  spacing?: number
  ellipsisType?: AvatarGroupEllipsisType
  onMouseEnterEllipsis?: MouseEventHandler
  onMouseLeaveEllipsis?: MouseEventHandler
}

export default interface AvatarGroupProps extends
  BezierComponentProps,
  ChildrenProps,
  AdditionalStylableProps<'ellipsis'>,
  AvatarGroupOptions {}
