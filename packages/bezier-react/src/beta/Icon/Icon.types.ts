import { type BezierIcon } from '@channel.io/bezier-icons'

import {
  type BetaColorProps,
  type BetaMarginProps,
  type BezierComponentProps,
  type SizeProps,
} from '~/src/types/props'

export type IconSize = '10' | '12' | '16' | '20' | '24' | '36' | '44'

interface IconOwnProps {
  /**
   * Controls which icon should be rendered.
   * Inject the icon component from the `@channel.io/bezier-icons` package into this prop.
   * @example
   * ```tsx
   * import { HeartFilledIcon } from '@channel.io/bezier-icons'
   * import { Icon } from '@channel.io/bezier-react/beta'
   *
   * <Icon source={HeartFilledIcon} {...} />
   * ```
   */
  source: BezierIcon
}

export interface IconProps
  extends Omit<BezierComponentProps<'svg'>, keyof BetaColorProps>,
    BetaMarginProps,
    SizeProps<IconSize>,
    BetaColorProps,
    IconOwnProps {}
