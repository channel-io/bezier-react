/* External dependencies */
import { ActionType, createAction } from 'typesafe-actions'

/* Internal dependencies */
import ColumnType from '../../types/ColumnType'
import AT from './LayoutActionTypes'

export type ColumnRef = {
  target: HTMLDivElement
  minWidth: number
  maxWidth: number
  initialWidth: number
}

export interface ColumnState {
  initialWidth: number
  maxWidth: number
  minWidth: number
  disableResize?: boolean
  hidable?: boolean
  onChangeWidth?: (width: number) => void
}

type AddNavOptionActionPayload = {
  key: string
  option: ColumnState
}

type RemoveNavOptionActionPayload = {
  key: string
}

type AddColumnRefActionPayload = {
  key: string
  ref: ColumnRef
  columnType: ColumnType
}

type RemoveColumnRefActionPayload = {
  key: string
}

const actions = {
  setShowContentHeader: createAction(AT.SET_SHOW_CONTENT_HEADER)<boolean>(),
  setShowCoverableHeader: createAction(AT.SET_SHOW_COVERABLE_HEADER)<boolean>(),
  setShowSidePanel: createAction(AT.SET_SHOW_SIDE_PANEL)<boolean>(),
  setShowSideView: createAction(AT.SET_SHOW_SIDE_VIEW)<boolean>(),
  setShowNavigation: createAction(AT.SET_SHOW_NAVIGATION)<boolean>(),
  setShowingHidableNavigations: createAction(AT.SET_SHOWING_HIDABLE_NAVIGATIONS)<Set<string>>(),
  addShowingHidableNavigation: createAction(AT.ADD_SHOWING_HIDABLE_NAVIGATION)<string>(),
  removeShowingHidableNavigation: createAction(AT.REMOVE_SHOWING_HIDABLE_NAVIGATION)<string>(),
  setSideWidth: createAction(AT.SET_SIDE_WIDTH)<number>(),
  addNavOption: createAction(AT.ADD_NAV_OPTION)<AddNavOptionActionPayload>(),
  removeNavOption: createAction(AT.REMOVE_NAV_OPTION)<RemoveNavOptionActionPayload>(),
  clearNavOption: createAction(AT.CLEAR_NAV_OPTION)<void>(),
  addColumnRef: createAction(AT.ADD_COLUMN_REF)<AddColumnRefActionPayload>(),
  removeColumnRef: createAction(AT.REMOVE_COLUMN_REF)<RemoveColumnRefActionPayload>(),
}

export default actions

export type LayoutActionTypes = ActionType<typeof actions>
