/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'

export default interface FormHelperTextProps extends Omit<UIComponentProps, 'as'> {
  id: string
  description?: string
  errorMessage?: string
}
