/* External dependencies */
import React, { useCallback, useMemo, useState } from 'react'
import { range } from 'lodash-es'
import { base } from 'paths.macro'

/* Internal dependencies */
import useSideWidth from '../../../hooks/useSideWidth'
import { getTitle } from '../../../utils/etcUtils'
import { styled } from '../../../foundation'
import { Icon } from '../../../components/Icon'
import { Header } from '../../../components/Header'
import { ListItem } from '../../../components/List/ListItem'
import Client from '../../Client/Client'
import { Main } from '../../Main'
import GNB from '../../GNB/GNB'
import Navigations from '../../Navigations/Navigations'
import { SidePanelContent } from '../../Side/SidePanelContent'
import { SideViewContent } from '../../Side/SideViewContent'
import { NavigationContent } from '../../Navigations/NavigationContent'
import useLayoutState from '../../../hooks/useLayoutState'
import Content from './Content'

export default {
  title: getTitle(base),
}

const Container = styled.div`
  width: 1200px;
  height: 800px;
  padding: 2px;
  margin: 0 auto;
  border: 2px solid grey;
  border-radius: 10px;
`

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const StyledIcon = styled(Icon)`
  color: ${({ foundation }) => foundation?.theme?.['txt-black-dark']};
`

enum RouteKeys {
  TeamChat = 'teamChat',
  UserChat = 'userChat',
  Statistic = 'statistic',
  Setting = 'setting',
}

function TeamChatSidePanel({ onChangeWidth }) {
  useSideWidth(332)

  return (
    <SidePanelContent
      onChangeSideWidth={onChangeWidth}
    >
      <Div style={{ height: 2000 }}>
        SidePanel
      </Div>
    </SidePanelContent>
  )
}

function UserChatSidePanel({ onChangeWidth }) {
  useSideWidth(332)

  return (
    <SidePanelContent
      onChangeSideWidth={onChangeWidth}
    >
      <Div style={{ height: 2000 }}>
        Another SidePanel
      </Div>
    </SidePanelContent>
  )
}

function SideViewRoute({ onChangeWidth }) {
  const { showSideView } = useLayoutState()

  if (!showSideView) {
    return null
  }

  return (
    <SideViewContent
      onChangeSideWidth={onChangeWidth}
    >
      <Div style={{ height: 2000 }}>SideView</Div>
    </SideViewContent>
  )
}

const Template = ({ onChangeWidth }) => {
  const [route, setRoute] = useState<RouteKeys>(RouteKeys.UserChat)

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

  const NavigationMainRoute = useCallback(() => {
    switch (route) {
      case RouteKeys.TeamChat:
        return (
          <NavigationContent
            header={Element1Header}
            withScroll
            onChangeWidth={onChangeWidth}
            /* LayoutState Prop */
            showNavigation
            layoutOption={{
              initialWidth: 250,
              maxWidth: 600,
              minWidth: 180,
              hidable: true,
            }}
          >
            { range(0, 30).map((val) => (
              <ListItem key={val} content={`NavItem - ${val}`} />
            )) }
          </NavigationContent>
        )
      case RouteKeys.UserChat:
        return (
          <NavigationContent
            header={Element1Header}
            withScroll
            onChangeWidth={onChangeWidth}
            /* LayoutState Prop */
            showNavigation
            layoutOption={{
              initialWidth: 200,
              maxWidth: 600,
              minWidth: 180,
              hidable: true,
              // disableResize: true,
            }}
          >
            { range(0, 2).map((val) => (
              <ListItem key={val} content={` - ${val}`} />
            )) }
          </NavigationContent>
        )
      case RouteKeys.Setting:
        return (
          <NavigationContent
            header={Element1Header}
            withScroll
            onChangeWidth={onChangeWidth}
            /* LayoutState Prop */
            layoutOption={{
              initialWidth: 300,
              maxWidth: 400,
              minWidth: 200,
              hidable: false,
              disableResize: true,
            }}
          >
            { range(0, 2).map((val) => (
              <ListItem key={val} content={` - ${val}`} />
            )) }
          </NavigationContent>
        )
      case RouteKeys.Statistic:
      default:
        return null
    }
  }, [Element1Header, route, onChangeWidth])

  const NavigationSubRoute = useCallback(() => {
    switch (route) {
      case RouteKeys.UserChat:
        return (
          <NavigationContent
            header={Element2Header}
            fixedHeader
            withScroll
            onChangeWidth={onChangeWidth}
            /* LayoutState Prop */
            layoutOption={{
              initialWidth: 260,
              maxWidth: 600,
              minWidth: 240,
              hidable: false,
            }}
          >
            { range(0, 30).map((val) => (
              <ListItem key={val} content={`NavItem - ${val}`} />
            )) }
          </NavigationContent>
        )
      default:
        return null
    }
  }, [Element2Header, route, onChangeWidth])

  const ContentHeaderRoute = useCallback(() => {
    switch (route) {
      case RouteKeys.TeamChat:
        return (<Div>TeamChat Header</Div>)
      case RouteKeys.UserChat:
        return (<Div>UserChat Header</Div>)
      case RouteKeys.Statistic:
        return (<Div>Statistic Heassder</Div>)
      case RouteKeys.Setting:
      default:
        return null
    }
  }, [route])

  const CoverableHeaderRoute = useCallback(() => {
    switch (route) {
      case RouteKeys.TeamChat:
      case RouteKeys.UserChat:
        return (<Div>Search</Div>)
      default:
        return null
    }
  }, [route])

  const SidePanelRoute = useCallback(() => {
    switch (route) {
      case RouteKeys.TeamChat:
        return (<TeamChatSidePanel onChangeWidth={onChangeWidth}/>)
      case RouteKeys.UserChat:
        return (<UserChatSidePanel onChangeWidth={onChangeWidth}/>)
      case RouteKeys.Statistic:
      case RouteKeys.Setting:
      default:
        return null
    }
  }, [onChangeWidth, route])

  const SideViewComponent = useCallback(() => (
    <SideViewRoute onChangeWidth={onChangeWidth}/>
  ), [onChangeWidth])

  return (
    <>
      <button type="button" onClick={handleChangeRoute} value={RouteKeys.TeamChat}>팀챗</button>
      <button type="button" onClick={handleChangeRoute} value={RouteKeys.UserChat}>유저챗</button>
      <button type="button" onClick={handleChangeRoute} value={RouteKeys.Statistic}>통계</button>
      <button type="button" onClick={handleChangeRoute} value={RouteKeys.Setting}>세팅</button>
      Current Route is - { route }
      <Container>
        <Client>
          <GNB />
          <Navigations>
            <NavigationMainRoute />
            <NavigationSubRoute />
          </Navigations>
          <Main
            ContentHeaderComponent={ContentHeaderRoute}
            CoverableHeaderComponent={CoverableHeaderRoute}
            SidePanelComponent={SidePanelRoute}
            SideViewComponent={SideViewComponent}
            onChangeSideWidth={onChangeWidth}
          >
            <Content />
          </Main>
        </Client>
      </Container>
    </>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  /* eslint-disable-next-line no-console */
  onChangeWidth: console.log,
}
