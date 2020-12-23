/* External dependencies */
import React, { useMemo, useState } from 'react'
import { base } from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/utils'
import { styled } from '../../styling/Theme'
import Palette from '../../styling/Palette'
import { Icon } from '../../components/Icon'
import { ListItem } from '../../components/List/ListItem'
import { Header } from '../../components/Header'
import { NavigationArea } from './NavigationArea'
import Navigations from './Navigations'

export default {
  title: getTitle(base),
  component: Navigations,
}

const Container = styled.div`
  width: 700px;
  height: 400px;
  margin: 0 auto;
  padding: 2px;
  border: 2px solid ${Palette.grey100};
  border-radius: 10px;
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  border-radius: 10px;
`

const NavigationElement1 = styled(NavigationArea)`
  width: 200px;
  z-index: 500;
`

const NavigationElement2 = styled(NavigationArea)`
  width: 300px;
  z-index: 400;
  background-color: ${({ theme }) => theme.colors.background0};
  border-right: 2px solid ${({ theme }) => theme.colors.border2};
`

const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.iconBase};
`

const Template = ({ minWidth1, maxWidth1, minWidth2, maxWidth2 }) => {
  // will be provider
  const [showSidebar, setShowSidebar] = useState(true)

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
    <>
      <button type="button" onClick={() => setShowSidebar(true)}>사이드바 열기</button>
      <Container>
        <Wrapper>
          <Navigations>
            <NavigationElement1
              header={Element1Header}
              show={showSidebar}
              setShow={setShowSidebar}
              minWidth={minWidth1}
              maxWidth={maxWidth1}
            >
              <ListItem content="NavItem1" />
              <ListItem content="NavItem2" />
              <ListItem content="NavItem3" />
              <ListItem content="NavItem4" />
              <ListItem content="NavItem5" />
              <ListItem content="NavItem6" />
              <ListItem content="NavItem7" />
            </NavigationElement1>
            <NavigationElement2
              header={Element2Header}
              minWidth={minWidth2}
              maxWidth={maxWidth2}
              withScroll
              fixedHeader
            >
              <ListItem content="NavItem1" />
              <ListItem content="NavItem2" />
              <ListItem content="NavItem3" />
              <ListItem content="NavItem4" />
              <ListItem content="NavItem5" />
              <ListItem content="NavItem6" />
              <ListItem content="NavItem7" />
              <ListItem content="NavItem4" />
              <ListItem content="NavItem5" />
              <ListItem content="NavItem6" />
              <ListItem content="NavItem7" />
              <ListItem content="NavItem4" />
              <ListItem content="NavItem5" />
              <ListItem content="NavItem6" />
              <ListItem content="NavItem7" />
            </NavigationElement2>
          </Navigations>
        </Wrapper>
      </Container>
    </>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  minWidth1: 100,
  maxWidth1: 300,
  minWidth2: 200,
  maxWidth2: 450,
}
