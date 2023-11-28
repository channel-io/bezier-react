import React, { useEffect } from 'react'

import {
  type Feature,
  FeatureProvider,
} from '~/src/features'
import {
  type ThemeName,
  TokenProvider,
} from '~/src/hooks/useToken'
import { document } from '~/src/utils/domUtils'

import { TooltipProvider } from '~/src/components/Tooltip'

interface AlphaAppProviderProps {
  children: React.ReactNode
  themeName?: ThemeName
  features?: Feature[]
  root?: HTMLElement
}

function AlphaAppProvider({
  children,
  themeName = 'light',
  features = [],
  root = document.documentElement,
}: AlphaAppProviderProps) {
  useEffect(function updateThemeDataAttribute() {
    // TODO: Change data attribute constant to import from bezier-tokens
    root.setAttribute('data-bezier-theme', themeName)
    return function cleanup() {
      root.removeAttribute('data-bezier-theme')
    }
  }, [
    root,
    themeName,
  ])

  return (
    <TokenProvider themeName={themeName}>
      <FeatureProvider features={features}>
        <TooltipProvider>
          { children }
        </TooltipProvider>
      </FeatureProvider>
    </TokenProvider>
  )
}

export default AlphaAppProvider
