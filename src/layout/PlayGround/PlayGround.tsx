/* External dependencies */
import { clamp } from 'lodash-es'
import React, { useCallback, useRef, useState } from 'react'
import { extend } from 'ssr-window'

/* Internal dependencies */
import { styled } from '../../styling/Theme'
import { ContentArea } from '../ContentArea'
import { HeaderArea } from '../HeaderArea'
import { SidePanelArea } from '../SidePanelArea'
import { SplitViewArea } from '../SplitViewArea'

export enum SideState {
  None = 'NONE',
  SidePanel = 'SidePanel',
  SplitView = 'SplitView',
}

interface ContentWrapperProps {
  sideWidth: number
  sideState: SideState
}

// FIXME: 이렇게 처리해도 over 200 classes ... 에러가 발생함.
const ContainerWrapper = styled.div.attrs(({ sideWidth }: ContentWrapperProps) => ({
  style: {
    gridTemplateColumns: `1fr ${sideWidth}px`,
  },
}))<ContentWrapperProps>`
  display: grid;
  grid-template-rows: 70px 1fr;
  width: 100%;
  height: 100%;
`

const LayoutContext = React.createContext<{
  sideState: SideState
  sideWidth: number
  sideMaxWidth: number
  sideMinWidth: number
} | undefined>(undefined)

extend(document, {
  requestAnimationFrame() {},
})

function Container() {
  const contentRef = useRef<HTMLDivElement | null>(null)

  const [sideState, setSideState] = useState<SideState>(SideState.SidePanel)
  const [sideWidth, setSideWidth] = useState<number>(300)
  const SIDE_MAX_WIDTH = 500
  const SIDE_MIN_WIDTH = 200

  const contextValue = {
    sideState,
    sideWidth,
    sideMaxWidth: SIDE_MAX_WIDTH,
    sideMinWidth: SIDE_MIN_WIDTH,
  }

  const handleResizing = useCallback((e: MouseEvent) => {
    window.requestAnimationFrame!(() => setSideWidth(v =>
      clamp(
        v - (e.pageX - (contentRef.current?.offsetLeft || 0) - (contentRef.current?.clientWidth || 0)),
        SIDE_MIN_WIDTH,
        SIDE_MAX_WIDTH,
      ),
    ))
  }, [])

  const handleOpenSplitView = useCallback(() => {
    setSideState(SideState.SplitView)
  }, [])

  return (
    <LayoutContext.Provider value={contextValue}>
      <ContainerWrapper sideWidth={sideWidth} sideState={sideState}>
        <HeaderArea />
        <ContentArea ref={contentRef} onResizing={handleResizing} onOpenSplitView={handleOpenSplitView}/>
        <SidePanelArea />
        <SplitViewArea />
      </ContainerWrapper>
    </LayoutContext.Provider>
  )
}

export default {
  Container,
}
