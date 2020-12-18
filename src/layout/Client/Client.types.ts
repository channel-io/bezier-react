/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'

export enum SideState {
  None = 'NONE',
  SidePanel = 'SidePanel',
  SplitView = 'SplitView',
}

export interface LayoutContextProps {
  showNavigation: boolean
  sideState: SideState
  sideWidth: number
  contentMinWidth: number
}

export default interface ClientProps extends UIComponentProps {
  layoutInitialState: LayoutContextProps
  children: React.ReactElement
}
