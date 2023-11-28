import React, { useEffect } from 'react'

import { tokens } from '@channel.io/bezier-tokens'

import { TokenContextProvider } from '~/src/hooks/useToken'
import { document } from '~/src/utils/domUtils'

// TODO: Change theme name constant to import from bezier-tokens
export type ThemeName = 'light' | 'dark'

const tokenSet = Object.freeze({
  light: {
    ...tokens.global,
    ...tokens.lightTheme,
  },
  dark: {
    ...tokens.global,
    ...tokens.darkTheme,
  },
} as const)

interface AlphaBezierProviderProps {
  themeName?: ThemeName
  children: React.ReactNode
}

function AlphaBezierProvider({
  themeName = 'light',
  children,
}: AlphaBezierProviderProps) {
  useEffect(function updateThemeDataAttribute() {
    const root = document.documentElement
    // TODO: Change data attribute constant to import from bezier-tokens
    root.setAttribute('data-bezier-theme', themeName)
    return function cleanup() {
      root.removeAttribute('data-bezier-theme')
    }
  }, [themeName])

  return (
    <TokenContextProvider value={tokenSet[themeName]}>
      { children }
    </TokenContextProvider>
  )
}

export default AlphaBezierProvider
