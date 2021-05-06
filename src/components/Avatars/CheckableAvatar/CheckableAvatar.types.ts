/* Internal dependencies */
import { AvatarProps } from '../Avatar'

export default interface CheckableAvatarProps extends AvatarProps {
  isChecked?: boolean
  isCheckable?: boolean
}
