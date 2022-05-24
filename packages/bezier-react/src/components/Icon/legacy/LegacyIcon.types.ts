/* External dependencies */
import { IconName } from '@channel.io/bezier-react-icons'

/* Internal dependencies */
import type IconProps from 'Components/Icon/Icon.types'

interface LegacyIconOptions {
  name: IconName
}

export default interface LegacyIconProps extends
  Omit<IconProps, 'as'>,
  LegacyIconOptions {}
