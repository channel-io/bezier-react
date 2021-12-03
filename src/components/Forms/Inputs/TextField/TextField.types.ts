/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { SemanticNames } from '../../../../foundation/Colors/Theme'
import type {
  VariantProps,
  DisableProps,
  AdditionalStyleProps,
  SideContentComponentProps,
} from '../../../../types/ComponentProps'
import type { IconName } from '../../../Icon'

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
  XL = 56,
  L = 44,
  M = 36,
  XS = 28,
}

export type SelectionRangeDirections = 'forward' | 'backward' | 'none'

export enum TextFieldVariant {
  Primary,
  Secondary,
}

export type TextFieldItemProps = {
  icon: IconName
  iconColor?: SemanticNames
  onClick?: (event: React.MouseEvent) => void
} | React.ReactElement

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

interface TextFieldOptions {
  type?: TextFieldType
  hasError?: boolean
  readOnly?: boolean
  allowClear?: boolean
  selectAllOnInit?: boolean
  selectAllOnFocus?: boolean
  withoutLeftContentWrapper?: boolean
  withoutRightContentWrapper?: boolean
  onFocus?: React.ChangeEventHandler<HTMLInputElement>
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>
}

type OmittedInputHTMLAttributes = 'type' | 'readOnly' | 'disabled' | 'onFocus'

export interface TextFieldProps extends
  DisableProps,
  VariantProps<TextFieldVariant>,
  AdditionalStyleProps<['input', 'wrapper', 'leftWrapper', 'rightWrapper']>,
  Omit<SideContentComponentProps<never, TextFieldItemProps, TextFieldItemProps | TextFieldItemProps[]>, 'content'>,
  Omit<React.InputHTMLAttributes<HTMLInputElement>, OmittedInputHTMLAttributes>,
  TextFieldOptions {}
