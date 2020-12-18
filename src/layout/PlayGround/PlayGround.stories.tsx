/* External dependencies */
import React, { useMemo, useRef } from 'react'
import { base } from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/utils'
import { styled } from '../../styling/Theme'
import Navigations, { NavigationHandles } from '../Navigations/Navigations'
import Client from '../Client/Client'
import { Navigation } from '../Navigations'
import { Main } from '../Main'
import { Header } from '../../components/Header'
import { SideState, LayoutContextProps } from '../Client/Client.types'
import Icon from '../../components/Icon/Icon'

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

const NavigationMain = styled(Navigation)`
  width: 200px;
  z-index: 500;
`

const NavigationSub = styled(Navigation)`
  width: 300px;
  z-index: 400;
  background-color: ${({ theme }) => theme.colors.background0};
  border-right: 2px solid ${({ theme }) => theme.colors.border2};
`

const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.iconBase};
`

const Template = ({ minWidth1, maxWidth1, minWidth2, maxWidth2 }) => {
  const navigationRef = useRef<NavigationHandles | null>(null)
  const layoutInitialState: LayoutContextProps = {
    sideState: SideState.SidePanel,
    sideWidth: 332,
    sideMinWidth: 320,
    sideMaxWidth: 1000,
    showNavigation: true,
    contentMinWidth: 330,
    navigationRef,
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
  `

  const Content = useMemo(() => (<Div>Content</Div>), [Div])
  const Search = useMemo(() => (<Div>Search</Div>), [Div])
  const ContentHeader = useMemo(() => (<Div>ContentHeader</Div>), [Div])
  const SidePanel = useMemo(() => (<Div>SidePanel</Div>), [Div])
  const SplitView = useMemo(() => (<Div>SplitView</Div>), [Div])

  return (
    <Container>
      <Client layoutInitialState={layoutInitialState}>
        <Navigations ref={navigationRef}>
          <NavigationMain
            header={Element1Header}
            minWidth={minWidth1}
            maxWidth={maxWidth1}
          />
          <NavigationSub
            header={Element2Header}
            minWidth={minWidth2}
            maxWidth={maxWidth2}
            withScroll
            fixedHeader
          />
        </Navigations>
        <Main
          content={Content}
          contentHeader={ContentHeader}
          searchHeader={Search}
          sidePanel={SidePanel}
          splitView={SplitView}
        />
      </Client>
    </Container>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  minWidth1: 100,
  maxWidth1: 300,
  minWidth2: 200,
  maxWidth2: 450,
}
