import React from 'react'

import {
  type Foundation,
  FoundationProvider,
  GlobalStyle,
  type GlobalStyleProp,
  ThemeVars,
  type ThemeVarsAdditionalType,
} from '~/src/foundation'

import { TooltipProvider } from '~/src/components/Tooltip'

import WindowProvider from './WindowProvider'

interface BezierProviderProps {
  foundation: Foundation & GlobalStyleProp
  children: React.ReactNode
  themeVarsScope?: ThemeVarsAdditionalType['scope']
  externalWindow?: Window
}

function BezierProvider({
  foundation,
  children,
  themeVarsScope,
  externalWindow,
}: BezierProviderProps) {
  return (
    <WindowProvider externalWindow={externalWindow}>
      <FoundationProvider foundation={foundation}>
        <TooltipProvider>
          <GlobalStyle foundation={foundation} />
          <ThemeVars
            foundation={foundation}
            scope={themeVarsScope}
          />
          { children }
        </TooltipProvider>
      </FoundationProvider>
    </WindowProvider>
  )
}

export default BezierProvider
