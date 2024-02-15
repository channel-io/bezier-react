import type React from 'react'

import {
  type BezierComponentProps,
  type ColorProps,
  type MarginProps,
  type SizeProps,
} from '~/src/types/props'

/**
 * TODO: migrate to string literal
 */
export enum IconSize {
  XL = 44,
  L = 36,
  Normal = 24,
  S = 20,
  XS = 16,
  XXS = 12,
  XXXS = 10,
}

interface IconOwnProps {
  /**
   * Controls which icon should be rendered.
   * Inject the icon component from the @channel.io/bezier-icons package into this prop.
   * @example
   * ```tsx
   * import { HeartFilledIcon } from '@channel.io/bezier-icons'
   * import { Icon } from '@channel.io/bezier-react'
   *
   * <Icon source={HeartFilledIcon} {...} />
   * ```
   */
  source: React.ElementType<React.SVGProps<SVGSVGElement>>
}

export interface IconProps extends
  Omit<BezierComponentProps<'svg'>, keyof ColorProps>,
  MarginProps,
  SizeProps<IconSize>,
  ColorProps,
  IconOwnProps {}
