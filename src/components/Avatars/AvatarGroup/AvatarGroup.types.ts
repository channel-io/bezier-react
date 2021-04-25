/* Internal dependencies */
import { ChildrenComponentProps } from '../../../types/ComponentProps'
import InjectedInterpolation from '../../../types/InjectedInterpolation'
import { AvatarSize } from '../Avatar'

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
