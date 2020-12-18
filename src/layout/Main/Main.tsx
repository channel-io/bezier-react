/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import { useLayoutState } from '../Client'
import { HeaderArea } from '../HeaderArea'
import { ContentArea } from '../ContentArea'
import { SidePanelArea } from '../SidePanelArea'
import { SplitViewArea } from '../SplitViewArea'
import { MainWrapper } from './Main.styled'
import MainProps from './Main.types'

function Main(
  {
    content,
    contentHeader,
    searchHeader,
    sidePanel,
    splitView,
    ...otherProps
  }: MainProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const { contentMinWidth, sideWidth } = useLayoutState()

  return (
    <MainWrapper
      ref={forwardedRef}
      contentMinWidth={contentMinWidth}
      sideWidth={sideWidth}
      {...otherProps}
    >
      <HeaderArea
        contentHeader={contentHeader}
        searchHeader={searchHeader}
      />
      <ContentArea>
        { content }
      </ContentArea>
      <SidePanelArea>
        { sidePanel }
      </SidePanelArea>
      <SplitViewArea>
        { splitView }
      </SplitViewArea>
    </MainWrapper>
  )
}

export default forwardRef(Main)
