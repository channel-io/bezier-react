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
  width?: number | string
  percentage?: number
}

export default interface ProgressBarProps extends
  BezierComponentProps,
  SizeProps<ProgressBarSize>,
  VariantProps<ProgressBarVariant>,
  AdditionalStylableProps<'active'>,
  AdditionalTestIdProps<'active'>,
  ProgressBarOptions {}
