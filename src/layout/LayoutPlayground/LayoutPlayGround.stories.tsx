/* External dependencies */
import React, { useMemo, useRef } from 'react'
import { base } from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/utils'
import { styled } from '../../styling/Theme'
import Navigations, { NavigationHandles } from '../Navigations/Navigations'
import Client from '../Client/Client'
import { Main } from '../Main'
import GNB from '../GNB/GNB'
import { NavigationState, SideState } from '../Client/Client.types'
import { LayoutState } from '../Client/utils/LayoutReducer'
import Content from './Content'

export default {
  title: getTitle(base),
  component: Navigations,
}

const Container = styled.div`
  width: 1500px;
  height: 800px;
  margin: 0 auto;
  padding: 2px;
  border: 2px solid grey;
  border-radius: 10px;
`

// const NavigationMain = styled(NavigationArea)`
//   width: 200px;
//   z-index: 500;
// `

// const NavigationSub = styled(NavigationArea)`
//   width: 300px;
//   z-index: 400;
//   background-color: ${({ theme }) => theme.colors.background0};
//   border-right: 2px solid ${({ theme }) => theme.colors.border2};
// `

// const StyledIcon = styled(Icon)`
//   color: ${({ theme }) => theme.colors.iconBase};
// `

const Template = () => {
  const navigationRef = useRef<NavigationHandles | null>(null)

  const layoutInitialState: LayoutState = {
    contentMinWidth: 330,
    sideState: SideState.SidePanel,
    sideWidth: 332,
    sideMinWidth: 320,
    sideMaxWidth: 1000,
    navigationState: NavigationState.Either,
    navigations: [
      {
        initialWidth: 200,
        minWidth: 150,
        maxWidth: 300,
      },
      {
        initialWidth: 250,
        minWidth: 150,
        maxWidth: 300,
      },
    ],
    showNavigation: true,
    navigationRef,
    withoutSearch: false, // TODO(@mong) 해당 필드 추가 적용
  }

  // const DummyActions = useMemo(() => (
  //   <>
  //     <StyledIcon name="search" marginRight={10}/>
  //     <StyledIcon name="triangle-updown"/>
  //   </>
  // ), [])

  // const Element1Header = useMemo(() => (
  //   <Header title="Title" />
  // ), [])

  // const Element2Header = useMemo(() => (
  //   <Header
  //     title="Betty"
  //     titleImageUrl="https://picsum.photos/200/300.jpg"
  //     actions={DummyActions}
  //   />
  // ), [DummyActions])

  const Div = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid orange;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
  `

  const NavigationMainRoute = useMemo(() => (
    <div>
      hello!
    </div>
  ), [])
  const NavigationSubRoute = useMemo(() => (<div>hello!</div>), [])
  const ContentRoute = useMemo(() => (<Content />), [])
  const ContentHeaderRoute = useMemo(() => (<Div>ContentHeader</Div>), [Div])
  const SearchComponent = useMemo(() => (<Div>Search</Div>), [Div])
  const SidePanelComponent = useMemo(() => (<Div>SidePanel</Div>), [Div])
  const SplitViewComponent = useMemo(() => (<Div>SplitView</Div>), [Div])

  return (
    <Container>
      <Client layoutInitialState={layoutInitialState}>
        <GNB />
        <Navigations
          ref={navigationRef}
          navigation={NavigationMainRoute}
          navigationSub={NavigationSubRoute}
        >
          { /* <NavigationMain
            header={Element1Header}
            minWidth={minWidth1}
            maxWidth={maxWidth1}
            hidable
          >
            { NavigationMainRoute }
          </NavigationMain>
          <NavigationSub
            header={Element2Header}
            minWidth={minWidth2}
            maxWidth={maxWidth2}
            withScroll
            fixedHeader
          >
            { NavigationSubRoute }
          </NavigationSub> */ }
        </Navigations>
        <Main
          content={ContentRoute}
          contentHeader={ContentHeaderRoute}
          searchHeader={SearchComponent}
          sidePanel={SidePanelComponent}
          splitView={SplitViewComponent}
        />
      </Client>
    </Container>
  )
}

export const Primary = Template.bind({})

Primary.args = {}
