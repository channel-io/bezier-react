/* Internal dependencies */
import { BezierComponentProps, ChildrenProps, IdentifierProps } from 'Types/ComponentProps'
import { FormComponentProps } from 'Components/Forms/Form.types'
import { TextProps } from 'Components/Text'

interface BaseHelperTextOptions {
  type: 'info' | 'error'
}

export default interface BaseHelperTextProps extends
  BezierComponentProps,
  ChildrenProps,
  Partial<IdentifierProps>,
  TextProps,
  Pick<FormComponentProps, 'hasError'>,
  BaseHelperTextOptions {}
