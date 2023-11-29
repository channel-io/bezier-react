import React, { useMemo } from 'react'

import { tokens } from '@channel.io/bezier-tokens'

import { createContext } from '~/src/utils/reactUtils'

type Tokens = typeof tokens
type GlobalTokens = Tokens['global']
type SemanticTokens = Omit<Tokens, 'global'>
type FlattedTokens = GlobalTokens & SemanticTokens[keyof SemanticTokens]

// TODO: Change theme name constant to import from bezier-tokens
export type ThemeName = 'light' | 'dark'

interface TokenContextValue {
  themeName: ThemeName
  tokens: FlattedTokens
}

const [TokenContextProvider, useTokenContext] = createContext<TokenContextValue | null>(null, 'TokenProvider')

const tokenSet: Record<ThemeName, FlattedTokens> = Object.freeze({
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
    <TokenContextProvider value={useMemo(() => ({
      themeName,
      tokens: tokenSet[themeName],
    }), [themeName])}
    >
      { children }
    </TokenContextProvider>
  )
}

/**
 * `useThemeName` is a hook that returns the current theme name.
 */
export function useThemeName() {
  return useTokenContext('useThemeName').themeName
}

/**
 * `useToken` is a hook that returns the design token for the current theme.
 */
export function useToken() {
  return useTokenContext('useToken').tokens
}
