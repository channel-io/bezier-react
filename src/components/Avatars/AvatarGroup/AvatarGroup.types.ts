/* Internal dependencies */
import { ChildrenComponentProps } from 'Types/ComponentProps'
import InjectedInterpolation from 'Types/InjectedInterpolation'
import { AvatarSize } from 'Components/Avatars/Avatar'

export enum AvatarGroupEllipsisType {
  Icon = 'Icon',
  Count = 'Count',
}

export default interface AvatarGroupProps extends ChildrenComponentProps {
  max: number
  size?: AvatarSize
  spacing?: number
  ellipsisType?: AvatarGroupEllipsisType
  onMouseEnterEllipsis?: (event: React.MouseEvent<HTMLDivElement>) => void
  onMouseLeaveEllipsis?: (event: React.MouseEvent<HTMLDivElement>) => void
  ellipsisInterpolation?: InjectedInterpolation
}
