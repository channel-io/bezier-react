/* Internal dependencies */
import type {
  BezierComponentProps,
  ChildrenProps,
  SizeProps,
  SideContentProps,
  AdditionalStylableProps,
  AdditionalColorProps,
  AdditionalTestIdProps,
} from 'Types/ComponentProps'
import type { FormComponentProps } from 'Components/Forms'
import { FormFieldSize } from 'Components/Forms'
import type { OverlayProps } from 'Components/Overlay'
import type { BezierIcon } from 'Components/Icon'

export enum SelectSize {
  XL = FormFieldSize.XL,
  L = FormFieldSize.L,
  M = FormFieldSize.M,
  S = FormFieldSize.XS,
}

export interface SelectRef {
  handleClickTrigger(event: React.MouseEvent): void
  handleHideDropdown(): void
  getDOMNode(): Element | Text | null
}

interface SelectOptions {
  defaultFocus?: boolean
  placeholder?: string
  text?: string
  withoutChevron?: boolean
  dropdownContainer?: HTMLElement | null
  dropdownMarginX?: OverlayProps['marginX']
  dropdownMarginY?: OverlayProps['marginY']
  dropdownZIndex?: number
  dropdownPosition?: OverlayProps['position']
  onClickTrigger?: React.MouseEventHandler
  onHideDropdown?: () => void
}

interface SelectProps extends
  BezierComponentProps,
  ChildrenProps,
  SizeProps<SelectSize>,
  SideContentProps<BezierIcon | React.ReactNode, BezierIcon | React.ReactNode>,
  AdditionalTestIdProps<['trigger', 'triggerText', 'dropdown']>,
  AdditionalStylableProps<'dropdown'>,
  AdditionalColorProps<['icon', 'text']>,
  FormComponentProps,
  SelectOptions {}

export default SelectProps
