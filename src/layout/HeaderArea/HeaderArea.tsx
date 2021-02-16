/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import useLayoutState from '../../hooks/useLayoutState'
import { HeaderWrapper, ContentHeader, CoverableHeader } from './HeaderArea.styled'
import HeaderAreaProps from './HeaderArea.types'

export const HEADER_AREA_TEST_ID = 'ch-design-system-header-area'

function HeaderArea(
  {
    style,
    className,
    ContentHeaderComponent,
    CoverableHeaderComponent,
    testId = HEADER_AREA_TEST_ID,
    hasHeader,
    ...otherProps
  }: HeaderAreaProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const { sideWidth, showSideView } = useLayoutState()

  if (!hasHeader) { return null }

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
      <ContentHeader>
        <ContentHeaderComponent />
      </ContentHeader>
      <CoverableHeader>
        <CoverableHeaderComponent />
      </CoverableHeader>
    </HeaderWrapper>
  )
}

export default forwardRef(HeaderArea)
