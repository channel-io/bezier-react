/* Internal dependencies */
import { SemanticNames } from '../../../foundation'
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
  handleClickTrigger(event: React.MouseEvent): void
  handleHideDropdown(): void
  getDOMNode(): Element | Text | null
}

interface SelectProps extends ChildrenComponentProps {
  triggerTestId?: string
  triggerTextTestId?: string
  dropdownTestId?: string
  size?: SelectSize
  disabled?: boolean
  defaultFocus?: boolean
  placeholder?: string
  iconComponent?: IconName | React.ReactNode
  iconColor?: SemanticNames
  text?: string
  textColor?: SemanticNames
  withoutChevron?: boolean
  chevronColor?: SemanticNames
  dropdownContainer?: HTMLElement | null
  dropdownMarginX?: OverlayProps['marginX']
  dropdownMarginY?: OverlayProps['marginY']
  dropdownZIndex?: number
  dropdownPosition?: OverlayProps['position']
  dropdownStyle?: OverlayProps['containerStyle']
  dropdownInterpolation?: InjectedInterpolation
  hasError?: boolean
  onClickTrigger?: (event: React.MouseEvent) => void
  onHideDropdown?: () => void
}

export default SelectProps
