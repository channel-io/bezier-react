/* Internal dependencies */
import { ChildrenComponentProps } from '../../../types/ComponentProps'
import { AvatarSize } from '../Avatar'

export interface AvatarGroupProps extends ChildrenComponentProps {
  max: number
  size?: AvatarSize
  spacing?: number
}
