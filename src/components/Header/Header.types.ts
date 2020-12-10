/* Internal dependencies */
import { ChildrenComponentProps } from '../../types/ComponentProps'

export default interface HeaderProps extends Omit<ChildrenComponentProps, 'as'> {
  title?: React.ReactNode
  titleClassName?: string
  actions?: Array<React.ReactNode>
  onClickTitle?: () => void
  onClickActions?: Array<Function>
  /* Navigation cloneElement Props */
  isHover?: boolean
}
