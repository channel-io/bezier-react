/* Internal dependencies */
import { ChildrenComponentProps } from 'Types/ComponentProps'

export default interface SideViewContentProps extends ChildrenComponentProps {
  onChangeSideWidth?: (width: number) => void
}
