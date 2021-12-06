/* Internal dependencies */
import { ChildrenComponentProps } from 'Types/ComponentProps'

export default interface SidePanelContentProps extends ChildrenComponentProps {
  onChangeSideWidth?: (width: number) => void
}
