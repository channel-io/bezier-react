import { type BezierIcon } from '@channel.io/bezier-icons'

import {
  type BezierComponentProps,
  type SizeProps,
  type V3ColorProps,
  type V3MarginProps,
} from '~/src/types/props'

export type IconSize = '10' | '12' | '16' | '20' | '24' | '36' | '44'

interface IconOwnProps {
  /**
   * Controls which icon should be rendered.
   * Inject the icon component from the `@channel.io/bezier-icons` package into this prop.
   * @example
   * ```tsx
   * import { HeartFilledIcon } from '@channel.io/bezier-icons'
   * import { Icon } from '@channel.io/bezier-react/v3'
   *
   * <Icon source={HeartFilledIcon} {...} />
   * ```
   */
  source: BezierIcon
}

export interface IconProps
  extends Omit<BezierComponentProps<'svg'>, keyof V3ColorProps>,
    V3MarginProps,
    SizeProps<IconSize>,
    V3ColorProps,
    IconOwnProps {}
