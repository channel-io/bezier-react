/* Internal dependencies */
import { SemanticNames } from 'Foundation'
import InjectedInterpolation from 'Types/InjectedInterpolation'
import { AvatarProps } from 'Components/Avatars/Avatar'

export default interface CheckableAvatarProps extends AvatarProps {
  isChecked?: boolean
  isCheckable?: boolean
  checkedBackgroundColor?: SemanticNames
  checkableWrapperClassName?: string
  checkableWrapperInterpolation?: InjectedInterpolation
}
