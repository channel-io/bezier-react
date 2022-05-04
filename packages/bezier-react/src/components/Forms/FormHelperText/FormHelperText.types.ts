/* Internal dependencies */
import { BezierComponentProps, ChildrenProps, IdentifierProps } from 'Types/ComponentProps'
import { TextProps } from 'Components/Text'

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
