/* Internal dependencies */
import { BezierComponentProps, ChildrenProps, IdentifierProps } from 'Types/ComponentProps'
import { TextProps } from 'Components/Text'
import { FormComponentProps } from 'Components/Forms/Form.types'

export default interface FormHelperTextProps extends
  BezierComponentProps,
  ChildrenProps,
  Partial<IdentifierProps>,
  FormComponentProps,
  TextProps {}
