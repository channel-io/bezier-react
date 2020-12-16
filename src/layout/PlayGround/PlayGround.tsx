/* External dependencies */
import React, { useCallback, useRef, useState } from 'react'
import { clamp } from 'lodash-es'
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

const SIDE_MAX_WIDTH = 1000
const SIDE_MIN_WIDTH = 320
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

const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

const ContainerWrapper = styled.div.attrs(({ sideWidth }: ContentWrapperProps) => ({
  style: {
    gridTemplateColumns: `minmax(${CONTENT_MIN_WIDTH}, 1fr) ${sideWidth}px`,
  },
}))<ContentWrapperProps>`
  display: grid;
  grid-template-rows: 70px 1fr;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const NavigationElement1 = styled(Navigation)`
  width: 200px;
  z-index: 500;
`

const NavigationElement2 = styled(Navigation)`
  width: 260px;
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
  const contentInitialWidth = useRef<number>(0)
  const sideInitialWidth = useRef<number>(0)
  const initialPosition = useRef<number>(0)

  const [showSidebar, setShowSidebar] = useState(true)
  const [sideState, setSideState] = useState<SideState>(SideState.SidePanel)
  const [sideWidth, setSideWidth] = useState<number>(322)

  const contextValue = {
    sideState,
    sideWidth,
  }

  const handleResizing = useCallback((e: MouseEvent) => {
    window.requestAnimationFrame!(() => {
      // NOTE: Resizer는 Content에 있지만 Side WIDTH를 조정합니다.
      const movedPosition = e.clientX - initialPosition.current

      const afterContentWidth = Math.max(contentInitialWidth.current + movedPosition, CONTENT_MIN_WIDTH)
      navigationRef.current?.handleMouseMoveOutside(contentInitialWidth.current + movedPosition - afterContentWidth)

      setSideWidth(clamp(
        sideInitialWidth.current - movedPosition,
        SIDE_MIN_WIDTH,
        SIDE_MAX_WIDTH,
      ))
    })
  }, [])

  const handleResizerMouseDown = useCallback((e) => {
    contentInitialWidth.current = contentRef.current!.clientWidth
    initialPosition.current = e.clientX
    sideInitialWidth.current = sideWidth
    navigationRef.current?.handleMouseDownOutside()
  }, [sideWidth])

  const handleOpenSplitView = useCallback(() => {
    setSideState(SideState.SplitView)
  }, [])

  const handleCloseSplitView = useCallback(() => {
    setSideState(SideState.SidePanel)
  }, [])

  return (
    <LayoutContext.Provider value={contextValue}>
      <LayoutWrapper>
        <Navigations ref={navigationRef} adjacent={contentRef}>
          <NavigationElement1
            header={(<Header title="Title" />)}
            show={showSidebar}
            setShow={setShowSidebar}
            minWidth={120}
            maxWidth={600}
          >
            <ListItem content="NavItem1" />
          </NavigationElement1>
          <NavigationElement2
            minWidth={120}
            maxWidth={600}
            withScroll
            fixedHeader
          >
            <ListItem content="NavItem4" />
          </NavigationElement2>
        </Navigations>
        <ContainerWrapper
          sideWidth={sideWidth}
          sideState={sideState}
        >
          <HeaderArea />
          <ContentArea
            ref={contentRef}
            onResizerMouseDown={handleResizerMouseDown}
            onResizing={handleResizing}
            onOpenSplitView={handleOpenSplitView}
          />
          <SidePanelArea />
          <SplitViewArea onCloseSplitView={handleCloseSplitView}/>
        </ContainerWrapper>
      </LayoutWrapper>
    </LayoutContext.Provider>
  )
}

export default {
  Container,
}
