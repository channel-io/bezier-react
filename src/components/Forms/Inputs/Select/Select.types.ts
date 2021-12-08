/* Internal dependencies */
import type { SemanticNames } from 'Foundation'
import type {
  BezierComponentProps,
  ChildrenProps,
  SizeProps,
  AdditionalStylableProps,
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

interface SelelctOptions {
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
  onClickTrigger?: React.MouseEventHandler
  onHideDropdown?: () => void
}

interface SelectProps extends
  BezierComponentProps,
  ChildrenProps,
  SizeProps<SelectSize>,
  AdditionalTestIdProps<['trigger', 'triggerText', 'dropdown']>,
  AdditionalStylableProps<'dropdown'>,
  FormComponentProps,
  SelelctOptions {}

export default SelectProps
