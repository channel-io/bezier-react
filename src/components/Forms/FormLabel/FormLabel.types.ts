/* Internal dependencies */
import { BezierComponentProps, ChildrenProps } from 'Types/ComponentProps'
import { TextProps } from 'Components/Text'

interface FormLabelOptions {
  htmlFor?: string
  help?: React.ReactNode
}

export default interface FormLabelProps extends
  Omit<BezierComponentProps, 'as'>,
  ChildrenProps,
  TextProps,
  FormLabelOptions {}
