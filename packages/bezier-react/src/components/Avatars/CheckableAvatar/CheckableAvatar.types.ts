/* Internal dependencies */
import type {
  AdditionalStylableProps,
  AdditionalColorProps,
} from '~/src/types/ComponentProps'
import type { AvatarProps } from '~/src/components/Avatars/Avatar'

interface CheckableAvatarPropsOptions {
  isChecked?: boolean
  isCheckable?: boolean
}

export default interface CheckableAvatarProps extends
  AvatarProps,
  AdditionalStylableProps<'checkableWrapper'>,
  AdditionalColorProps<'checkedBackground'>,
  CheckableAvatarPropsOptions {}
