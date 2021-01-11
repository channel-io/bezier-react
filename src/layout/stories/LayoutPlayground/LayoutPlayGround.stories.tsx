/* External dependencies */
import React, { useMemo, useRef, useState } from 'react'
import { range } from 'lodash-es'
import { base } from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../../utils/utils'
import { styled } from '../../../styling/Theme'
import { Icon } from '../../../components/Icon'
import { Header } from '../../../components/Header'
import { ListItem } from '../../../components/List/ListItem'
import Client from '../../Client/Client'
import { Main } from '../../Main'
import GNB from '../../GNB/GNB'
import Navigations, { NavigationHandles } from '../../Navigations/Navigations'
import { NavigationContent } from '../../Navigations/NavigationContent'
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
  const [navigationState, setNavigationState] = useState(false)
  const [navigationSubState, setNavigationSubState] = useState(false)

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

  const NavigationMainRoute = useMemo(() => (navigationState ?
    (
      <NavigationContent
        header={Element1Header}
        withScroll
        /* LayoutState Prop */
        layoutOption={{
          initialWidth: 350,
          maxWidth: 400,
          minWidth: 250,
          hidable: true,
        }}
      >
        { range(0, 30).map((val) => (
          <ListItem content={`NavItem - ${val}`} />
        )) }
      </NavigationContent>
    ) : (
      <NavigationContent
        header={Element1Header}
        withScroll
        /* LayoutState Prop */
        layoutOption={{
          initialWidth: 300,
          maxWidth: 400,
          minWidth: 250,
          hidable: false,
        }}
      >
        { range(0, 2).map((val) => (
          <ListItem content={` - ${val}`} />
        )) }
      </NavigationContent>
    )
  ), [Element1Header, navigationState])

  const NavigationSubRoute = useMemo(() => (
    navigationSubState ?
      null : (
        <NavigationContent
          header={Element2Header}
          fixedHeader
          withScroll
      /* LayoutState Prop */
          layoutOption={{
            initialWidth: 300,
            maxWidth: 400,
            minWidth: 200,
            hidable: false,
          }}
        >
          { range(0, 30).map((val) => (
            <ListItem content={`NavItem - ${val}`} />
          )) }
        </NavigationContent>
      )
  ), [Element2Header, navigationSubState])

  const ContentRoute = useMemo(() => (<Content />), [])
  const ContentHeaderRoute = useMemo(() => (<Div>ContentHeader</Div>), [Div])
  const SearchComponent = useMemo(() => (<Div>Search</Div>), [Div])
  const SidePanelRoute = useMemo(() => (<Div>SidePanel</Div>), [Div])
  const SplitViewRoute = useMemo(() => (<Div>SplitView</Div>), [Div])

  return (
    <>
      <button
        type="button"
        onClick={() => setNavigationState(v => !v)}
      >
        navigation 상태 변경
      </button>
      <button
        type="button"
        onClick={() => setNavigationSubState(v => !v)}
      >
        navigationSub 없애기
      </button>
      <Container>
        <Client>
          <GNB />
          <Navigations ref={navigationRef}>
            { NavigationMainRoute }
            { NavigationSubRoute }
          </Navigations>
          <Main
            content={ContentRoute}
            contentHeader={ContentHeaderRoute}
            searchHeader={SearchComponent}
            sidePanel={SidePanelRoute}
            splitView={SplitViewRoute}
          />
        </Client>
      </Container>
    </>
  )
}

export const Primary = Template.bind({})

Primary.args = {}
