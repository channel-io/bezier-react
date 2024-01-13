import { type BezierIcon } from '@channel.io/bezier-icons'

import type {
  AdditionalColorProps,
  AdditionalTestIdProps,
  AlphaAdditionalStylableProps,
  AlphaBezierComponentProps,
  ChildrenProps,
  SideContentProps,
  SizeProps,
} from '~/src/types/ComponentProps'

import type { FormComponentProps } from '~/src/components/Forms'
import { FormFieldSize } from '~/src/components/Forms'
import type { OverlayProps } from '~/src/components/Overlay'

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

interface SelectOwnProps {
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

export interface SelectProps extends
  AlphaBezierComponentProps,
  ChildrenProps,
  SizeProps<SelectSize>,
  SideContentProps<BezierIcon | React.ReactNode, BezierIcon | React.ReactNode>,
  AdditionalTestIdProps<['trigger', 'triggerText', 'dropdown']>,
  AlphaAdditionalStylableProps<'dropdown'>,
  AdditionalColorProps<['icon', 'text']>,
  FormComponentProps,
  SelectOwnProps {}
