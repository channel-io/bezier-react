import type {
  BoxSizingUnit,
  ExplicitDefaulting,
} from '~/src/types/CSS'
import type {
  ActivatableProps,
  BezierComponentProps,
  ChildrenProps,
  OptionItemHostProps,
} from '~/src/types/ComponentProps'

import type { FormComponentProps } from '~/src/components/Forms/Form.types'

type SegmentedControlBaseProps = BezierComponentProps & ChildrenProps & FormComponentProps

type CSSSizingProperty = number | string | ExplicitDefaulting | BoxSizingUnit

export enum LegacySegmentedControlSize {
  XS = 'xs',
  S = 's',
  M = 'm',
  L = 'l',
}

interface LegacySegmentedControlOptions {
  width?: CSSSizingProperty

  /**
   * Size variant of this SegmentedControl.
   *
   * @default SegmentedControlSize.M
   */
  size?: LegacySegmentedControlSize
}

export default interface LegacySegmentedControlProps extends
  SegmentedControlBaseProps,
  OptionItemHostProps<number>,
  LegacySegmentedControlOptions {}

export interface LegacySegmentedControlItemProps extends
  SegmentedControlBaseProps,
  Pick<ActivatableProps, 'active'> {}
