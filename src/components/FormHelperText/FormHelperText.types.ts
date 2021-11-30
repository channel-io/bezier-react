/* Internal dependencies */
import { IdentifierProps, ChildrenComponentProps } from '../../types/ComponentProps'

export default interface FormHelperTextProps extends Omit<ChildrenComponentProps, 'as'>, Required<IdentifierProps> {
  errorMessage?: React.ReactNode
}
