import type {
  BezierComponentProps,
  SizeProps,
  VariantProps,
} from '~/src/types/props'

export type ProgressBarSize = 's' | 'm'

export type ProgressBarVariant = 'default' | 'overlaid'

interface ProgressBarOwnProps {
  /**
   * Width of the progress bar.
   * If the value is a number, `px` is suffixed to the given value.
   * @default 144
   */
  width?: number | string

  /**
   * Progress value between 0 and 1.
   * @default 0
   */
  value?: number
}

export interface ProgressBarProps
  extends BezierComponentProps<'div'>,
    SizeProps<ProgressBarSize>,
    VariantProps<ProgressBarVariant>,
    ProgressBarOwnProps {}
