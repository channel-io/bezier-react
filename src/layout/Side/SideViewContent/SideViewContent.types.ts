/* Internal dependencies */
import { ChildrenComponentProps } from '../../../types/ComponentProps'

export default interface SideViewContentProps extends ChildrenComponentProps {
  onChangeSideWidth?: (width: number) => void
}
