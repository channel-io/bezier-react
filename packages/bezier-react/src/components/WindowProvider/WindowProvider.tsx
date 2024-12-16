'use client'

import { useMemo } from 'react'

import { createContext } from '~/src/utils/react'

import {
  type WindowContextValue,
  type WindowProviderProps,
} from './WindowProvider.types'

const [WindowContextProvider, useWindowContext] =
  createContext<WindowContextValue | null>(null, 'WindowProvider')

/**
 * Custom hook to access the window context.
 */
export function useWindow() {
  return useWindowContext('useWindow')
}

/**
 * Custom hook to access the root element from the window context.
 */
export function useRootElement() {
  return useWindowContext('useRootElement').rootElement
}

/**
 * Component provider for the window context.
 * This component wraps its children in the WindowContextProvider, supplying
 * the window object and its root element to the context for consumption
 */
export function WindowProvider({ window, children }: WindowProviderProps) {
  return (
    <WindowContextProvider
      value={useMemo(
        () => ({
          window,
          document: window.document,
          rootElement: window.document.body,
        }),
        [window]
      )}
    >
      {children}
    </WindowContextProvider>
  )
}
