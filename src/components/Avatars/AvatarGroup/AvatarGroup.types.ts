/* Internal dependencies */
import type { ChildrenComponentProps } from 'Types/ComponentProps'
import type { InjectedInterpolation } from 'Types/Foundation'
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
