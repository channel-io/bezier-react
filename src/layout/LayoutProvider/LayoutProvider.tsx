/* External dependencies */
import React, { useReducer } from 'react'

/* Internal dependencies */
import {
  LayoutDispatchContext,
  LayoutStateContext,
} from '../../contexts/LayoutContext'
import LayoutReducer, { defaultState } from '../redux/LayoutReducer'

interface LayoutProviderProps {
  children: React.ReactNode
}

function LayoutProvider({ children }: LayoutProviderProps) {
  const [layoutState, layoutDispatch] = useReducer(LayoutReducer, defaultState)

  return (
    <LayoutStateContext.Provider value={layoutState}>
      <LayoutDispatchContext.Provider value={layoutDispatch}>
        { children }
      </LayoutDispatchContext.Provider>
    </LayoutStateContext.Provider>
  )
}

export default LayoutProvider
