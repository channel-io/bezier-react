/* Internal dependencies */
import { ChildrenComponentProps } from '../../types/ComponentProps'

export default interface NavigationProps extends Omit<ChildrenComponentProps, 'as'> {
  minWidth?: number
  maxWidth?: number
  disableResize?: boolean
  onChangeWidth?: (width: number) => void
}
