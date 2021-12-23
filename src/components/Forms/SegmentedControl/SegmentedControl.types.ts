/* Internal dependencies */
import type {
  BezierComponentProps,
  ChildrenProps,
  ActivatableProps,
  OptionItemHostProps,
} from 'Types/ComponentProps'
import type { ExplicitDefaulting, BoxSizingUnit } from 'Types/CSS'
import type { FormComponentProps } from 'Components/Forms/Form.types'

type SegmentedControlBaseProps = BezierComponentProps & ChildrenProps & FormComponentProps

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
