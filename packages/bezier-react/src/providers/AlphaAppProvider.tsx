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
  rootElement?: HTMLElement
}

function AlphaAppProvider({
  children,
  themeName = 'light',
  features = [],
  rootElement = document.documentElement,
}: AlphaAppProviderProps) {
  useEffect(function updateThemeDataAttribute() {
    // TODO: Change data attribute constant to import from bezier-tokens
    rootElement.setAttribute('data-bezier-theme', themeName)
    return function cleanup() {
      rootElement.removeAttribute('data-bezier-theme')
    }
  }, [
    rootElement,
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
