export interface NavigationState {
  initialWidth: number
  maxWidth: number
  minWidth: number
  hidable?: boolean
  disableResize?: boolean
}

export interface LayoutState {
  sideWidth: number | null
  showSideView: boolean
  showNavigation: boolean
}

export const defaultState: LayoutState = {
  sideWidth: null,
  showSideView: false,
  showNavigation: true,
}

export enum ActionType {
  SET_SIDE_WIDTH,
  OPEN_SIDE_VIEW,
  CLOSE_SIDE_VIEW,
  SET_SHOW_NAVIGATION,
  ADD_NAVIGATION,
  CLEAR_NAVIGATIONS,
}

interface SetSideWidthAction {
  type: ActionType.SET_SIDE_WIDTH
  payload: number
}

interface OpenSideViewAction {
  type: ActionType.OPEN_SIDE_VIEW
}

interface CloseSideViewAction {
  type: ActionType.CLOSE_SIDE_VIEW
}

interface SetShowNavigationAction {
  type: ActionType.SET_SHOW_NAVIGATION
  payload: boolean
}

export type LayoutAction = (
  SetSideWidthAction |
  OpenSideViewAction |
  CloseSideViewAction |
  SetShowNavigationAction
)

function LayoutReducer(state: LayoutState = defaultState, action: LayoutAction): LayoutState {
  switch (action.type) {
    case ActionType.SET_SIDE_WIDTH: {
      return {
        ...state,
        sideWidth: action.payload,
      }
    }

    case ActionType.OPEN_SIDE_VIEW: {
      return {
        ...state,
        showSideView: true,
      }
    }

    case ActionType.CLOSE_SIDE_VIEW: {
      return {
        ...state,
        showSideView: false,
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
