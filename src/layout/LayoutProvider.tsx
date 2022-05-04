/* External dependencies */
import React, { useReducer } from 'react'

/* Internal dependencies */
import {
  LayoutDispatchContext,
  LayoutStateContext,
} from './LayoutContext'
import LayoutReducer, { defaultState, LayoutState } from './redux/LayoutReducer'

interface LayoutProviderProps {
  children: React.ReactNode
  initialState?: Partial<LayoutState>
}

function LayoutProvider({ children, initialState }: LayoutProviderProps) {
  const [layoutState, layoutDispatch] = useReducer(LayoutReducer, { ...defaultState, ...initialState })

  return (
    <LayoutStateContext.Provider value={layoutState}>
      <LayoutDispatchContext.Provider value={layoutDispatch}>
        { children }
      </LayoutDispatchContext.Provider>
    </LayoutStateContext.Provider>
  )
}

export default LayoutProvider
