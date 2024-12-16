'use client'

import { useMemo } from 'react'

import { tokens } from '@channel.io/bezier-tokens/alpha'

import { type ThemeName } from '~/src/types/tokens'
import { createContext } from '~/src/utils/react'

import {
  type ThemeSpecificTokens,
  type TokenContextValue,
  type TokenProviderProps,
} from './TokenProvider.types'

const [TokenContextProvider, useTokenContext] =
  // FIXME: (@ed) Remove Alpha prefix after the migration is done
  createContext<TokenContextValue | null>(null, 'AlphaTokenProvider')

export { useTokenContext as useAlphaTokenContext }

const tokenSet: Record<ThemeName, ThemeSpecificTokens> = Object.freeze({
  light: {
    global: tokens.global,
    theme: tokens.lightTheme,
  },
  dark: {
    global: tokens.global,
    theme: tokens.darkTheme,
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
