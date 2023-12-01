import React, {
  forwardRef,
  useMemo,
} from 'react'

import { tokens } from '@channel.io/bezier-tokens'
import { Slot } from '@radix-ui/react-slot'

import { createContext } from '~/src/utils/react'

type Tokens = typeof tokens
type GlobalTokens = Tokens['global']
type SemanticTokens = Omit<Tokens, 'global'>

interface ThemedTokenSet {
  global: GlobalTokens
  semantic: SemanticTokens[keyof SemanticTokens]
}

// TODO: Change theme name constant to import from bezier-tokens
export type ThemeName = 'light' | 'dark'

interface TokenContextValue {
  themeName: ThemeName
  tokens: ThemedTokenSet
}

const [TokenContextProvider, useTokenContext] = createContext<TokenContextValue | null>(null, 'TokenProvider')

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

interface TokenProviderProps {
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

export interface ThemeProviderProps {
  themeName: ThemeName
  children: React.ReactElement
}

export type FixedThemeProviderProps = Omit<ThemeProviderProps, 'themeName'>

/**
 * `ThemeProvider` is a wrapper component that provides theme context.
 */
export const ThemeProvider = forwardRef<HTMLElement, ThemeProviderProps>(function ThemeProvider({
  themeName,
  children,
}, forwardedRef) {
  return (
    <TokenProvider themeName={themeName}>
      <Slot
        ref={forwardedRef}
        // TODO: Change data attribute constant to import from bezier-tokens
        data-bezier-theme={themeName}
      >
        { children }
      </Slot>
    </TokenProvider>
  )
})

/**
 * `LightThemeProvider` is a wrapper component that provides light theme context.
 */
export const LightThemeProvider = forwardRef<HTMLElement, FixedThemeProviderProps>(function LightTheme({
  children,
}, forwardedRef) {
  return (
    <ThemeProvider
      ref={forwardedRef}
      themeName="light"
    >
      { children }
    </ThemeProvider>
  )
})

/**
 * `DarkThemeProvider` is a wrapper component that provides dark theme context.
 */
export const DarkThemeProvider = forwardRef<HTMLElement, FixedThemeProviderProps>(function DarkTheme({
  children,
}, forwardedRef) {
  return (
    <ThemeProvider
      ref={forwardedRef}
      themeName="dark"
    >
      { children }
    </ThemeProvider>
  )
})

/**
 * `InvertedThemeProvider` is a wrapper component that provides inverted theme context.
 */
export const InvertedThemeProvider = forwardRef<HTMLElement, FixedThemeProviderProps>(function InvertedTheme({
  children,
}, forwardedRef) {
  return (
    <ThemeProvider
      ref={forwardedRef}
      themeName={useThemeName() === 'light' ? 'dark' : 'light'}
    >
      { children }
    </ThemeProvider>
  )
})
