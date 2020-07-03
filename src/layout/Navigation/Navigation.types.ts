/* Internal dependencies */
import { ChildrenComponentProps } from '../../types/ComponentProps'

export default interface NavigationProps extends Omit<ChildrenComponentProps, 'as'> {
  title?: string
  fixedTitle?: boolean
  minWidth?: number
  maxWidth?: number
  disableResize?: boolean
  onChangeWidth?: (width: number) => void
}
