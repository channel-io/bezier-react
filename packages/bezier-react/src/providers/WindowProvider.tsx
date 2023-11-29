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

const [Provider, useContext] = createContext<WindowContextValue>({ window: {} as Window, document: {} as Document })

export const useWindow = useContext

interface WindowProviderProps extends PropsWithChildren {
  externalWindow?: Window
}

function WindowProvider({ externalWindow, children }: WindowProviderProps) {
  const value = useMemo(() => ({
    window: externalWindow ?? window,
    document: externalWindow?.document ?? document,
  }), [externalWindow])

  return (
    <Provider value={value}>{ children }</Provider>
  )
}

export default WindowProvider
