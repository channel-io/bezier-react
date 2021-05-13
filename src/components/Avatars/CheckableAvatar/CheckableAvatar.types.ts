/* Internal dependencies */
import InjectedInterpolation from '../../../types/InjectedInterpolation'
import { AvatarProps } from '../Avatar'

export default interface CheckableAvatarProps extends AvatarProps {
  isChecked?: boolean
  isCheckable?: boolean
  checkableWrapperClassName?: string
  checkableWrapperInterpolation?: InjectedInterpolation
}
