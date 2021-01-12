/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import useLayoutState from '../../hooks/useLayoutState'
import { HeaderWrapper, LeftHeader, RightHeader } from './HeaderArea.styled'
import HeaderAreaProps from './HeaderArea.types'

export const HEADER_AREA_TEST_ID = 'ch-design-system-header-area'

function HeaderArea(
  {
    style,
    className,
    testId = HEADER_AREA_TEST_ID,
    contentHeader,
    searchHeader,
    ...otherProps
  }: HeaderAreaProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const { sideWidth, showSideView } = useLayoutState()

  return (
    <HeaderWrapper
      style={style}
      className={className}
      data-testid={testId}
      ref={forwardedRef}
      sideWidth={sideWidth}
      showSideView={showSideView}
      {...otherProps}
    >
      <LeftHeader>{ contentHeader }</LeftHeader>
      <RightHeader>{ searchHeader }</RightHeader>
    </HeaderWrapper>
  )
}

export default forwardRef(HeaderArea)
