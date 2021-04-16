/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'
import OptionItemHost from '../../types/OptionItemHost'

export default interface SegmentedControlProps extends UIComponentProps, OptionItemHost<number> {
  width?: number | string | 'auto'
  height?: number | string | 'auto'
}

export interface SegmentedControlItemProps extends Pick<UIComponentProps,
| 'as'
| 'disabled'
| 'children'> {
  active?: boolean
}
