/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { SemanticNames } from '../../../../foundation/Colors/Theme'
import type {
  TypeProps,
  VariantProps,
  DisableProps,
  AdditionalStyleProps,
  SideContentProps,
  UIComponentProps,
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

export interface TextFieldProps extends
  UIComponentProps,
  DisableProps,
  TypeProps<TextFieldType>,
  VariantProps<TextFieldVariant>,
  AdditionalStyleProps<['input', 'wrapper', 'leftWrapper', 'rightWrapper']>,
  SideContentProps<TextFieldItemProps, TextFieldItemProps | TextFieldItemProps[]>,
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'readOnly' | 'disabled'> {
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
