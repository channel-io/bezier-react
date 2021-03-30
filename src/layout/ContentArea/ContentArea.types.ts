/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'

export default interface ContentAreaProps extends UIComponentProps {
  onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void
}
