import type React from 'react'

import { type BezierIcon } from '@channel.io/bezier-icons'

import type {
  AdditionalColorProps,
  AdditionalOverridableStyleProps,
  BezierComponentProps,
  FormFieldProps,
  FormFieldSize,
  SideContentProps,
  SizeProps,
  VariantProps,
} from '~/src/types/props'

export type TextFieldType =
| 'search'
| 'text'
| 'email'
| 'password'
| 'tel'
| 'url'
| 'hidden'
| 'number'

export type SelectionRangeDirections = 'forward' | 'backward' | 'none'

export type TextFieldVariant =
| 'primary'
| 'secondary'

export type TextFieldItemProps = {
  icon: BezierIcon
  onClick?: React.MouseEventHandler
} & AdditionalColorProps<'icon'> | React.ReactElement

export interface TextFieldRef {
  focus(options?: FocusOptions): void
  blur(): void
  setSelectionRange(start?: number, end?: number, direction?: SelectionRangeDirections): void
  getSelectionRange(): [number, number]
  selectAll(): void
  unselect(): void
  getBoundingClientRect(): ClientRect | DOMRect
  getDOMNode(): HTMLInputElement | null
}

type ChangeEventHandler = React.ChangeEventHandler<HTMLInputElement>
type KeyboardEventHandler = React.KeyboardEventHandler<HTMLInputElement>

interface TextFieldOwnProps {
  type?: TextFieldType
  allowClear?: boolean
  selectAllOnInit?: boolean
  selectAllOnFocus?: boolean
  withoutLeftContentWrapper?: boolean
  withoutRightContentWrapper?: boolean
  onFocus?: ChangeEventHandler
  onChange?: ChangeEventHandler
  onKeyDown?: KeyboardEventHandler
  onKeyUp?: KeyboardEventHandler
}

type OmittedInputHTMLAttributes = 'type' | 'size' | 'readOnly' | 'disabled' | 'onFocus'

export interface TextFieldProps extends
  Omit<BezierComponentProps<'input'>, OmittedInputHTMLAttributes>,
  AdditionalOverridableStyleProps<['wrapper', 'leftWrapper', 'rightWrapper']>,
  FormFieldProps,
  SizeProps<FormFieldSize>,
  VariantProps<TextFieldVariant>,
  SideContentProps<TextFieldItemProps, TextFieldItemProps | TextFieldItemProps[]>,
  TextFieldOwnProps {}
