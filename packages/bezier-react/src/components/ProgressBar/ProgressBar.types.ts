/* Internal dependencies */
import type {
  BezierComponentProps,
  SizeProps,
  VariantProps,
  AdditionalStylableProps,
  AdditionalTestIdProps,
} from 'Types/ComponentProps'

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
   * Progress value in percent (between 0 and 100, inclusive).
   *
   * @default 0
   */
  percentage?: number
}

export default interface ProgressBarProps extends
  BezierComponentProps,
  SizeProps<ProgressBarSize>,
  VariantProps<ProgressBarVariant>,
  AdditionalStylableProps<'active'>,
  AdditionalTestIdProps<'active'>,
  ProgressBarOptions {}
