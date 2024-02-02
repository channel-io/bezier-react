import React, { useEffect } from 'react'

import { getWindow } from 'ssr-window'

import { FeatureProvider } from '~/src/components/FeatureProvider'
import { TokenProvider } from '~/src/components/TokenProvider'
import { TooltipProvider } from '~/src/components/Tooltip'
import { WindowProvider } from '~/src/components/WindowProvider'

import { type AppProviderProps } from './AppProvider.types'

const defaultWindow = getWindow()

/**
 * `AppProvider` is a required wrapper component that provides context for the app.
 * @example
 *
 * ```tsx
 * import React from 'react'
 * import { createRoot } from 'react-dom/client'
 * import { AppProvider } from '@channel.io/bezier-react'
 *
 * const container = document.getElementById('root')
 * const root = createRoot(container)
 *
 * root.render(
 *   <AppProvider themeName="light">
 *     <App />
 *   </AppProvider>,
 * )
 * ```
 */
export function AppProvider({
  children,
  themeName = 'light',
  features = [],
  window = defaultWindow,
}: AppProviderProps) {
  useEffect(function updateRootThemeDataAttribute() {
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
