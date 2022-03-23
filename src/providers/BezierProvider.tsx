/* External dependencies */
import React from 'react'
import type { AnyStyledComponent } from 'styled-components'

/* Internal dependencies */
import { Foundation, FoundationProvider, GlobalStyle, GlobalStyleProp, ThemeVars } from 'Foundation'
import EnableCSSHoudini from 'Worklets/EnableCSSHoudini'

interface BezierProviderProps {
  foundation: Foundation & GlobalStyleProp
  children: React.ReactNode
  themeVarsScope?: AnyStyledComponent
}

function BezierProvider({
  foundation,
  children,
  themeVarsScope,
}: BezierProviderProps) {
  EnableCSSHoudini({ smoothCorners: true })

  return (
    <FoundationProvider foundation={foundation}>
      <GlobalStyle foundation={foundation} />
      <ThemeVars
        foundation={foundation}
        themeVarsScope={themeVarsScope}
      />
      { children }
    </FoundationProvider>
  )
}

export default BezierProvider
