import type {
  BezierComponentProps,
  SizeProps,
  VariantProps,
} from '~/src/types/props'

/**
 * @deprecated Use string literal instead of enum.
 * @example
 *
 * ```tsx
 * <ProgressBar size="m" />
 * ```
 */
export enum ProgressBarSize {
  M = 'm',
  S = 's',
}

/**
 * @deprecated Use string literal instead of enum.
 * @example
 *
 * ```tsx
 * <ProgressBar variant="green" />
 * ```
 */
export enum ProgressBarVariant {
  Green = 'green',
  GreenAlt = 'green-alt',
  Monochrome = 'monochrome',
}

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

export interface ProgressBarProps extends
  BezierComponentProps<'div'>,
  SizeProps<ProgressBarSize | `${ProgressBarSize}`>,
  VariantProps<ProgressBarVariant | `${ProgressBarVariant}`>,
  ProgressBarOwnProps {}
