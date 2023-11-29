import React, {
  type PropsWithChildren,
  useMemo,
} from 'react'

import {
  document,
  window,
} from '~/src/utils/dom'
import { createContext } from '~/src/utils/react'

interface WindowContextValue {
  window: Window
  document: Document
}

const [WindowContextProvider, useWindowContext] = createContext<WindowContextValue | null>(null, 'WindowProvider')

export function useWindow() {
  return useWindowContext('useWindow')
}

interface WindowProviderProps extends PropsWithChildren {
  externalWindow?: Window
}

function WindowProvider({ externalWindow, children }: WindowProviderProps) {
  const value = useMemo(() => ({
    window: externalWindow ?? window,
    document: externalWindow?.document ?? document,
  }), [externalWindow])

  return (
    <WindowContextProvider value={value}>{ children }</WindowContextProvider>
  )
}

export default WindowProvider
