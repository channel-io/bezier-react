/* External dependencies */
import React, { useMemo } from 'react'
import { base } from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/utils'
import { styled } from '../../styling/Theme'
import Navigations from '../Navigations/Navigations'
import Client from '../Client/Client'
import { Navigation } from '../Navigations'
import { Main } from '../Main'
import { Header } from '../../components/Header'
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

const Content = () => (<div>Content</div>)
const Search = () => (<div>Search</div>)
const ContentHeader = () => (<div>ContentHeader</div>)
const SidePanel = () => (<div>SidePanel</div>)
const SplitView = () => (<div>SplitView</div>)

const Template = ({ minWidth1, maxWidth1, minWidth2, maxWidth2 }) => {
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

  return (
    <Container>
      <Client>
        <Navigations>
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
