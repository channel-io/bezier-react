import React, {
  type PropsWithChildren,
  useMemo,
} from 'react'

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
  window: Window
  document: Document
}

function WindowProvider({ window, document, children }: WindowProviderProps) {
  const value = useMemo(() => ({
    window,
    document,
  }), [
    document,
    window,
  ])

  return (
    <WindowContextProvider value={value}>{ children }</WindowContextProvider>
  )
}

export default WindowProvider
