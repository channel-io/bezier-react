/* External dependencies */
import React, { useCallback, useMemo, useRef, useState } from 'react'
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
import { SidePanelChildProps } from '../../SidePanelArea/SidePanelArea.types'
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

enum RouteKeys {
  TeamChat = 'teamChat',
  UserChat = 'userChat',
  Statistic = 'statistic',
  Setting = 'setting',
}

const Template = () => {
  const [route, setRoute] = useState<RouteKeys>(RouteKeys.TeamChat)

  const navigationRef = useRef<NavigationHandles | null>(null)

  const handleChangeRoute = useCallback((e: React.MouseEvent) => {
    setRoute((e.target as HTMLButtonElement).value as RouteKeys)
  }, [])

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

  const Div = styled.div<SidePanelChildProps>`
    width: 100%;
    height: 100%;
    border: 1px solid orange;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
  `

  const NavigationMainRoute = useMemo(() => {
    switch (route) {
      case RouteKeys.TeamChat:
        return (
          <NavigationContent
            header={Element1Header}
            withScroll
            /* LayoutState Prop */
            showNavigation
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
        )
      case RouteKeys.UserChat:
        return (
          <NavigationContent
            header={Element1Header}
            withScroll
            /* LayoutState Prop */
            layoutOption={{
              initialWidth: 300,
              maxWidth: 400,
              minWidth: 200,
              hidable: false,
            }}
          >
            { range(0, 2).map((val) => (
              <ListItem content={` - ${val}`} />
            )) }
          </NavigationContent>
        )
      case RouteKeys.Setting:
        return (
          <NavigationContent
            header={Element1Header}
            withScroll
            /* LayoutState Prop */
            layoutOption={{
              initialWidth: 300,
              maxWidth: 400,
              minWidth: 200,
              hidable: false,
            }}
          >
            { range(0, 2).map((val) => (
              <ListItem content={` - ${val}`} />
            )) }
          </NavigationContent>
        )
      case RouteKeys.Statistic:
      default:
        return null
    }
  }, [Element1Header, route])

  const NavigationSubRoute = useMemo(() => {
    switch (route) {
      case RouteKeys.UserChat:
        return (
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
      default:
        return null
    }
  }, [Element2Header, route])

  const ContentRoute = useMemo(() => (<Content />), [])

  const ContentHeaderRoute = useMemo(() => (<Div>ContentHeader</Div>), [Div])

  const CoverableHeaderRoute = useMemo(() => (<Div>Search</Div>), [Div])

  const SidePanelRoute = useMemo(() => {
    switch (route) {
      case RouteKeys.TeamChat:
        return (<Div fallbackWidth={332}>SidePanel</Div>)
      case RouteKeys.UserChat:
        return (<Div fallbackWidth={332}>Another SidePanel</Div>)
      case RouteKeys.Statistic:
      case RouteKeys.Setting:
      default:
        return null
    }
  }, [Div, route])

  const SideViewRoute = useMemo(() => (<Div>SideView</Div>), [Div])

  return (
    <>
      <button type="button" onClick={handleChangeRoute} value={RouteKeys.TeamChat}>팀챗</button>
      <button type="button" onClick={handleChangeRoute} value={RouteKeys.UserChat}>유저챗</button>
      <button type="button" onClick={handleChangeRoute} value={RouteKeys.Statistic}>통계</button>
      <button type="button" onClick={handleChangeRoute} value={RouteKeys.Setting}>세팅</button>
      Current is: { route }
      <Container>
        <Client>
          <GNB />
          <Navigations ref={navigationRef}>
            { NavigationMainRoute }
            { NavigationSubRoute }
          </Navigations>
          <Main
            navigationRef={navigationRef}
            content={ContentRoute}
            contentHeader={ContentHeaderRoute}
            searchHeader={CoverableHeaderRoute}
            sidePanel={SidePanelRoute}
            sideView={SideViewRoute}
          />
        </Client>
      </Container>
    </>
  )
}

export const Primary = Template.bind({})

Primary.args = {}
