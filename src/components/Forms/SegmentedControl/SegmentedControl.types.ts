/* Internal dependencies */
import { ChildrenComponentProps } from '../../../types/ComponentProps'
import OptionItemHost from '../../../types/OptionItemHost'
import { ExplicitDefaulting, BoxSizingUnit } from '../../../types/CSS'

export default interface SegmentedControlProps extends ChildrenComponentProps, OptionItemHost<number> {
  width?: number | string | ExplicitDefaulting | BoxSizingUnit
  height?: number | string | ExplicitDefaulting | BoxSizingUnit
  disabled?: boolean
}

export interface SegmentedControlItemProps extends ChildrenComponentProps {
  active?: boolean
  disabled?: boolean
}
