/* Internal dependencies */
import { SemanticNames } from 'Foundation'
import type { InjectedInterpolation } from 'Types/Foundation'
import type { AvatarProps } from 'Components/Avatars/Avatar'

export default interface CheckableAvatarProps extends AvatarProps {
  isChecked?: boolean
  isCheckable?: boolean
  checkedBackgroundColor?: SemanticNames
  checkableWrapperClassName?: string
  checkableWrapperInterpolation?: InjectedInterpolation
}
