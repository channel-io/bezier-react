/* Internal dependencies */
import type { AdditionalStylableProps, AdditionalColorProps } from 'Types/ComponentProps'
import type { AvatarProps } from 'Components/Avatars/Avatar'

interface CheckableAvatarPropsOptions {
  isChecked?: boolean
  isCheckable?: boolean
}

export default interface CheckableAvatarProps extends
  AvatarProps,
  AdditionalStylableProps<'checkableWrapper'>,
  AdditionalColorProps<'checkedBackground'>,
  CheckableAvatarPropsOptions {}
