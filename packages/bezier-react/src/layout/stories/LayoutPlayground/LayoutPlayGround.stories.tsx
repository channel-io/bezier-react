/* External dependencies */
import React, { useCallback, useMemo, useState } from 'react'
import { range } from 'lodash-es'
import { base } from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { styled, Typography } from '~/src/foundation'
import { getTitle } from '~/src/utils/storyUtils'
import { Icon, IconSize, SearchIcon, TriangleUpdownIcon } from '~/src/components/Icon'
import { ListItem } from '~/src/components/ListItem'
import useSideWidth from '~/src/layout/hooks/useSideWidth'
import LayoutProvider from '~/src/layout/LayoutProvider'
import { Client } from '~/src/layout/components/Client'
import { Main } from '~/src/layout/components/Main'
import { GNB } from '~/src/layout/components/GNB'
import { Header } from '~/src/layout/components/Header'
import { Navigations } from '~/src/layout/components/Navigations'
import { SidePanelContent } from '~/src/layout/components/Side/SidePanelContent'
import { SideViewContent } from '~/src/layout/components/Side/SideViewContent'
import { NavigationContent } from '~/src/layout/components/Navigations/NavigationContent'
import Content from './Content'
import ContentHeader from './ContentHeader'
import CoverableHeader from './CoverableHeader'

export default {
  title: getTitle(base),
} as Meta

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
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

const HeaderActionIconWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  cursor: pointer;
  ${({ foundation }) => foundation?.rounding?.round8}

  &:hover {
    background-color: ${({ foundation }) => foundation?.theme?.['bg-black-lighter']};
  }
`

enum RouteKeys {
  TeamChat = 'teamChat',
  UserChat = 'userChat',
  Statistic = 'statistic',
  Setting = 'setting',
}

interface TemplateProps {
  onChangeWidth: () => void
}

function TeamChatSidePanel({ onChangeWidth }: TemplateProps) {
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

function UserChatSidePanel({ onChangeWidth }: TemplateProps) {
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

function SideViewRoute({ onChangeWidth }: TemplateProps) {
  const [state, setState] = useState(Math.random() * 100)

  return (
    <SideViewContent
      onChangeSideWidth={onChangeWidth}
    >
      <Div style={{ height: 2000 }}>{ state }</Div>
      <button onClick={() => setState(Math.random() * 100)} type="button">regenerate</button>
    </SideViewContent>
  )
}

const Template = ({ onChangeWidth }: TemplateProps) => {
  const [route, setRoute] = useState<RouteKeys>(RouteKeys.UserChat)
  const [showSideView, setShowSideView] = useState(false)

  const handleOpenSideView = useCallback(() => setShowSideView(true), [])
  const handleCloseSideView = useCallback(() => setShowSideView(false), [])

  const handleChangeRoute = useCallback((e: React.MouseEvent) => {
    setRoute((e.target as HTMLButtonElement).value as RouteKeys)
  }, [])

  const DummyActions = useMemo(() => (
    <>
      <StyledIcon source={SearchIcon} marginRight={10} />
      <StyledIcon source={TriangleUpdownIcon} />
    </>
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
            header={<Header title="Channel corp." titleSize={Typography.Size24} />}
            withScroll
            onChangeWidth={onChangeWidth}
            /* LayoutState Prop */
            navigationKey={route}
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
            header={(
              <Header
                title="Inbox"
                titleSize={Typography.Size24}
                actions={[(
                  <HeaderActionIconWrapper key="action">
                    <Icon
                      source={SearchIcon}
                      color="txt-black-darkest"
                      size={IconSize.S}
                    />
                  </HeaderActionIconWrapper>
                )]}
              />
            )}
            withScroll
            onChangeWidth={onChangeWidth}
            /* LayoutState Prop */
            navigationKey={route}
            layoutOption={{
              initialWidth: 400,
              maxWidth: 600,
              minWidth: 300,
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
            header={<Header title="Setting" titleSize={Typography.Size24} />}
            withScroll
            onChangeWidth={onChangeWidth}
            /* LayoutState Prop */
            navigationKey={route}
            layoutOption={{
              initialWidth: 300,
              maxWidth: 400,
              minWidth: 200,
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
  }, [
    route,
    onChangeWidth,
  ])

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
            navigationKey={route}
            layoutOption={{
              initialWidth: 260,
              maxWidth: 600,
              minWidth: 240,
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
  }, [
    Element2Header,
    route,
    onChangeWidth,
  ])

  const ContentHeaderRoute = useCallback(() => {
    switch (route) {
      case RouteKeys.TeamChat:
        return (<ContentHeader>TeamChat Header</ContentHeader>)
      case RouteKeys.UserChat:
        return (<ContentHeader>UserChat Header</ContentHeader>)
      case RouteKeys.Statistic:
        return (<ContentHeader>Statistic Heassder</ContentHeader>)
      case RouteKeys.Setting:
      default:
        return null
    }
  }, [route])

  const CoverableHeaderRoute = useCallback(() => {
    switch (route) {
      case RouteKeys.TeamChat:
      case RouteKeys.UserChat:
        return (<CoverableHeader>Search</CoverableHeader>)
      default:
        return null
    }
  }, [route])

  const showSidePanel = useMemo(() => (
    [RouteKeys.TeamChat, RouteKeys.UserChat].includes(route)
  ), [route])

  const SidePanelRoute = useCallback(() => {
    switch (route) {
      case RouteKeys.TeamChat:
        return (<TeamChatSidePanel onChangeWidth={onChangeWidth} />)
      case RouteKeys.UserChat:
        return (<UserChatSidePanel onChangeWidth={onChangeWidth} />)
      case RouteKeys.Statistic:
      case RouteKeys.Setting:
      default:
        return null
    }
  }, [
    onChangeWidth,
    route,
  ])

  const SideViewComponent = useCallback(() => (
    <SideViewRoute onChangeWidth={onChangeWidth} />
  ), [onChangeWidth])

  return (
    <Container>
      <Client>
        <GNB>
          <button type="button" onClick={handleChangeRoute} value={RouteKeys.TeamChat}>팀챗</button>
          <button type="button" onClick={handleChangeRoute} value={RouteKeys.UserChat}>유저챗</button>
          <button type="button" onClick={handleChangeRoute} value={RouteKeys.Statistic}>통계</button>
          <button type="button" onClick={handleChangeRoute} value={RouteKeys.Setting}>세팅</button>
        </GNB>
        <Navigations>
          <NavigationMainRoute />
          <NavigationSubRoute />
        </Navigations>
        <Main
          ContentHeaderComponent={ContentHeaderRoute}
          CoverableHeaderComponent={CoverableHeaderRoute}
          SidePanelComponent={showSidePanel ? SidePanelRoute : undefined}
          SideViewComponent={showSideView ? SideViewComponent : undefined}
          onChangeSideWidth={onChangeWidth}
        >
          <Content
            showSidePanel={showSidePanel}
            showSideView={showSideView}
            onOpenSideView={handleOpenSideView}
            onCloseSideView={handleCloseSideView}
          />
        </Main>
      </Client>
    </Container>
  )
}

const LayoutProvidedTemplate: Story<TemplateProps> = (args) => (
  <LayoutProvider initialState={{
    showingHidableNavigations: new Set([
      RouteKeys.TeamChat,
      RouteKeys.UserChat,
    ]) }}
  >
    <Template {...args} />
  </LayoutProvider>
)

export const Primary = LayoutProvidedTemplate.bind({})
Primary.args = {
  /* eslint-disable-next-line no-console */
  onChangeWidth: console.log,
}
