/* Internal dependencies */
import { BezierComponentProps, ChildrenProps, IdentifierProps } from '~/src/types/ComponentProps'
import { TextProps } from '~/src/components/Text'

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
