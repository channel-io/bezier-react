import type {
  AdditionalStylableProps,
  AdditionalTestIdProps,
  BezierComponentProps,
  SizeProps,
  VariantProps,
} from '~/src/types/ComponentProps'

/**
 * @deprecated Use string literal instread of enum.
 *
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
 * @deprecated Use string literal instread of enum.
 *
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

export type ProgressBarSizeType = 'm' | 's'

export type ProgressBarVariantType = 'green' | 'green-alt' | 'monochrome'

interface ProgressBarOptions {
  /**
   * CSS Width of total progress bar.
   * If given value is number or doesn't end with proper unit, `defaultUnit` is suffixed to given value.
   *
   * @see src/utils/styleUtils.ts
   * @default 36
   */
  width?: number | string

  /**
   * Progress value in floating point number (between 0 and 1, inclusive).
   *
   * @default 0
   */
  value?: number
}

export default interface ProgressBarProps extends
  BezierComponentProps,
  SizeProps<ProgressBarSize | ProgressBarSizeType>,
  VariantProps<ProgressBarVariant | ProgressBarVariantType>,
  AdditionalStylableProps<'active'>,
  AdditionalTestIdProps<'active'>,
  ProgressBarOptions {}
