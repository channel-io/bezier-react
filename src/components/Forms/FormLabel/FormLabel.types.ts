/* Internal dependencies */
import { BezierComponentProps, ChildrenProps, IdentifierProps } from 'Types/ComponentProps'
import { TextProps } from 'Components/Text'

interface FormLabelOptions {
  htmlFor?: string
  help?: React.ReactNode
}

export default interface FormLabelProps extends
  BezierComponentProps,
  ChildrenProps,
  TextProps,
  Partial<IdentifierProps>,
  FormLabelOptions {}
