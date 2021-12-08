/* Internal dependencies */
import { ChildrenComponentProps } from 'Types/ComponentProps'
import LayoutSideType from 'Layout/types/LayoutSideType'

export default interface SideAreaProps extends ChildrenComponentProps {
  sideType: LayoutSideType
  onChangeSideWidth?: (width: number) => void
}
