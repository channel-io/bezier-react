/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import useLayoutState from 'Layout/hooks/useLayoutState'
import { HeaderArea } from 'Layout/components/HeaderArea'
import { ContentArea } from 'Layout/components/ContentArea'
import { MainWrapper } from './Main.styled'
import MainProps from './Main.types'

// TODO: 테스트 코드 작성
const LAYOUT_MAIN_TEST_ID = 'bezier-react-main'

function Main(
  {
    testId = LAYOUT_MAIN_TEST_ID,
    content,
    ContentHeaderComponent,
    CoverableHeaderComponent,
    SidePanelComponent,
    SideViewComponent,
    children,
    onFocusContentArea,
    onBlurContentArea,
    ...otherProps
  }: MainProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const { sideWidth, showContentHeader, showCoverableHeader } = useLayoutState()

  const hasSide = !!SidePanelComponent || !!SideViewComponent
  const hasHeader = showContentHeader || showCoverableHeader

  return (
    <MainWrapper
      data-testid={testId}
      ref={forwardedRef}
      hasHeader={hasHeader}
      hasSide={hasSide}
      sideWidth={sideWidth}
      {...otherProps}
    >
      <HeaderArea
        hasHeader={hasHeader}
        showSideView={!!SideViewComponent}
        ContentHeaderComponent={ContentHeaderComponent}
        CoverableHeaderComponent={CoverableHeaderComponent}
      />
      <ContentArea onFocus={onFocusContentArea} onBlur={onBlurContentArea}>
        { children }
      </ContentArea>

      { SidePanelComponent && (<SidePanelComponent />) }
      { SideViewComponent && (<SideViewComponent />) }
    </MainWrapper>
  )
}

export default forwardRef(Main)
