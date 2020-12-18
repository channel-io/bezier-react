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
      { /* Split View는 그 자체로 또다른 View의 성격이 강하다고 판단하여 해당 Header는 Split View Area에서 있다고 가정하고 작성함 */ }
      <RightHeader>{ searchHeader }</RightHeader>
    </HeaderWrapper>
  )
}

export default HeaderArea
