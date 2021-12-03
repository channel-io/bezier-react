/* Internal dependencies */
import { DisableProps } from '../../types/ComponentProps'

export interface FormComponentProps extends DisableProps {
  hasError?: boolean
  readOnly?: boolean
}
