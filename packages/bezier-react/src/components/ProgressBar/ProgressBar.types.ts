/* Internal dependencies */
import type {
  BezierComponentProps,
  SizeProps,
  VariantProps,
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
  percentage?: number
}

export default interface ProgressBarProps extends
  BezierComponentProps,
  SizeProps<ProgressBarSize>,
  VariantProps<ProgressBarVariant>,
  ProgressBarOptions {}
