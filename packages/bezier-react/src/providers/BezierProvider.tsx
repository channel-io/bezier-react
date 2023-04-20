import React from 'react'

import EnableCSSHoudini from '~/src/worklets/EnableCSSHoudini'

import AlphaBezierProvider, { type BezierProviderProps } from './AlphaBezierProvider'

function BezierProvider(props: BezierProviderProps) {
  EnableCSSHoudini({ smoothCorners: true })

  return <AlphaBezierProvider {...props} />
}

export default BezierProvider
