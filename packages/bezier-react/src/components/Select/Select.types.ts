import { type BezierIcon } from '@channel.io/bezier-icons'

import type {
  AdditionalColorProps,
  AdditionalOverridableStyleProps,
  BezierComponentProps,
  ChildrenProps,
  FormFieldProps,
  FormFieldSize,
  SideContentProps,
  SizeProps,
} from '~/src/types/props'
import { type ZIndex } from '~/src/types/tokens'

import type { OverlayProps } from '~/src/components/Overlay'

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
  dropdownZIndex?: ZIndex
  dropdownPosition?: OverlayProps['position']
  dropdownKeepInContainer?: OverlayProps['keepInContainer']
  onClickTrigger?: React.MouseEventHandler
  onHideDropdown?: () => void
}

export interface SelectProps
  extends BezierComponentProps<'button'>,
    ChildrenProps,
    FormFieldProps,
    SizeProps<FormFieldSize>,
    SideContentProps<
      BezierIcon | React.ReactNode,
      BezierIcon | React.ReactNode
    >,
    AdditionalOverridableStyleProps<'dropdown'>,
    AdditionalColorProps<['icon', 'text']>,
    SelectOwnProps {}
