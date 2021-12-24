/* Internal dependencies */
import { BezierComponentProps, ChildrenProps, IdentifierProps } from 'Types/ComponentProps'
import { TextProps } from 'Components/Text'

export default interface FormHelperTextProps extends
  BezierComponentProps,
  ChildrenProps,
  Partial<IdentifierProps>,
  TextProps {}
