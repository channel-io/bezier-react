/* Internal dependencies */
import { UIComponentProps, ChildrenComponentProps } from '../../types/ComponentProps'
import OptionItemHost from '../../types/OptionItemHost'

export default interface SegmentedControlProps extends UIComponentProps, ChildrenComponentProps, OptionItemHost<number> {
  width?: number | string | 'auto'
  height?: number | string | 'auto'
  disabled?: boolean
}

export interface SegmentedControlItemProps extends UIComponentProps, ChildrenComponentProps {
  active?: boolean
  disabled?: boolean
}
