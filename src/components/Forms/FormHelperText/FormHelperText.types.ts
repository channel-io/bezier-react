/* Internal dependencies */
import { IdentifierProps, ChildrenComponentProps } from 'Types/ComponentProps'

export default interface FormHelperTextProps extends ChildrenComponentProps, IdentifierProps {
  hasError?: boolean
}
