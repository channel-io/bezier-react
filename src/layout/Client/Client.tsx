/* External dependencies */
import React, {
  forwardRef,
  useContext,
  useReducer,
} from 'react'

/* Internal dependencies */
import { ClientWrapper } from './Client.styled'
import ClientProps from './Client.types'
import LayoutReducer, { LayoutStateContext, LayoutDispatchContext } from './utils/LayoutReducer'

export const CLIENT_TEST_ID = 'ch-design-system-client'

function Client(
  {
    style,
    className,
    testId = CLIENT_TEST_ID,
    layoutInitialState,
    children,
    ...otherProps
  }: ClientProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const [state, dispatch] = useReducer(LayoutReducer, layoutInitialState)

  return (
    <LayoutStateContext.Provider value={state}>
      <LayoutDispatchContext.Provider value={dispatch}>
        <ClientWrapper
          ref={forwardedRef}
          style={style}
          className={className}
          testId={testId}
          {...otherProps}
        >
          { children }
        </ClientWrapper>
      </LayoutDispatchContext.Provider>
    </LayoutStateContext.Provider>

  )
}

export function useLayoutState() {
  const state = useContext(LayoutStateContext)
  if (state === undefined) {
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
