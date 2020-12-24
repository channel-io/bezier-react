/* External dependencies */
import React, { useMemo, useRef } from 'react'
import { base } from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/utils'
import { styled } from '../../styling/Theme'
import Navigations, { NavigationHandles } from '../Navigations/Navigations'
import { NavigationContent } from '../Navigations/NavigationContent'
import Client from '../Client/Client'
import { Main } from '../Main'
import GNB from '../GNB/GNB'
import { SideState } from '../Client/Client.types'
import { Icon } from '../../components/Icon'
import { Header } from '../../components/Header'
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

const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.iconBase};
`

const Template = () => {
  const navigationRef = useRef<NavigationHandles | null>(null)

  const layoutInitialState: LayoutState = {
    contentMinWidth: 330,
    sideState: SideState.SidePanel,
    sideWidth: 332,
    sideMinWidth: 320,
    sideMaxWidth: 1000,
    navigations: [
      {
        initialWidth: 200,
        minWidth: 150,
        maxWidth: 300,
        hidable: true,
      },
      {
        initialWidth: 250,
        minWidth: 150,
        maxWidth: 300,
        hidable: false,
      },
    ],
    showNavigation: true,
    navigationRef,
    withoutSearch: false, // TODO(@mong) 해당 필드 추가 적용
  }

  const DummyActions = useMemo(() => (
    <>
      <StyledIcon name="search" marginRight={10}/>
      <StyledIcon name="triangle-updown"/>
    </>
  ), [])

  const Element1Header = useMemo(() => (
    <Header title="Title" />
  ), [])

  const Element2Header = useMemo(() => (
    <Header
      title="Betty"
      titleImageUrl="https://picsum.photos/200/300.jpg"
      actions={DummyActions}
    />
  ), [DummyActions])

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
    <NavigationContent header={Element1Header}>
      hello!
    </NavigationContent>
  ), [Element1Header])
  const NavigationSubRoute = useMemo(() => (
    <NavigationContent header={Element2Header} fixedHeader>
      hello!
    </NavigationContent>
  ), [Element2Header])
  const ContentRoute = useMemo(() => (<Content />), [])
  const ContentHeaderRoute = useMemo(() => (<Div>ContentHeader</Div>), [Div])
  const SearchComponent = useMemo(() => (<Div>Search</Div>), [Div])
  const SidePanelComponent = useMemo(() => (<Div>SidePanel</Div>), [Div])
  const SplitViewComponent = useMemo(() => (<Div>SplitView</Div>), [Div])

  return (
    <Container>
      <Client layoutInitialState={layoutInitialState}>
        <GNB />
        <Navigations ref={navigationRef}>
          { NavigationMainRoute }
          { NavigationSubRoute }
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
