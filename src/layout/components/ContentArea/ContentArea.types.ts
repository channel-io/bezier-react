/* Internal dependencies */
import { ChildrenComponentProps } from 'Types/ComponentProps'

export default interface ContentAreaProps extends ChildrenComponentProps {
  onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void
}
