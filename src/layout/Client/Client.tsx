/* External dependencies */
import React, { Dispatch, forwardRef, useContext, useReducer } from 'react'

/* Internal dependencies */
import { ClientWrapper } from './Client.styled'
import ClientProps, { SideState } from './Client.types'

interface LayoutContextProps {
  sideState: SideState
  sideWidth: number
}

function layoutReducer(state, action): LayoutContextProps {
  switch (action.type) {
    default:
      throw new Error(`UnExpected action type: ${action.type}`)
  }
}

const LayoutContext = React.createContext<LayoutContextProps | null>(null)
const LayoutDispatchContext = React.createContext<Dispatch<any> | null>(null)

function Client(
  {
    layoutInitialState,
    children,
  }: ClientProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const [state, dispatch] = useReducer(layoutReducer, layoutInitialState)

  return (
    <LayoutContext.Provider value={state}>
      <LayoutDispatchContext.Provider value={dispatch}>
        <ClientWrapper
          ref={forwardedRef}
        >
          { children }
        </ClientWrapper>
      </LayoutDispatchContext.Provider>
    </LayoutContext.Provider>

  )
}

export function useLayoutState() {
  const state = useContext(LayoutContext)
  if (!state) {
    throw new Error()
  }
  return state
}

export function useLayoutDispatch() {
  const dispatch = useContext(LayoutDispatchContext)
  if (!dispatch) {
    throw new Error('Cannot find LayoutDispatch')
  }
  return dispatch
}

export default forwardRef(Client)
