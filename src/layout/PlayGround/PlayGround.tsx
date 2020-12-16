/* External dependencies */
import { clamp } from 'lodash-es'
import React, { useCallback, useRef, useState } from 'react'
import { extend } from 'ssr-window'

/* Internal dependencies */
import { styled } from '../../styling/Theme'
import { ContentArea } from '../ContentArea'
import { HeaderArea } from '../HeaderArea'
import { ListItem } from '../../components/List/ListItem'
import { Header } from '../../components/Header'
import Navigation from '../Navigations/Navigation'
import { SidePanelArea } from '../SidePanelArea'
import { SplitViewArea } from '../SplitViewArea'
import { Navigations } from '../Navigations'
import { NavigationHandles } from '../Navigations/Navigations'

const SIDE_MAX_WIDTH = 500
const SIDE_MIN_WIDTH = 200
const CONTENT_MIN_WIDTH = 330

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

const NavigationElement1 = styled(Navigation)`
  width: 200px;
  z-index: 500;
`

const NavigationElement2 = styled(Navigation)`
  width: 300px;
  z-index: 400;
  background-color: ${({ theme }) => theme.colors.background0};
  border-right: 2px solid ${({ theme }) => theme.colors.border2};
`

export const LayoutContext = React.createContext<{
  sideState: SideState
  sideWidth: number
} | undefined>(undefined)

extend(document, {
  requestAnimationFrame() {},
})

function Container() {
  const navigationRef = useRef<NavigationHandles | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  // will be provider
  const [showSidebar, setShowSidebar] = useState(true)
  const [sideState, setSideState] = useState<SideState>(SideState.SidePanel)
  const [sideWidth, setSideWidth] = useState<number>(300)

  const contextValue = {
    sideState,
    sideWidth,
  }

  const handleResizing = useCallback((e: MouseEvent) => {
    window.requestAnimationFrame!(() => {
      const contentLeft = (contentRef.current?.offsetLeft || 0)
      const contentWidth = (contentRef.current?.clientWidth || 0)
      const deltaX = e.pageX - contentLeft - contentWidth
      // sideWidth - deltaX // 변화할 양

      // FIXME 가끔 MIN_WIDTH보다 작아직 때가 있음.
      if (contentWidth + deltaX < CONTENT_MIN_WIDTH) {
        setSideWidth(v => v + contentWidth - CONTENT_MIN_WIDTH)
        navigationRef.current?.shrinkLast(deltaX)
        return
      }

      setSideWidth(v => clamp(
        v - deltaX,
        SIDE_MIN_WIDTH,
        SIDE_MAX_WIDTH,
      ),
      )
    })
  }, [])

  const handleResizerMouseDown = useCallback(() => {
    navigationRef.current?.handleMouseDown()
  }, [])

  const handleResizerMouseUp = useCallback(() => {
    navigationRef.current?.handleMouseUp()
  }, [])

  const handleOpenSplitView = useCallback(() => {
    setSideState(SideState.SplitView)
  }, [])

  const handleCloseSplitView = useCallback(() => {
    setSideState(SideState.SidePanel)
  }, [])

  return (
    <LayoutContext.Provider value={contextValue}>
      <Navigations ref={navigationRef}>
        <NavigationElement1
          header={(<Header title="Title" />)}
          show={showSidebar}
          setShow={setShowSidebar}
          minWidth={100}
          maxWidth={300}
        >
          <ListItem content="NavItem1" />
        </NavigationElement1>
        <NavigationElement2
          minWidth={200}
          maxWidth={450}
          withScroll
          fixedHeader
        >
          <ListItem content="NavItem4" />
        </NavigationElement2>
      </Navigations>
      <ContainerWrapper sideWidth={sideWidth} sideState={sideState}>
        <HeaderArea />
        <ContentArea
          ref={contentRef}
          onResizerMouseDown={handleResizerMouseDown}
          onResizerMouseUp={handleResizerMouseUp}
          onResizing={handleResizing}
          onOpenSplitView={handleOpenSplitView}
        />
        <SidePanelArea />
        <SplitViewArea onCloseSplitView={handleCloseSplitView}/>
      </ContainerWrapper>
    </LayoutContext.Provider>
  )
}

export default {
  Container,
}
