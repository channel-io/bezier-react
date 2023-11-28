import React from 'react'

import { tokens } from '@channel.io/bezier-tokens'

import { createContext } from '~/src/utils/reactUtils'

type Tokens = typeof tokens
type GlobalTokens = Tokens['global']
type SemanticTokens = Omit<Tokens, 'global'>

export type TokenContextValue = GlobalTokens & SemanticTokens[keyof SemanticTokens]

const [TokenContextProvider, useTokenContext] = createContext<TokenContextValue | null>(null, 'TokenProvider')

// TODO: Change theme name constant to import from bezier-tokens
export type ThemeName = 'light' | 'dark'

const tokenSet: Record<ThemeName, TokenContextValue> = Object.freeze({
  light: {
    ...tokens.global,
    ...tokens.lightTheme,
  },
  dark: {
    ...tokens.global,
    ...tokens.darkTheme,
  },
})

/**
 * For internal use only.
 * @private
 */
export interface TokenProviderProps {
  themeName: ThemeName
  children: React.ReactNode
}

/**
 * For internal use only.
 * @private
 */
export function TokenProvider({
  themeName,
  children,
}: TokenProviderProps) {
  return (
    <TokenContextProvider value={tokenSet[themeName]}>
      { children }
    </TokenContextProvider>
  )
}

function useToken() {
  return useTokenContext('useToken')
}

export default useToken
