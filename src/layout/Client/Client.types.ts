/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'

export enum SideState {
  None = 'NONE',
  SidePanel = 'SidePanel',
  SplitView = 'SplitView',
}

export default interface ClientProps extends UIComponentProps {
  sideState: SideState
  sideWidth: number
  children: React.ReactElement
}
