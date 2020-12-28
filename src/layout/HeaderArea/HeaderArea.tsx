/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { useLayoutState } from '../Client'
import { HeaderWrapper, LeftHeader, RightHeader } from './HeaderArea.styled'
import HeaderAreaProps from './HeaderArea.types'

function HeaderArea({
  contentHeader,
  searchHeader,
}: HeaderAreaProps) {
  const { sideState, sideWidth } = useLayoutState()

  return (
    <HeaderWrapper sideState={sideState} sideWidth={sideWidth}>
      <LeftHeader>{ contentHeader }</LeftHeader>
      <RightHeader>{ searchHeader }</RightHeader>
    </HeaderWrapper>
  )
}

export default HeaderArea
