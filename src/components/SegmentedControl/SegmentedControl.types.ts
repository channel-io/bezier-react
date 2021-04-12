/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'
import OptionItemHost from '../../types/OptionItemHost'

export default interface SegmentedControlProps extends UIComponentProps, OptionItemHost<number> {
  width?: number | string | 'auto'
  height?: number | string | 'auto'
}

export interface StyledWrapperProps extends UIComponentProps {
  wrapperWidth: number | string
  wrapperHeight: number | string
}

export interface SegmentedControlItemProps extends Pick<UIComponentProps,
| 'as'
| 'disabled'
| 'children'> {
  active?: boolean
}

export interface StyledSegmentedControlItemProps extends Pick<SegmentedControlItemProps,
| 'disabled'> {
  active?: boolean
}
