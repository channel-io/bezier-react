import type React from 'react'

import {
  type BezierComponentProps,
  type ColorProps,
  type SizeProps,
} from '~/src/types/ComponentProps'

export enum IconSize {
  XL = 44,
  L = 36,
  Normal = 24,
  S = 20,
  XS = 16,
  XXS = 12,
  XXXS = 10,
}

interface IconOptions {
  /**
   * Controls which icon should be rendered.
   * Inject the icon component from the @channel.io/bezier-icons package into this prop.
   *
   * @example
   * ```tsx
   * import { HeartFilledIcon } from '@channel.io/bezier-icons'
   * import { Icon } from '@channel.io/bezier-react'
   *
   * <Icon source={HeartFilledIcon} {...} />
   * ```
   */
  source: React.ElementType<React.SVGProps<SVGSVGElement>>

  /**
   * Top margin.
   *
   * @default 0
   */
  marginTop?: number

  /**
   * Right margin.
   *
   * @default 0
   */
  marginRight?: number

  /**
   * Bottom margin.
   *
   * @default 0
   */
  marginBottom?: number

  /**
   * Left margin.
   *
   * @default 0
   */
  marginLeft?: number
}

export interface IconProps extends
  Omit<BezierComponentProps, 'as'>,
  SizeProps<IconSize>,
  ColorProps,
  Omit<React.HTMLAttributes<SVGSVGElement>, keyof ColorProps>,
  IconOptions {}
