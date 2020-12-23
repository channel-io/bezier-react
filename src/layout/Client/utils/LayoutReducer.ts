/* External dependencies */
import { Dispatch, createContext } from 'react'
import { noop } from 'lodash-es'

/* Internal dependencies */
import { NavigationHandles } from '../../Navigations/Navigations'
import { NavigationState, SideState } from '../Client.types'

export interface LayoutState {
  contentMinWidth: number
  sideState: SideState
  sideWidth: number
  sideMinWidth: number
  sideMaxWidth: number
  navigationState: NavigationState // 테스트 값
  navigations: Array<{
    initialWidth: number
    maxWidth: number
    minWidth: number
  }>
  showNavigation: boolean
  navigationRef: React.MutableRefObject<NavigationHandles> | null
  withoutSearch: boolean
}

export enum ActionType {
  SET_SIDE_WIDTH,
  SET_SIDE_STATE,
  SET_SHOW_NAVIGATION,
}

interface SetSideWidthAction {
  type: ActionType.SET_SIDE_WIDTH
  payload: number
}

interface SetSideStateAction {
  type: ActionType.SET_SIDE_STATE
  payload: SideState
}

interface SetShowNavigationAction {
  type: ActionType.SET_SHOW_NAVIGATION
  payload: boolean
}

export type LayoutAction = (
  SetSideWidthAction |
  SetSideStateAction |
  SetShowNavigationAction
)

export const defaultState: LayoutState = {
  contentMinWidth: 330,
  sideState: SideState.SidePanel,
  sideWidth: 332,
  sideMinWidth: 320,
  sideMaxWidth: 1000,
  navigationState: NavigationState.Either,
  navigations: [
    {
      initialWidth: 200,
      minWidth: 150,
      maxWidth: 300,
    },
    {
      initialWidth: 250,
      minWidth: 150,
      maxWidth: 300,
    },
  ],
  showNavigation: true,
  navigationRef: null,
  withoutSearch: false,
}

export const LayoutStateContext = createContext<LayoutState>(defaultState)

export const LayoutDispatchContext = createContext<Dispatch<LayoutAction>>(noop)

function LayoutReducer(state: LayoutState, action: LayoutAction): LayoutState {
  switch (action.type) {
    case ActionType.SET_SIDE_STATE: {
      return {
        ...state,
        sideState: action.payload,
      }
    }

    case ActionType.SET_SIDE_WIDTH: {
      return {
        ...state,
        sideWidth: action.payload,
      }
    }

    case ActionType.SET_SHOW_NAVIGATION: {
      return {
        ...state,
        showNavigation: action.payload,
      }
    }

    default:
      return state
  }
}

export default LayoutReducer
