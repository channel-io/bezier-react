/* Internal dependencies */
import { ChildrenComponentProps } from '../../types/ComponentProps'

export default interface FormHelperTextProps extends Omit<ChildrenComponentProps, 'as'> {
  id: string
  errorMessage?: React.ReactNode
}
