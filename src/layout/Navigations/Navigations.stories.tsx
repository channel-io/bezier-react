/* External dependencies */
import React, { useState } from 'react'
import { base } from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/utils'
import { styled } from '../../styling/Theme'
import Palette from '../../styling/Palette'
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
  width: 200px;
  z-index: 400;
  background-color: ${Palette.grey500};
`

const NavItem = styled.div`
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  color: ${Palette.black};

  &:hover {
    background-color:${Palette.grey700};
  }
`

const Template = ({ minWidth1, maxWidth1, minWidth2, maxWidth2 }) => {
  // will be provider
  const [showSidebar, setShowSidebar] = useState(true)

  return (
    <Container>
      <Wrapper>
        <Navigations>
          <NavigationElement1
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            minWidth={minWidth1}
            maxWidth={maxWidth1}
          >
            <NavItem>NavItem1</NavItem>
            <NavItem>NavItem2</NavItem>
            <NavItem>NavItem3</NavItem>
            <NavItem>NavItem4</NavItem>
            <NavItem>NavItem5</NavItem>
          </NavigationElement1>
          <NavigationElement2
            minWidth={minWidth2}
            maxWidth={maxWidth2}
          >
            <NavItem>NavItem1</NavItem>
            <NavItem>NavItem2</NavItem>
            <NavItem>NavItem3</NavItem>
            <NavItem>NavItem4</NavItem>
            <NavItem>NavItem5</NavItem>
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
  minWidth2: 140,
  maxWidth2: 350,
}
