'use client'

import { forwardRef } from 'react'

import { Slot } from '@radix-ui/react-slot'

import {
  AlphaTokenProvider,
  useAlphaTokenContext,
} from '~/src/components/AlphaTokenProvider'
import {
  BetaTokenProvider,
  useBetaTokenContext,
} from '~/src/components/BetaTokenProvider'
import { TokenProvider, useTokenContext } from '~/src/components/TokenProvider'

import {
  type FixedThemeProviderProps,
  type ThemeProviderProps,
} from './ThemeProvider.types'

/**
 * `useThemeName` is a hook that returns the current theme name.
 */
export function useThemeName() {
  return useTokenContext('useThemeName').themeName
}

/**
 * `useTokens` is a hook that returns the design tokens of the current theme.
 */
export function useTokens() {
  return useTokenContext('useTokens').tokens
}

/**
 * `useAlphaTokens` is a hook that returns the alpha tokens of the current theme.
 * @internal
 */
export function useAlphaTokens() {
  return useAlphaTokenContext('useAlphaTokens').tokens
}

/**
 * `useBetaTokens` is a hook that returns the beta tokens of the current theme.
 * @internal
 */
export function useBetaTokens() {
  return useBetaTokenContext('useBetaTokens').tokens
}

/**
 * `ThemeProvider` is a wrapper component that provides theme context.
 *
 * Components that pass to children **must spread props and forward ref.**
 */
export const ThemeProvider = forwardRef<HTMLElement, ThemeProviderProps>(
  function ThemeProvider({ themeName, children, ...rest }, forwardedRef) {
    return (
      <TokenProvider themeName={themeName}>
        <AlphaTokenProvider themeName={themeName}>
          <BetaTokenProvider themeName={themeName}>
            <Slot
              ref={forwardedRef}
              // TODO: Change data attribute constant to import from bezier-tokens
              data-bezier-theme={themeName}
              {...rest}
            >
              {children}
            </Slot>
          </BetaTokenProvider>
        </AlphaTokenProvider>
      </TokenProvider>
    )
  }
)

/**
 * `LightThemeProvider` is a wrapper component that provides light theme context.
 *
 * Components that pass to children **must spread props and forward ref.**
 */
export const LightThemeProvider = forwardRef<
  HTMLElement,
  FixedThemeProviderProps
>(function LightTheme({ children, ...rest }, forwardedRef) {
  return (
    <ThemeProvider
      ref={forwardedRef}
      themeName="light"
      {...rest}
    >
      {children}
    </ThemeProvider>
  )
})

/**
 * `DarkThemeProvider` is a wrapper component that provides dark theme context.
 *
 * Components that pass to children **must spread props and forward ref.**
 */
export const DarkThemeProvider = forwardRef<
  HTMLElement,
  FixedThemeProviderProps
>(function DarkTheme({ children, ...rest }, forwardedRef) {
  return (
    <ThemeProvider
      ref={forwardedRef}
      themeName="dark"
      {...rest}
    >
      {children}
    </ThemeProvider>
  )
})

/**
 * `InvertedThemeProvider` is a wrapper component that provides inverted theme context.
 */
export const InvertedThemeProvider = forwardRef<
  HTMLElement,
  FixedThemeProviderProps
>(function InvertedTheme({ children, ...rest }, forwardedRef) {
  return (
    <ThemeProvider
      ref={forwardedRef}
      themeName={useThemeName() === 'light' ? 'dark' : 'light'}
      {...rest}
    >
      {children}
    </ThemeProvider>
  )
})
