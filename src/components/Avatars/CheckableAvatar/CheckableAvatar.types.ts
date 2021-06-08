/* Internal dependencies */
import { SemanticNames } from '../../../foundation'
import InjectedInterpolation from '../../../types/InjectedInterpolation'
import { AvatarProps } from '../Avatar'

export default interface CheckableAvatarProps extends AvatarProps {
  isChecked?: boolean
  isCheckable?: boolean
  checkedBackgroundColor?: SemanticNames
  checkableWrapperClassName?: string
  checkableWrapperInterpolation?: InjectedInterpolation
}
