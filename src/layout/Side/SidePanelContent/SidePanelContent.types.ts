/* Internal dependencies */
import { ChildrenComponentProps } from '../../../types/ComponentProps'

export default interface SidePanelContentProps extends ChildrenComponentProps {
  onChangeSideWidth?: (width: number) => void
}
