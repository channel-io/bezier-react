/* Internal dependencies */
import {
  type BezierComponentProps,
  type ChildrenProps,
  type IdentifierProps,
} from '~/src/types/ComponentProps'

import { type TextProps } from '~/src/components/Text'

interface BaseHelperTextOptions {
  type: 'info' | 'error'
}

export interface BaseHelperTextProps extends
  BezierComponentProps,
  ChildrenProps,
  Partial<IdentifierProps>,
  TextProps,
  BaseHelperTextOptions {}

export interface FormHelperTextProps extends Omit<BaseHelperTextProps, 'type'> {}

export interface FormErrorMessageProps extends FormHelperTextProps {}
