/* Internal dependencies */
import { UIComponentProps } from '../../../types/ComponentProps'

export default interface SideViewContentProps extends UIComponentProps {
  onChangeSideWidth?: (width: number) => void
}
