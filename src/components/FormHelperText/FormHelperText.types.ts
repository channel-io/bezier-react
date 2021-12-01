/* Internal dependencies */
import { IdentifierProps, ChildrenComponentProps } from '../../types/ComponentProps'

export default interface FormHelperTextProps extends ChildrenComponentProps, IdentifierProps {
  hasError?: boolean
}
