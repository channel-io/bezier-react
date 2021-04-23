/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { SemanticNames } from '../../../foundation/Colors/Theme'
import { UIComponentProps } from '../../../types/ComponentProps'
import type InjectedInterpolation from '../../../types/InjectedInterpolation'
import type { IconName } from '../../Icon'

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

export default interface TextFieldProps
  extends UIComponentProps, Omit<React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>, 'type'> {
  variant?: TextFieldVariant
  type?: TextFieldType
  hasError?: boolean
  allowClear?: boolean
  selectAllOnInit?: boolean
  selectAllOnFocus?: boolean
  leftContent?: TextFieldItemProps
  rightContent?: TextFieldItemProps | TextFieldItemProps[]
  wrapperClassName?: string
  wrapperInterpolation?: InjectedInterpolation
  leftWrapperClassName?: string
  leftWrapperInterpolation?: InjectedInterpolation
  rightWrapperClassName?: string
  rightWrapperInterpolation?: InjectedInterpolation
  onFocus?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}
