/* External dependencies */
import React, { createContext, Dispatch, forwardRef, useContext, useReducer } from 'react'

/* Internal dependencies */
import { ClientWrapper } from './Client.styled'
import ClientProps, { LayoutContextProps, SideState } from './Client.types'

function layoutReducer(state, action): LayoutContextProps {
  switch (action.type) {
    default:
      throw new Error(`UnExpected action type: ${action.type}`)
  }
}

export const LayoutContext = createContext<LayoutContextProps | null>(null)
export const LayoutDispatchContext = createContext<Dispatch<any> | null>(null)

function Client(
  {
    // layoutInitialState,
    children,
  }: ClientProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const initialState: LayoutContextProps = {
    sideState: SideState.SidePanel,
    sideWidth: 250,
    showNavigation: true,
    contentMinWidth: 330,
  }

  const [state, dispatch] = useReducer(layoutReducer, initialState)

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
    throw new Error('Cannot find LayoutState')
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
