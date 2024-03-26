import type {
  BezierComponentProps,
  SizeProps,
  VariantProps,
} from '~/src/types/props'

export type ProgressBarSize = 'm' | 's'

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

export interface ProgressBarProps
  extends BezierComponentProps<'div'>,
    SizeProps<ProgressBarSize>,
    VariantProps<ProgressBarVariant>,
    ProgressBarOwnProps {}
