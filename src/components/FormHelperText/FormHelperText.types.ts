/* Internal dependencies */
import { IdentifierProps, ChildrenComponentProps } from '../../types/ComponentProps'

export default interface FormHelperTextProps extends Omit<ChildrenComponentProps, 'as'>, IdentifierProps {
  hasError?: boolean
}
