/* Internal dependencies */
import type { ChildrenComponentProps, OptionItemHostProps } from 'Types/ComponentProps'
import type { ExplicitDefaulting, BoxSizingUnit } from 'Types/CSS'

export default interface SegmentedControlProps extends ChildrenComponentProps, OptionItemHostProps<number> {
  width?: number | string | ExplicitDefaulting | BoxSizingUnit
  height?: number | string | ExplicitDefaulting | BoxSizingUnit
  disabled?: boolean
}

export interface SegmentedControlItemProps extends ChildrenComponentProps {
  active?: boolean
  disabled?: boolean
}
