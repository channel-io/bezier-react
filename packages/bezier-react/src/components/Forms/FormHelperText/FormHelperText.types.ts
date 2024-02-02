import {
  type AlphaBezierComponentProps,
  type ChildrenProps,
  type IdentifierProps,
  type MarginProps,
} from '~/src/types/props'

import { type TextProps } from '~/src/components/Text'

interface BaseHelperTextOwnProps {
  type: 'info' | 'error'
}

export interface BaseHelperTextProps extends
  AlphaBezierComponentProps,
  ChildrenProps,
  Partial<IdentifierProps>,
  Omit<TextProps, keyof MarginProps>,
  BaseHelperTextOwnProps {}

export interface FormHelperTextProps extends Omit<BaseHelperTextProps, 'type'> {}

export interface FormErrorMessageProps extends FormHelperTextProps {}
