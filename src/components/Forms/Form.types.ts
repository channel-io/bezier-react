/* Internal dependencies */
import type { DisableProps } from 'Types/ComponentProps'

export interface FormComponentProps extends DisableProps {
  hasError?: boolean
  readOnly?: boolean
}
