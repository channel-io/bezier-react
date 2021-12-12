/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { Foundation, FoundationProvider, GlobalStyle, GlobalStyleProp } from 'Foundation'
import EnableCSSHoudini from 'Worklets/EnableCSSHoudini'

interface BezierProviderProps {
  foundation: Foundation & GlobalStyleProp
  children: React.ReactNode
}

function BezierProvider({
  foundation,
  children,
}: BezierProviderProps) {
  EnableCSSHoudini({ smoothCorners: true })

  return (
    <FoundationProvider foundation={foundation}>
      <GlobalStyle foundation={foundation} />
      { children }
    </FoundationProvider>
  )
}

export default BezierProvider
