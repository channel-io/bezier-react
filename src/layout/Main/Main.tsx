/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import useLayoutState from '../../hooks/useLayoutState'
import { HeaderArea } from '../HeaderArea'
import { ContentArea } from '../ContentArea'
import { MainWrapper } from './Main.styled'
import MainProps from './Main.types'

// TODO: 테스트 코드 작성
const LAYOUT_MAIN_TEST_ID = 'ch-design-system-main'

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
  const { sideWidth, showSideView, showSidePanel, showContentHeader, showCoverableHeader } = useLayoutState()

  const hasSide = showSideView || showSidePanel
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
        ContentHeaderComponent={ContentHeaderComponent}
        CoverableHeaderComponent={CoverableHeaderComponent}
      />
      <ContentArea onFocus={onFocusContentArea} onBlur={onBlurContentArea}>
        { children }
      </ContentArea>

      <SidePanelComponent/>
      <SideViewComponent/>
    </MainWrapper>
  )
}

export default forwardRef(Main)
