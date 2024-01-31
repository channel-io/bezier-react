import type React from 'react'

import { type BezierIcon } from '@channel.io/bezier-icons'

import type {
  AdditionalColorProps,
  AlphaAdditionalStylableProps,
  AlphaBezierComponentProps,
  FormFieldProps,
  FormFieldSize,
  SideContentProps,
  SizeProps,
  VariantProps,
} from '~/src/types/props'

export enum TextFieldType {
  Search = 'search',
  Text = 'text',
  Email = 'email',
  Password = 'password',
  Tel = 'tel',
  Url = 'url',
  Hidden = 'hidden',
  Number = 'number',
}

export type SelectionRangeDirections = 'forward' | 'backward' | 'none'

export enum TextFieldVariant {
  Primary = 'primary',
  Secondary = 'secondary',
}

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
  AlphaBezierComponentProps,
  AlphaAdditionalStylableProps<['wrapper', 'leftWrapper', 'rightWrapper']>,
  FormFieldProps,
  SizeProps<FormFieldSize>,
  VariantProps<TextFieldVariant>,
  SideContentProps<TextFieldItemProps, TextFieldItemProps | TextFieldItemProps[]>,
  Omit<React.InputHTMLAttributes<HTMLInputElement>, OmittedInputHTMLAttributes>,
  TextFieldOwnProps {}
