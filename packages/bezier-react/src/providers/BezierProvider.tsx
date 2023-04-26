import React from 'react'

import {
  type Foundation,
  FoundationProvider,
  GlobalStyle,
  type GlobalStyleProp,
  ThemeVars,
  type ThemeVarsAdditionalType,
} from '~/src/foundation'

interface BezierProviderProps {
  foundation: Foundation & GlobalStyleProp
  children: React.ReactNode
  themeVarsScope?: ThemeVarsAdditionalType['scope']
}

function BezierProvider({
  foundation,
  children,
  themeVarsScope,
}: BezierProviderProps) {
  return (
    <FoundationProvider foundation={foundation}>
      <GlobalStyle foundation={foundation} />
      <ThemeVars
        foundation={foundation}
        scope={themeVarsScope}
      />
      { children }
    </FoundationProvider>
  )
}

export default BezierProvider
