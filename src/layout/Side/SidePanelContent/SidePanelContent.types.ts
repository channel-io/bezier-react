/* Internal dependencies */
import { UIComponentProps } from '../../../types/ComponentProps'

export default interface SidePanelContentProps extends UIComponentProps {
  onChangeSideWidth?: (width: number) => void
}
