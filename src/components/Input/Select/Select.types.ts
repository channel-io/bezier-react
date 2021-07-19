/* Internal dependencies */
import { ChildrenComponentProps } from '../../../types/ComponentProps'
import InjectedInterpolation from '../../../types/InjectedInterpolation'
import { OverlayProps } from '../../Overlay'
import { IconName } from '../../Icon'

export enum SelectSize {
  XL = 'XL',
  L = 'L',
  M = 'M',
  S = 'S',
}

export interface SelectRef {
  handleClickTrigger(): void
  handleHideDropdown(): void
  getDOMNode(): Element | Text | null
}

interface SelectProps extends ChildrenComponentProps {
  triggerTestId?: string
  dropdownTestId?: string
  size?: SelectSize
  disabled?: boolean
  defaultFocus?: boolean
  placeholder?: string
  iconComponent?: IconName | React.ReactNode
  text?: string
  withoutChevron?: boolean
  dropdownContainer?: HTMLElement | null
  dropdownPosition?: OverlayProps['position']
  dropdownInterpolation?: InjectedInterpolation
  hasError?: boolean
}

export default SelectProps
