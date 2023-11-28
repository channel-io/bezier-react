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

export function LightTheme({ children }: FixedThemeProviderProps) {
  return (
    <FixedThemeProviderBuilder themeName="light">
      { children }
    </FixedThemeProviderBuilder>
  )
}

export function DarkTheme({ children }: FixedThemeProviderProps) {
  return (
    <FixedThemeProviderBuilder themeName="dark">
      { children }
    </FixedThemeProviderBuilder>
  )
}

export function InvertedTheme({ children }: FixedThemeProviderProps) {
  return (
    <FixedThemeProviderBuilder themeName={useThemeName() === 'light' ? 'dark' : 'light'}>
      { children }
    </FixedThemeProviderBuilder>
  )
}
