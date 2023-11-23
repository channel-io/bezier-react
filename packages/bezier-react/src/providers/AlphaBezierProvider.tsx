import React, {
  useEffect,
  useMemo,
} from 'react'

import { tokens } from '@channel.io/bezier-tokens'

import { document } from '~/src//utils/domUtils'
import { createContext } from '~/src/utils/reactUtils'

// TODO: Change theme name constant to import from bezier-tokens
type ThemeName = 'light' | 'dark'

const tokenSet = {
  light: {
    ...tokens.global,
    ...tokens.lightTheme,
  },
  dark: {
    ...tokens.global,
    ...tokens.darkTheme,
  },
} as const

interface ThemeContextValue {
  themeName: ThemeName
  tokens: typeof tokenSet[ThemeName]
}

const [ThemeContextProvider] =
  createContext<ThemeContextValue | null>(null, 'ThemeContext')

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
    <ThemeContextProvider value={useMemo(() => ({
      themeName,
      tokens: tokenSet[themeName],
    }), [themeName])}
    >
      { children }
    </ThemeContextProvider>
  )
}

export default AlphaBezierProvider
