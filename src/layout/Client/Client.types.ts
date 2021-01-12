/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'
import { LayoutState } from './utils/LayoutReducer'

export enum SideState {
  None = 'None',
  SidePanel = 'SidePanel',
  SideView = 'SideView',
}

export default interface ClientProps extends UIComponentProps {
  layoutInitialState: LayoutState
  children: React.ReactElement
}
