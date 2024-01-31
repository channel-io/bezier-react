import React, { useMemo } from 'react'

import { tokens } from '@channel.io/bezier-tokens'

import { type ThemeName } from '~/src/types/tokens'
import { createContext } from '~/src/utils/react'

import {
  type ThemedTokenSet,
  type TokenContextValue,
  type TokenProviderProps,
} from './TokenProvider.types'

const [TokenContextProvider, useTokenContext] = createContext<TokenContextValue | null>(null, 'TokenProvider')

export { useTokenContext }

const tokenSet: Record<ThemeName, ThemedTokenSet> = Object.freeze({
  light: {
    global: tokens.global,
    semantic: tokens.lightTheme,
  },
  dark: {
    global: tokens.global,
    semantic: tokens.darkTheme,
  },
})

/**
 * @private For internal use only.
 */
export function TokenProvider({
  themeName,
  children,
}: TokenProviderProps) {
  return (
    <TokenContextProvider value={useMemo(() => ({
      themeName,
      tokens: tokenSet[themeName],
    }), [themeName])}
    >
      { children }
    </TokenContextProvider>
  )
}
