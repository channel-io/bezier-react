/* External dependencies */
import { omit } from 'lodash-es'

/* Internal dependencies */
import { insertItem, removeItem } from '../../../utils/arrayUtils'
import ColumnType from '../../../types/ColumnType'

interface SetShowSideActionPayload {
  showSideView?: boolean
  showSidePanel?: boolean
}

type ColumnRef = {
  target: HTMLDivElement
  minWidth: number
  maxWidth: number
  initialWidth: number
}

export interface ColumnState {
  initialWidth: number
  maxWidth: number
  minWidth: number
  hidable?: boolean
  disableResize?: boolean
}

export interface LayoutState {
  /* Side related */
  sideWidth: number
  showSideView: boolean
  showSidePanel: boolean
  /* Navigations related */
  showNavigation: boolean
  /* Resizing related */
  orderedColumnKeys: Array<string>
  columnRefs: { [key: string]: ColumnRef }
  columnStates: { [key: string]: ColumnState }
}

export const defaultState: LayoutState = {
  sideWidth: 0,
  showSideView: false,
  showSidePanel: false,
  showNavigation: true,
  orderedColumnKeys: [],
  columnRefs: {},
  columnStates: {},
}

export enum ActionType {
  SET_SIDE_WIDTH = 'SET_SIDE_WIDTH',
  SET_SHOW_SIDE = 'SET_SHOW_SIDE',
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

interface SetShowSideAction {
  type: ActionType.SET_SHOW_SIDE
  payload: SetShowSideActionPayload
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
  payload: { key: string, option: ColumnState }
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
  payload: {
    key: string
    ref: ColumnRef
    columnType: ColumnType
  }
}

interface RemoveColumnRefAction {
  type: ActionType.REMOVE_COLUMN_REF
  payload: { key: string }
}

export type LayoutAction = (
  SetSideWidthAction |
  SetShowSideAction |
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

    case ActionType.SET_SHOW_SIDE: {
      return {
        ...state,
        ...action.payload,
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
        columnStates: {
          ...state.columnStates,
          [action.payload.key]: action.payload.option,
        },
      }
    }

    case ActionType.REMOVE_NAV_OPTION: {
      return {
        ...state,
        columnStates: omit(state.columnStates, action.payload.key),
      }
    }

    case ActionType.CLEAR_NAV_OPTION: {
      return {
        ...state,
        columnStates: {},
      }
    }

    case ActionType.ADD_COLUMN_REF: {
      const newColumnOrder = (() => {
        switch (action.payload.columnType) {
          case ColumnType.Nav:
            return insertItem(
              state.orderedColumnKeys,
              action.payload.key,
              // NOTE: Content 는 항상 하나이기 때문에, 뒤에서 두 번째 index 부터 순차적으로 삽입함.
              state.orderedColumnKeys.length - 3,
            )
          case ColumnType.Content:
          default:
            return insertItem(
              state.orderedColumnKeys,
              action.payload.key,
            )
        }
      })()

      return {
        ...state,
        orderedColumnKeys: newColumnOrder,
        columnRefs: {
          ...state.columnRefs,
          [action.payload.key]: action.payload.ref,
        },
      }
    }

    case ActionType.REMOVE_COLUMN_REF: {
      return {
        ...state,
        orderedColumnKeys: removeItem(
          state.orderedColumnKeys,
          state.orderedColumnKeys.indexOf(action.payload.key),
        ),
        columnRefs: omit(state.columnRefs, action.payload.key),
      }
    }

    default:
      return state
  }
}

export default LayoutReducer
