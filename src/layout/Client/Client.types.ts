/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'
import { LayoutState } from './utils/LayoutReducer'

export enum NavigationState {
  // FIXME: 네이밍 제안을 받습니다, 없거나, Main만 있거나, NavigationSub도 있거나의 세가지 상태
  Neither = 'Neither',
  Singular = 'Singular',
  Either = 'Either',
}

export enum SideState {
  None = 'None',
  SidePanel = 'SidePanel',
  SplitView = 'SplitView',
}

export default interface ClientProps extends UIComponentProps {
  layoutInitialState: LayoutState
  children: React.ReactElement
}
