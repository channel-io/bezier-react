/* External dependencies */
import React from 'react'

/* Internal dependencies */
import NavigationsProps from './Navigations.types'
import { NavigationsWrapper } from './Navigations.styled'

function Navigations({
  children,
}: NavigationsProps,
) {
  return (
    <NavigationsWrapper>
      { children }
    </NavigationsWrapper>
  )
}

export default Navigations
