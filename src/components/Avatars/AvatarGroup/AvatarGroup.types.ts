/* Internal dependencies */
import { ChildrenComponentProps } from '../../../types/ComponentProps'
import { AvatarSize } from '../Avatar'

export enum AvatarGroupEllipsisType {
  Icon = 'ICON',
  Count = 'COUNT',
}

export interface AvatarGroupProps extends ChildrenComponentProps {
  max: number
  size?: AvatarSize
  spacing?: number
  ellipsisType?: AvatarGroupEllipsisType
}
