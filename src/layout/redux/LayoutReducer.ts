/* External dependencies */
import { omit } from 'lodash-es'

/* Internal dependencies */
import { insertItem, removeItem } from '../../utils/arrayUtils'
import ColumnType from '../../types/ColumnType'
import AT from './LayoutActionTypes'
import { ColumnRef, ColumnState, LayoutActionTypes } from './LayoutActions'

export interface LayoutState {
  /* Header related */
  showContentHeader: boolean
  showCoverableHeader: boolean
  /* Side related */
  sideWidth: number
  showSideView: boolean
  showSidePanel: boolean
  /* Navigations related */
  showNavigation: boolean
  showingHidableNavigations: Set<string>
  /* Resizing related */
  orderedColumnKeys: Array<string>
  columnRefs: { [key: string]: ColumnRef }
  columnStates: { [key: string]: ColumnState }
}

export const defaultState: LayoutState = {
  showContentHeader: false,
  showCoverableHeader: false,
  sideWidth: 0,
  showSideView: false,
  showSidePanel: false,
  showNavigation: true,
  showingHidableNavigations: new Set(),
  orderedColumnKeys: [],
  columnRefs: {},
  columnStates: {},
}

function LayoutReducer(state: LayoutState = defaultState, action: LayoutActionTypes): LayoutState {
  switch (action.type) {
    case AT.SET_SHOW_CONTENT_HEADER: {
      return {
        ...state,
        showContentHeader: action.payload,
      }
    }

    case AT.SET_SHOW_COVERABLE_HEADER: {
      return {
        ...state,
        showCoverableHeader: action.payload,
      }
    }

    case AT.SET_SHOW_SIDE_PANEL: {
      return {
        ...state,
        showSidePanel: action.payload,
      }
    }

    case AT.SET_SHOW_SIDE_VIEW: {
      return {
        ...state,
        showSideView: action.payload,
      }
    }

    case AT.SET_SIDE_WIDTH: {
      return {
        ...state,
        sideWidth: action.payload,
      }
    }

    case AT.SET_SHOW_NAVIGATION: {
      return {
        ...state,
        showNavigation: action.payload,
      }
    }

    case AT.SET_SHOWING_HIDABLE_NAVIGATIONS: {
      return {
        ...state,
        showingHidableNavigations: action.payload,
      }
    }

    case AT.ADD_SHOWING_HIDABLE_NAVIGATION: {
      return {
        ...state,
        showingHidableNavigations: new Set(state.showingHidableNavigations.add(action.payload)),
      }
    }

    case AT.REMOVE_SHOWING_HIDABLE_NAVIGATION: {
      const tempShowingHidableNavigations = new Set(state.showingHidableNavigations)
      tempShowingHidableNavigations.delete(action.payload)

      return {
        ...state,
        showingHidableNavigations: tempShowingHidableNavigations,
      }
    }

    case AT.ADD_NAV_OPTION: {
      return {
        ...state,
        columnStates: {
          ...state.columnStates,
          [action.payload.key]: action.payload.option,
        },
      }
    }

    case AT.REMOVE_NAV_OPTION: {
      return {
        ...state,
        columnStates: omit(state.columnStates, action.payload.key),
      }
    }

    case AT.CLEAR_NAV_OPTION: {
      return {
        ...state,
        columnStates: {},
      }
    }

    case AT.ADD_COLUMN_REF: {
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

    case AT.REMOVE_COLUMN_REF: {
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
