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

const SIDE_MAX_WIDTH = 500
const SIDE_MIN_WIDTH = 200

export enum SideState {
  None = 'NONE',
  SidePanel = 'SidePanel',
  SplitView = 'SplitView',
}

interface ContentWrapperProps {
  sideWidth: number
  sideState: SideState
}

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

export const LayoutContext = React.createContext<{
  sideState: SideState
  sideWidth: number
} | undefined>(undefined)

extend(document, {
  requestAnimationFrame() {},
})

function Container() {
  const contentRef = useRef<HTMLDivElement | null>(null)

  const [sideState, setSideState] = useState<SideState>(SideState.SidePanel)
  const [sideWidth, setSideWidth] = useState<number>(300)

  const contextValue = {
    sideState,
    sideWidth,
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

  const handleCloseSplitView = useCallback(() => {
    setSideState(SideState.SidePanel)
  }, [])

  return (
    <LayoutContext.Provider value={contextValue}>
      <ContainerWrapper sideWidth={sideWidth} sideState={sideState}>
        <HeaderArea />
        <ContentArea ref={contentRef} onResizing={handleResizing} onOpenSplitView={handleOpenSplitView}/>
        <SidePanelArea />
        <SplitViewArea onCloseSplitView={handleCloseSplitView}/>
      </ContainerWrapper>
    </LayoutContext.Provider>
  )
}

export default {
  Container,
}
