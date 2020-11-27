/* External dependencies */
import React from 'react'
import { base } from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/utils'
import { styled } from '../../styling/Theme'
import Navigations from './Navigations'
import Navigation from './Navigation'

export default {
  title: getTitle(base),
  component: Navigations,
}

const Container = styled.div`
  width: 700px;
  height: 400px;
  margin: 0 auto;
  background-color:
`

const NavigationElement1 = styled(Navigation)`
  width: 200px;
  background-color: ${props => props.theme?.colors?.background3};
`

const NavigationElement2 = styled(Navigation)`
  width: 250px;
  background-color: ${props => props.theme?.colors?.background5};
`

const NavItem = styled.div`
  width: 100%;
  height: 30px;
`

const Template = ({ minWidth1, minWidth2 }) => (
  <Container>
    <Navigations>
      <NavigationElement1 minWidth={minWidth1}>
        <NavItem>NavItem1</NavItem>
        <NavItem>NavItem2</NavItem>
        <NavItem>NavItem3</NavItem>
        <NavItem>NavItem4</NavItem>
        <NavItem>NavItem5</NavItem>
      </NavigationElement1>
      <NavigationElement2 minWidth={minWidth2}>
        <NavItem>NavItem1</NavItem>
        <NavItem>NavItem2</NavItem>
        <NavItem>NavItem3</NavItem>
        <NavItem>NavItem4</NavItem>
        <NavItem>NavItem5</NavItem>
      </NavigationElement2>
    </Navigations>
  </Container>
)

export const Primary = Template.bind({})
Primary.args = {
  minWidth1: 100,
  minWidth2: 140,
}
