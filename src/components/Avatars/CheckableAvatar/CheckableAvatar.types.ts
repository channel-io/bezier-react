/* Internal dependencies */
import { SemanticNames } from 'Foundation'
import type { AdditionalStylableProps } from 'Types/ComponentProps'
import type { AvatarProps } from 'Components/Avatars/Avatar'

interface CheckableAvatarPropsOptions {
  isChecked?: boolean
  isCheckable?: boolean
  checkedBackgroundColor?: SemanticNames
}

export default interface CheckableAvatarProps extends
  AvatarProps,
  AdditionalStylableProps<'checkableWrapper'>,
  CheckableAvatarPropsOptions {}
