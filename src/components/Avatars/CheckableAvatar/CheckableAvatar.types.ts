/* Internal dependencies */
import { SemanticNames } from 'Foundation'
import type { AdditionalStyleProps } from 'Types/ComponentProps'
import type { AvatarProps } from 'Components/Avatars/Avatar'

interface CheckableAvatarPropsOptions {
  isChecked?: boolean
  isCheckable?: boolean
  checkedBackgroundColor?: SemanticNames
}

export default interface CheckableAvatarProps extends
  AvatarProps,
  AdditionalStyleProps<'checkableWrapper'>,
  CheckableAvatarPropsOptions {}
