'use client'

import { useMemo } from 'react'

import { tokens } from '@channel.io/bezier-tokens'

import { type ThemeName } from '~/src/types/tokens'
import { createContext } from '~/src/utils/react'

import {
  type ThemeSpecificTokens,
  type TokenContextValue,
  type TokenProviderProps,
} from './TokenProvider.types'

const [TokenContextProvider, useTokenContext] =
  createContext<TokenContextValue | null>(null, 'TokenProvider')

export { useTokenContext }

const tokenSet: Record<ThemeName, ThemeSpecificTokens> = Object.freeze({
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
