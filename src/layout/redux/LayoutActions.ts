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
  hidable?: boolean
  disableResize?: boolean
}

type SetShowSideActionPayload = {
  showSideView?: boolean
  showSidePanel?: boolean
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
  setSideWidth: createAction(AT.SET_SIDE_WIDTH)<number>(),
  setShowSide: createAction(AT.SET_SHOW_SIDE)<SetShowSideActionPayload>(),
  openSideView: createAction(AT.OPEN_SIDE_VIEW)<void>(),
  closeSideView: createAction(AT.CLOSE_SIDE_VIEW)<void>(),
  setShowNavigation: createAction(AT.SET_SHOW_NAVIGATION)<boolean>(),
  addNavOption: createAction(AT.ADD_NAV_OPTION)<AddNavOptionActionPayload>(),
  removeNavOption: createAction(AT.REMOVE_NAV_OPTION)<RemoveNavOptionActionPayload>(),
  clearNavOption: createAction(AT.CLEAR_NAV_OPTION)<void>(),
  addColumnRef: createAction(AT.ADD_COLUMN_REF)<AddColumnRefActionPayload>(),
  removeColumnRef: createAction(AT.REMOVE_COLUMN_REF)<RemoveColumnRefActionPayload>(),
}

export default actions

export type LayoutActionTypes = ActionType<typeof actions>
