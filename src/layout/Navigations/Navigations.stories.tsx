/* External dependencies */
import React, { useMemo, useState } from 'react'
import { base } from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/utils'
import { styled } from '../../styling/Theme'
import Palette from '../../styling/Palette'
import { Icon } from '../../components/Icon'
import { ListItem } from '../../components/List/ListItem'
import { NavigationHeader } from '../NavigationHeader'
import { Div } from '../../worklets/smoothCorners/smoothCorners.styled'
import Text from '../../components/Text/Text.styled'
import Typography from '../../styling/Typography'
import Navigation from './Navigation'
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

const NavigationElement1 = styled(Navigation)`
  width: 200px;
  z-index: 500;
`

const NavigationElement2 = styled(Navigation)`
  width: 300px;
  z-index: 400;
  background-color: ${Palette.grey500};
`

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Template = ({ minWidth1, maxWidth1, minWidth2, maxWidth2 }) => {
  // will be provider
  const [showSidebar, setShowSidebar] = useState(true)

  const DummyProfile = useMemo(() => (
    <ProfileWrapper>
      <Div width={40} height={40} />
      <Text typo={Typography.Size16}>Betty</Text>
    </ProfileWrapper>
  ), [])

  const DummyActions = useMemo(() => (
    <>
      <Icon name="home" />
      <Icon name="email"/>
    </>
  ), [])

  const Element1Header = useMemo(() => (
    <NavigationHeader title="Title" />
  ), [])

  const Element2Header = useMemo(() => (
    <NavigationHeader title={DummyProfile} actions={DummyActions}/>
  ), [DummyProfile, DummyActions])

  return (
    <Container>
      <Wrapper>
        <Navigations>
          <NavigationElement1
            header={Element1Header}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
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
          >
            <ListItem content="NavItem1" />
            <ListItem content="NavItem2" />
            <ListItem content="NavItem3" />
            <ListItem content="NavItem4" />
            <ListItem content="NavItem5" />
            <ListItem content="NavItem6" />
            <ListItem content="NavItem7" />
          </NavigationElement2>
        </Navigations>
      </Wrapper>
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
