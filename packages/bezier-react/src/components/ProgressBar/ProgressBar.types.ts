import type {
  BezierComponentProps,
  SizeProps,
  VariantProps,
} from '~/src/types/props'

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export type ProgressBarSize = 'm' | 's'

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export type ProgressBarVariant = 'green' | 'green-alt' | 'monochrome'

interface ProgressBarOwnProps {
  /**
   * CSS Width of total progress bar.
   * If given value is number, `px` is suffixed to given value.
   * @default 36
   */
  width?: number | string

  /**
   * Progress value in floating point number (between 0 and 1, inclusive).
   * @default 0
   */
  value?: number
}

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export interface ProgressBarProps
  extends BezierComponentProps<'div'>,
    SizeProps<ProgressBarSize>,
    VariantProps<ProgressBarVariant>,
    ProgressBarOwnProps {}
