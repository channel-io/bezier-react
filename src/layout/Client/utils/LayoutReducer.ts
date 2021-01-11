/* Internal dependencies */
import { insertItem } from '../../../utils/utils'
import { NavigationHandles } from '../../Navigations/Navigations'
import { SideState } from '../Client.types'

export interface NavigationState {
  initialWidth: number
  maxWidth: number
  minWidth: number
  hidable: boolean
}

export interface LayoutState {
  sideState: SideState
  sideWidth: number | null
  navigations: NavigationState[]
  showNavigation: boolean
  navigationRef: React.MutableRefObject<NavigationHandles> | null
  hasOveraidHeader: boolean
}

export const defaultState = {
  sideState: SideState.None,
  sideWidth: null,
  navigations: [],
  showNavigation: true,
  navigationRef: null,
  hasOveraidHeader: false,
}

export enum ActionType {
  SET_SIDE_WIDTH,
  SET_SIDE_STATE,
  SET_SHOW_NAVIGATION,
  ADD_NAVIGATION,
  CLEAR_NAVIGATIONS,
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

interface AddNavigationPropsAction {
  type: ActionType.ADD_NAVIGATION
  payload: { index: number, options: NavigationState }
}

interface ClearNavigationsAction {
  type: ActionType.CLEAR_NAVIGATIONS
}

export type LayoutAction = (
  SetSideWidthAction |
  SetSideStateAction |
  SetShowNavigationAction |
  AddNavigationPropsAction |
  ClearNavigationsAction
)

function LayoutReducer(state: LayoutState = defaultState, action: LayoutAction): LayoutState {
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

    case ActionType.ADD_NAVIGATION: {
      return {
        ...state,
        navigations: insertItem(state.navigations, action.payload.index, action.payload.options),
      }
    }

    case ActionType.CLEAR_NAVIGATIONS: {
      return {
        ...state,
        navigations: [],
      }
    }

    default:
      return state
  }
}

export default LayoutReducer
