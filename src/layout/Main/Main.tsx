/* External dependencies */
import React, { forwardRef } from 'react'
import { isNil } from 'lodash-es'

/* Internal dependencies */
import useLayoutState from '../../hooks/useLayoutState'
import { HeaderArea } from '../HeaderArea'
import { ContentArea } from '../ContentArea'
import { MainWrapper } from './Main.styled'
import MainProps from './Main.types'

export const LAYOUT_MAIN_TEST_ID = 'ch-design-system-main'

function Main(
  {
    testId = LAYOUT_MAIN_TEST_ID,
    content,
    ContentHeaderComponent,
    CoverableHeaderComponent,
    SidePanelComponent,
    SideViewComponent,
    children,
    ...otherProps
  }: MainProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const { sideWidth, showSideView, showSidePanel } = useLayoutState()

  const hasSide = showSideView || showSidePanel
  const hasHeader = !isNil(ContentHeaderComponent || CoverableHeaderComponent)

  return (
    <MainWrapper
      data-testId={testId}
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
      <ContentArea>
        { children }
      </ContentArea>

      <SidePanelComponent/>
      <SideViewComponent/>
    </MainWrapper>
  )
}

export default forwardRef(Main)
