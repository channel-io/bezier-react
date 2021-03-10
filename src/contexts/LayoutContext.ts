/* External dependencies */
import { createContext, Dispatch } from 'react'
import { noop } from 'lodash-es'

/* Internal dependencies */
import { LayoutState } from '../layout/redux/LayoutReducer'
import { LayoutActionTypes } from '../layout/redux/LayoutActions'

export const LayoutStateContext = createContext<LayoutState | undefined>(undefined)

export const LayoutDispatchContext = createContext<Dispatch<LayoutActionTypes>>(noop)
