import React from 'react'

import {
  type Feature,
  FeatureProvider,
} from '~/src/features'
import { window as defaultWindow } from '~/src/utils/dom'

import { TooltipProvider } from '~/src/components/Tooltip'

import {
  type ThemeName,
  ThemeProvider,
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
  return (
    <WindowProvider window={window}>
      <FeatureProvider features={features}>
        <TooltipProvider>
          <ThemeProvider themeName={themeName}>
            <div data-bezier-root>
              { children }
            </div>
          </ThemeProvider>
        </TooltipProvider>
      </FeatureProvider>
    </WindowProvider>
  )
}
