import React, { useEffect } from 'react'

import {
  type Feature,
  FeatureProvider,
} from '~/src/features'
import { window as defaultWindow } from '~/src/utils/dom'

import { TooltipProvider } from '~/src/components/Tooltip'

import {
  type ThemeName,
  TokenProvider,
} from './ThemeProvider'
import { WindowProvider } from './WindowProvider'

export interface AlphaAppProviderProps {
  children: React.ReactNode
  /**
   * Name of the theme to use for the app.
   * @default 'light'
   */
  themeName?: ThemeName
  /**
   * List of features to enable for the app.
   * @default []
   */
  features?: Feature[]
  /**
   * Window object to use for the app.
   * @default window
   */
  window?: Window
}

/**
 * `AlphaAppProvider` is a required wrapper component that provides context for the app.
 *
 * @example
 *
 * ```tsx
 * import React from 'react'
 * import { createRoot } from 'react-dom/client'
 * import { AlphaAppProvider } from '@channel.io/bezier-react'
 *
 * const container = document.getElementById('root')
 * const root = createRoot(container)
 *
 * root.render(
 *   <AlphaAppProvider themeName="light">
 *     <App />
 *   </AlphaAppProvider>,
 * )
 * ```
 */
export function AlphaAppProvider({
  children,
  themeName = 'light',
  features = [],
  window = defaultWindow,
}: AlphaAppProviderProps) {
  useEffect(function updateThemeDataAttribute() {
    const rootElement = window.document.documentElement
    // TODO: Change data attribute constant to import from bezier-tokens
    rootElement.setAttribute('data-bezier-theme', themeName)
    return function cleanup() {
      rootElement.removeAttribute('data-bezier-theme')
    }
  }, [
    window,
    themeName,
  ])

  return (
    <WindowProvider window={window}>
      <FeatureProvider features={features}>
        <TokenProvider themeName={themeName}>
          <TooltipProvider>
            { children }
          </TooltipProvider>
        </TokenProvider>
      </FeatureProvider>
    </WindowProvider>
  )
}
