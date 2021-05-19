/* Internal dependencies */
import { ChildrenComponentProps } from '../../../types/ComponentProps'
import { OverlayProps } from '../../Overlay'
import { IconName } from '../../Icon'

export enum SelectSize {
  XL = 'XL',
  L = 'L',
  M = 'M',
  XS = 'XS',
}

interface SelectProps extends ChildrenComponentProps {
  triggerTestId?: string
  dropdownTestId?: string
  disabled?: boolean
  defaultFocus?: boolean
  placeholder?: string
  iconComponent?: IconName | React.ReactNode
  text?: string
  withoutChevron?: boolean
  dropdownContainer?: HTMLElement | null
  dropdownPosition?: OverlayProps['position']
  hasError?: boolean
}

export default SelectProps
