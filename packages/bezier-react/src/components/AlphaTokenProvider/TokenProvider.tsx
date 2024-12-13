'use client'

import React, { useMemo } from 'react'

import { tokens } from '@channel.io/bezier-tokens/alpha'

import { type ThemeName } from '~/src/types/tokens'
import { createContext } from '~/src/utils/react'

import {
  type ThemeSpecificTokens,
  type TokenContextValue,
  type TokenProviderProps,
} from './TokenProvider.types'

const [AlphaTokenContextProvider, useAlphaTokenContext] =
  createContext<TokenContextValue | null>(null, 'AlphaTokenProvider')

export { useAlphaTokenContext }

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
    <AlphaTokenContextProvider
      value={useMemo(
        () => ({
          themeName,
          tokens: tokenSet[themeName],
        }),
        [themeName]
      )}
    >
      {children}
    </AlphaTokenContextProvider>
  )
}
