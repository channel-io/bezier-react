/* Internal dependencies */
import type {
  AdditionalStylableProps,
  AdditionalTestIdProps,
  BezierComponentProps,
  SizeProps,
  VariantProps,
} from '~/src/types/ComponentProps'

export enum ProgressBarSize {
  M = 'm',
  S = 's',
}

export enum ProgressBarVariant {
  Green = 'green',
  Monochrome = 'monochrome',
}

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
  SizeProps<ProgressBarSize>,
  VariantProps<ProgressBarVariant>,
  AdditionalStylableProps<'active'>,
  AdditionalTestIdProps<'active'>,
  ProgressBarOptions {}
