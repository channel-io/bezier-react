/* Internal dependencies */
import { ChildrenComponentProps } from '../../types/ComponentProps'

export default interface NavigationHeaderProps extends Omit<ChildrenComponentProps, 'as'> {
  title?: string | React.ReactNode // Text or Text With Image
  titleClassName?: string
  actions?: Array<React.ReactNode>
  onClickTitle?: () => void
  onClickActions?: Array<Function>
}
