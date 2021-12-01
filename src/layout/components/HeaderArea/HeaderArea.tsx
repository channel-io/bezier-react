/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import useLayoutState from '../../hooks/useLayoutState'
import { HeaderWrapper, ContentHeader, CoverableHeader } from './HeaderArea.styled'
import HeaderAreaProps from './HeaderArea.types'

// TODO: 테스트 코드 작성
const HEADER_AREA_TEST_ID = 'bezier-react-header-area'

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

  return (
    <HeaderWrapper
      style={style}
      className={className}
      data-testid={testId}
      ref={forwardedRef}
      sideWidth={sideWidth}
      showSideView={showSideView}
      showHeader={hasHeader}
      {...otherProps}
    >
      <ContentHeader>
        <ContentHeaderComponent />
      </ContentHeader>
      { CoverableHeaderComponent && (
        <CoverableHeader>
          <CoverableHeaderComponent />
        </CoverableHeader>
      ) }
    </HeaderWrapper>
  )
}

export default forwardRef(HeaderArea)
