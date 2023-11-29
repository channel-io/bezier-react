import React, { useEffect } from 'react'

import {
  type Feature,
  FeatureProvider,
} from '~/src/features'
import {
  type ThemeName,
  TokenProvider,
} from '~/src/hooks/useToken'
import { window as defaultWindow } from '~/src/utils/dom'

import { TooltipProvider } from '~/src/components/Tooltip'

import WindowProvider from './WindowProvider'

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
  /**
   * Root element to apply theme data attribute to. window of default value is a window object passed by `window` prop
   * @default window.document.body
   */
  rootElement?: HTMLElement
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
  rootElement = window.document.body,
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
    <WindowProvider window={window}>
      <TokenProvider themeName={themeName}>
        <FeatureProvider features={features}>
          <TooltipProvider>
            { children }
          </TooltipProvider>
        </FeatureProvider>
      </TokenProvider>
    </WindowProvider>
  )
}
