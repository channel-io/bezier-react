/* Internal dependencies */
import { BezierComponentProps, ChildrenProps, IdentifierProps } from 'Types/ComponentProps'
import { TextProps } from 'Components/Text'

interface FormLabelOptions {
  htmlFor?: string
  /** @deprecated use HelpTooltip prop with FormLabelHelp component */
  help?: React.ReactNode
  HelpTooltip?: React.ReactNode
}

export default interface FormLabelProps extends
  BezierComponentProps,
  ChildrenProps,
  TextProps,
  Partial<IdentifierProps>,
  FormLabelOptions {}
