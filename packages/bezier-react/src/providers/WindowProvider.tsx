import React, {
  type PropsWithChildren,
  useMemo,
} from 'react'

import { createContext } from '~/src/utils/react'

interface WindowContextValue {
  window: Window
  document: Document
  rootElement: HTMLElement
}

const [WindowContextProvider, useWindowContext] = createContext<WindowContextValue | null>(null, 'WindowProvider')

export function useWindow() {
  return useWindowContext('useWindow')
}

interface WindowProviderProps extends PropsWithChildren {
  /**
   * injected window
   * @required
   */
  window: Window

  /**
   * injected document
   * @required
   */
  document: Document
}

/**
 * A Provider that provides window and document object
 * you can use this provider to inject an external window
 */
function WindowProvider({ window, document, children }: WindowProviderProps) {
  const rootElement = document.body

  const value = useMemo(() => ({
    window,
    document,
    rootElement,
  }), [
    document,
    window,
    rootElement,
  ])

  return (
    <WindowContextProvider value={value}>{ children }</WindowContextProvider>
  )
}

export default WindowProvider
