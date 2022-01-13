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
import { FormComponentProps } from 'Components/Forms/Form.types'
import type { OverlayProps } from 'Components/Overlay'
import type { IconName } from 'Components/Icon'

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
  SideContentProps<IconName | React.ReactNode, IconName | React.ReactNode>,
  AdditionalTestIdProps<['trigger', 'triggerText', 'dropdown']>,
  AdditionalStylableProps<'dropdown'>,
  AdditionalColorProps<['icon', 'text', 'chevron']>,
  FormComponentProps,
  SelectOptions {}

export default SelectProps
