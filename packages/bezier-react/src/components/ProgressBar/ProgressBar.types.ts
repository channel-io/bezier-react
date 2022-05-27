/* Internal dependencies */
import type {
  BezierComponentProps,
  SizeProps,
  VariantProps,
} from 'Types/ComponentProps'
import ProgressBarSize from './ProgressBarSize'
import ProgressBarVariant from './ProgressBarVariant'

export default interface ProgressBarProps extends
  BezierComponentProps,
  SizeProps<ProgressBarSize>,
  VariantProps<ProgressBarVariant> {}
