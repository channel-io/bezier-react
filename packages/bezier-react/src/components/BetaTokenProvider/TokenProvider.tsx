'use client'

import { useMemo } from 'react'

import { tokens } from '@channel.io/bezier-tokens/beta'

import { type BetaThemeName } from '~/src/types/beta-tokens'
import { createContext } from '~/src/utils/react'

import {
  type ThemeSpecificTokens,
  type TokenContextValue,
  type TokenProviderProps,
} from './TokenProvider.types'

const [TokenContextProvider, useTokenContext] =
  createContext<TokenContextValue | null>(null, 'BetaTokenProvider')

export { useTokenContext as useBetaTokenContext }

const tokenSet: Record<BetaThemeName, ThemeSpecificTokens> = Object.freeze({
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
 * @private
 */
export function TokenProvider({ themeName, children }: TokenProviderProps) {
  return (
    <TokenContextProvider
      value={useMemo(
        () => ({
          themeName,
          tokens: tokenSet[themeName],
        }),
        [themeName]
      )}
    >
      {children}
    </TokenContextProvider>
  )
}

