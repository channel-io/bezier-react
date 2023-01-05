/* External dependencies */
import React from 'react'

/* Internal dependencies */
import type {
  BezierComponentProps,
  VariantProps,
  SizeProps,
  SideContentProps,
  AdditionalStylableProps,
} from 'Types/ComponentProps'
import type { FormComponentProps } from 'Components/Forms'
import { FormFieldSize } from 'Components/Forms'

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

export enum TextFieldSize {
  XL = FormFieldSize.XL,
  L = FormFieldSize.L,
  M = FormFieldSize.M,
  XS = FormFieldSize.XS,
}

export type SelectionRangeDirections = 'forward' | 'backward' | 'none'

export enum TextFieldVariant {
  Primary,
  Secondary,
}

export type TextFieldItemProps = React.ReactElement

export interface TextFieldRef {
  focus(options?: FocusOptions): void
  blur(): void
  setSelectionRange(start?: number, end?: number, direction?: SelectionRangeDirections): void
  getSelectionRange(): [number, number]
  selectAll(): void
  unselect(): void
  getBoundingClientRect(): ClientRect | DOMRect
  getDOMNode(): Element | Text | null
}

type ChangeEventHandler = React.ChangeEventHandler<HTMLInputElement>
type KeyboardEventHandler = React.KeyboardEventHandler<HTMLInputElement>

interface TextFieldOptions {
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
  FormComponentProps,
  BezierComponentProps,
  SizeProps<TextFieldSize>,
  VariantProps<TextFieldVariant>,
  SideContentProps<TextFieldItemProps, TextFieldItemProps | TextFieldItemProps[]>,
  AdditionalStylableProps<['input', 'wrapper', 'leftWrapper', 'rightWrapper']>,
  Omit<React.InputHTMLAttributes<HTMLInputElement>, OmittedInputHTMLAttributes>,
  TextFieldOptions {}
