/* Internal dependencies */
import { ChildrenComponentProps } from 'Types/ComponentProps'
import OptionItemHost from 'Types/OptionItemHost'
import { ExplicitDefaulting, BoxSizingUnit } from 'Types/CSS'

export default interface SegmentedControlProps extends ChildrenComponentProps, OptionItemHost<number> {
  width?: number | string | ExplicitDefaulting | BoxSizingUnit
  height?: number | string | ExplicitDefaulting | BoxSizingUnit
  disabled?: boolean
}

export interface SegmentedControlItemProps extends ChildrenComponentProps {
  active?: boolean
  disabled?: boolean
}
