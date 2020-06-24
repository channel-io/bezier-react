/* Internal dependencies */
import { ChildrenComponentProps } from '../../types/ComponentProps'

export default interface NavigationProps extends ChildrenComponentProps {
  minWidth?: number
  maxWidth?: number
  disableResize?: boolean
}
