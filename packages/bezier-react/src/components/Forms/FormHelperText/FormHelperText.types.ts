import {
  type AlphaBezierComponentProps,
  type ChildrenProps,
  type IdentifierProps,
} from '~/src/types/ComponentProps'

import { type TextProps } from '~/src/components/Text'

interface BaseHelperTextOptions {
  type: 'info' | 'error'
}

export interface BaseHelperTextProps extends
  AlphaBezierComponentProps,
  ChildrenProps,
  Partial<IdentifierProps>,
  Omit<TextProps, 'as'>,
  BaseHelperTextOptions {}

export interface FormHelperTextProps extends Omit<BaseHelperTextProps, 'type'> {}

export interface FormErrorMessageProps extends FormHelperTextProps {}
