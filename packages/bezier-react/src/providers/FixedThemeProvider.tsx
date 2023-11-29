import React from 'react'

import { Slot } from '@radix-ui/react-slot'

import {
  type ThemeName,
  TokenProvider,
  useThemeName,
} from '~/src/hooks/useToken'

interface FixedThemeProviderBuilderProps {
  themeName: ThemeName
  children: React.ReactElement
}

type FixedThemeProviderProps = Omit<FixedThemeProviderBuilderProps, 'themeName'>

function FixedThemeProviderBuilder({
  themeName,
  children,
}: FixedThemeProviderBuilderProps) {
  return (
    <TokenProvider themeName={themeName}>
      { /* TODO: Change data attribute constant to import from bezier-tokens */ }
      <Slot data-bezier-theme={themeName}>
        { children }
      </Slot>
    </TokenProvider>
  )
}

/**
 * `LightTheme` is a wrapper component that provides light theme context.
 */
export function LightTheme({ children }: FixedThemeProviderProps) {
  return (
    <FixedThemeProviderBuilder themeName="light">
      { children }
    </FixedThemeProviderBuilder>
  )
}

/**
 * `DarkTheme` is a wrapper component that provides dark theme context.
 */
export function DarkTheme({ children }: FixedThemeProviderProps) {
  return (
    <FixedThemeProviderBuilder themeName="dark">
      { children }
    </FixedThemeProviderBuilder>
  )
}

/**
 * `InvertedTheme` is a wrapper component that provides inverted theme context.
 */
export function InvertedTheme({ children }: FixedThemeProviderProps) {
  return (
    <FixedThemeProviderBuilder themeName={useThemeName() === 'light' ? 'dark' : 'light'}>
      { children }
    </FixedThemeProviderBuilder>
  )
}
