/* External dependencies */
import React from 'react'

/* Internal dependencies */
import GNBView from './GNB.styled'
import GNBProps from './GNB.types'

function GNB({
  children,
}: GNBProps) {
  return (
    <GNBView>
      { children }
    </GNBView>
  )
}

export default GNB
