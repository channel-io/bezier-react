/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'
import { NavigationHandles } from '../Navigations/Navigations'

export enum SideState {
  None = 'NONE',
  SidePanel = 'SidePanel',
  SplitView = 'SplitView',
}

export interface LayoutContextProps {
  showNavigation: boolean
  sideState: SideState
  sideWidth: number
  sideMinWidth: number
  sideMaxWidth: number
  contentMinWidth: number
  navigationRef: React.MutableRefObject<NavigationHandles> | null
}

export default interface ClientProps extends UIComponentProps {
  layoutInitialState: LayoutContextProps
  children: React.ReactElement
}
