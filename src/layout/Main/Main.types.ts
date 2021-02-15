/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'

export default interface MainProps extends UIComponentProps {
  ContentHeaderComponent: React.ComponentType
  CoverableHeaderComponent: React.ComponentType
  SidePanelComponent: React.ComponentType
  SideViewComponent: React.ComponentType
}
