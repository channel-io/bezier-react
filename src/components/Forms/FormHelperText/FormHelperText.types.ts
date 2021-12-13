/* Internal dependencies */
import { BezierComponentProps, ChildrenProps, IdentifierProps } from 'Types/ComponentProps'
import { FormComponentProps } from 'Components/Forms/Form.types'

export default interface FormHelperTextProps extends
  BezierComponentProps,
  ChildrenProps,
  IdentifierProps,
  FormComponentProps {}
