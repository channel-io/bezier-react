/* Internal dependencies */
import LayoutSideType from '../../../types/LayoutSideType'
import { ChildrenComponentProps } from '../../../../types/ComponentProps'

export default interface SideAreaProps extends ChildrenComponentProps {
  sideType: LayoutSideType
  onChangeSideWidth?: (width: number) => void
}
