/* External dependencies */
import { omit } from 'lodash-es'

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
  columnOptions: { [key: string]: NavigationState }
  columnRefs: Map<string, {
    target: HTMLDivElement
    minWidth: number
    maxWidth: number
    initialWidth: number
  }>
}

export const defaultState: LayoutState = {
  sideWidth: null,
  showSideView: false,
  showNavigation: true,
  columnOptions: {},
  columnRefs: new Map(),
}

export enum ActionType {
  SET_SIDE_WIDTH = 'SET_SIDE_WIDTH',
  OPEN_SIDE_VIEW = 'OPEN_SIDE_VIEW',
  CLOSE_SIDE_VIEW = 'CLOSE_SIDE_VIEW',
  SET_SHOW_NAVIGATION = 'SET_SHOW_NAVIGATION',
  ADD_NAV_OPTION = 'ADD_NAV_OPTION',
  REMOVE_NAV_OPTION = 'REMOVE_NAV_OPTION',
  CLEAR_NAV_OPTION = 'CLEAR_NAV_OPTION',
  ADD_COLUMN_REF = 'ADD_COLUMN_REF',
  REMOVE_COLUMN_REF = 'REMOVE_COLUMN_REF',
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

interface AddNavOptionAction {
  type: ActionType.ADD_NAV_OPTION
  payload: { key: string, option: NavigationState }
}

interface RemoveNavOptionAction {
  type: ActionType.REMOVE_NAV_OPTION
  payload: { key: string }
}

interface ClearNavOptionAction {
  type: ActionType.CLEAR_NAV_OPTION
}

interface AddColumnRefAction {
  type: ActionType.ADD_COLUMN_REF
  payload: { key: string, ref: any }
}

interface RemoveColumnRefAction {
  type: ActionType.REMOVE_COLUMN_REF
  payload: { key: string }
}

export type LayoutAction = (
  SetSideWidthAction |
  OpenSideViewAction |
  CloseSideViewAction |
  SetShowNavigationAction |
  AddNavOptionAction |
  RemoveNavOptionAction |
  ClearNavOptionAction |
  AddColumnRefAction |
  RemoveColumnRefAction
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

    case ActionType.ADD_NAV_OPTION: {
      return {
        ...state,
        columnOptions: {
          ...state.columnOptions,
          [action.payload.key]: action.payload.option,
        },
      }
    }

    case ActionType.REMOVE_NAV_OPTION: {
      return {
        ...state,
        columnOptions: omit(state.columnOptions, action.payload.key),
      }
    }

    case ActionType.CLEAR_NAV_OPTION: {
      return {
        ...state,
        columnOptions: {},
      }
    }

    case ActionType.ADD_COLUMN_REF: {
      return {
        ...state,
        columnRefs: state.columnRefs.set(action.payload.key, action.payload.ref),
      }
    }

    case ActionType.REMOVE_COLUMN_REF: {
      const newColumnRefs = new Map(state.columnRefs)
      newColumnRefs.delete(action.payload.key)

      return {
        ...state,
        columnRefs: newColumnRefs,
      }
    }

    default:
      return state
  }
}

export default LayoutReducer
