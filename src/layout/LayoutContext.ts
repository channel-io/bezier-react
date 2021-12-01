/* External dependencies */
import { createContext, Dispatch } from 'react'
import { noop } from 'lodash-es'

/* Internal dependencies */
import { LayoutState } from './redux/LayoutReducer'
import { LayoutActionTypes } from './redux/LayoutActions'

export const LayoutStateContext = createContext<LayoutState | undefined>(undefined)

export const LayoutDispatchContext = createContext<Dispatch<LayoutActionTypes>>(noop)
