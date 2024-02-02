import React, { useMemo } from 'react'

import { createContext } from '~/src/utils/react'

import {
  type WindowContextValue,
  type WindowProviderProps,
} from './WindowProvider.types'

const [WindowContextProvider, useWindowContext] = createContext<WindowContextValue | null>(null, 'WindowProvider')

export function useWindow() {
  return useWindowContext('useWindow')
}

/**
 * A Provider that provides window and document object
 * you can use this provider to inject an external window
 */
export function WindowProvider({ window, children }: WindowProviderProps) {
  const document = window.document
  const rootElement = document.body

  const value = useMemo(() => ({
    window,
    document,
    rootElement,
  }), [
    window,
    document,
    rootElement,
  ])

  return (
    <WindowContextProvider value={value}>{ children }</WindowContextProvider>
  )
}
