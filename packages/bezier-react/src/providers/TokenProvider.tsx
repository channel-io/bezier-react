import React, { useMemo } from 'react'

import { tokens } from '@channel.io/bezier-tokens'

import {
  type GlobalToken,
  type SemanticToken,
  type ThemeName,
} from '~/src/types/Token'
import { createContext } from '~/src/utils/react'

export interface ThemedTokenSet {
  global: GlobalToken
  semantic: SemanticToken
}

interface TokenContextValue {
  themeName: ThemeName
  tokens: ThemedTokenSet
}

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

export interface TokenProviderProps {
  themeName: ThemeName
  children: React.ReactNode
}

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
