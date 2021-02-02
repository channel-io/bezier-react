/* External dependencies */
import React, {
  forwardRef,
  useReducer,
} from 'react'

/* Internal dependencies */
import { LayoutDispatchContext, LayoutStateContext } from '../../contexts/LayoutContext'
import { ClientWrapper } from './Client.styled'
import ClientProps from './Client.types'
import LayoutReducer, { defaultState } from './utils/LayoutReducer'

export const CLIENT_TEST_ID = 'ch-design-system-client'

function Client(
  {
    style,
    className,
    testId = CLIENT_TEST_ID,
    children,
    ...otherProps
  }: ClientProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const [state, dispatch] = useReducer(LayoutReducer, defaultState)

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

export default forwardRef(Client)
