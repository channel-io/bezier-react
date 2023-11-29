import React, {
  type PropsWithChildren,
  useCallback,
  useMemo,
} from 'react'

import { createContext } from '~/src/utils/react'

interface WindowContextValue {
  window: Window
  document: Document
  getRootElement: () => HTMLElement
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
  const getRootElement = useCallback(() => document.body, [document.body])

  const value = useMemo(() => ({
    window,
    document,
    getRootElement,
  }), [
    document,
    window,
    getRootElement,
  ])

  return (
    <WindowContextProvider value={value}>{ children }</WindowContextProvider>
  )
}

export default WindowProvider
