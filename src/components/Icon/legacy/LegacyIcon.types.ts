/* Internal dependencies */
import type IconProps from 'Components/Icon/Icon.types'
import { IconName } from 'Components/Icon/generated'

interface LegacyIconOptions {
  name: IconName
}

export default interface LegacyIconProps extends
  Omit<IconProps, 'as'>,
  LegacyIconOptions {}
