/* External dependencies */
import { Dispatch, createContext } from 'react'
import { noop } from 'lodash-es'

/* Internal dependencies */
import { LayoutAction, LayoutState } from '../layout/Client/utils/LayoutReducer'

export const LayoutStateContext = createContext<LayoutState | undefined>(undefined)

export const LayoutDispatchContext = createContext<Dispatch<LayoutAction>>(noop)

export const ResizingContext = createContext<any>(null)
