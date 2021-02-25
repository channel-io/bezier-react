/* Internal dependencies */
import LayoutSideType from '../../../constants/LayoutSideType'
import { UIComponentProps } from '../../../types/ComponentProps'

export default interface SideAreaProps extends UIComponentProps {
  sideType: LayoutSideType
  onChangeSideWidth?: (width: number) => void
}
