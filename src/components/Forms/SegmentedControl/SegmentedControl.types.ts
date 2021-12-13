/* Internal dependencies */
import type {
  BezierComponentProps,
  ChildrenProps,
  DisableProps,
  ActivatableProps,
  OptionItemHostProps,
} from 'Types/ComponentProps'
import type { ExplicitDefaulting, BoxSizingUnit } from 'Types/CSS'

type SegmentedControlBaseProps = BezierComponentProps & ChildrenProps & DisableProps

type CSSSizingProperty = number | string | ExplicitDefaulting | BoxSizingUnit

interface SegmentedControlOptions {
  width?: CSSSizingProperty
  height?: CSSSizingProperty
}

export default interface SegmentedControlProps extends
  SegmentedControlBaseProps,
  OptionItemHostProps<number>,
  SegmentedControlOptions {}

export interface SegmentedControlItemProps extends
  SegmentedControlBaseProps,
  Pick<ActivatableProps, 'active'> {}
