/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { Foundation, FoundationProvider, GlobalStyle, GlobalStyleProp, ThemeVars } from '~/src/foundation'
import type { ThemeVarsAdditionalType } from '~/src/foundation'
import EnableCSSHoudini from '~/src/worklets/EnableCSSHoudini'

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
  EnableCSSHoudini({ smoothCorners: true })

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
