import { type BezierIcon } from '@channel.io/bezier-icons'

import type {
  FunctionalColor,
  SemanticColor,
  SourceSize,
} from '~/src/types/alpha-tokens'
import {
  type BezierComponentProps,
  type MarginProps,
  type SizeProps,
} from '~/src/types/props'

export type IconSize = SourceSize

interface IconOwnProps {
  /**
   * Controls which icon should be rendered.
   * Inject the icon component from the `@channel.io/bezier-icons` package into this prop.
   * @example
   * ```tsx
   * import { HeartFilledIcon } from '@channel.io/bezier-icons'
   * import { Icon } from '@channel.io/bezier-react'
   *
   * <Icon source={HeartFilledIcon} {...} />
   * ```
   */
  source: BezierIcon
  /**
   * Color from the design system's functional or semantic color.
   */
  color?: FunctionalColor | SemanticColor
  /**
   * Accessible label for the icon
   * @example "Close", "Menu", "More"
   */
  'aria-label'?: string
  /**
   * Whether to hide the icon from screen readers
   * @default true when `aria-label` is not provided
   */
  'aria-hidden'?: boolean
  /**
   * ARIA role
   * @default "img"
   */
  role?: string
}

export interface IconProps
  extends Omit<BezierComponentProps<'svg'>, keyof IconOwnProps>,
    MarginProps,
    SizeProps<IconSize>,
    IconOwnProps {}
