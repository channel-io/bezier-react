/* External dependencies */
import React, { useMemo } from 'react'
import { range } from 'lodash-es'
import { base } from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/utils'
import { styled } from '../../styling/Theme'
import Palette from '../../styling/Palette'
import { Icon } from '../../components/Icon'
import { ListItem } from '../../components/List/ListItem'
import { Header } from '../../components/Header'
import { NavigationContent } from './NavigationContent'
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

const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.iconBase};
`

const Template = () => {
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
      <Wrapper>
        <Navigations>
          <NavigationContent header={Element1Header} withScroll>
            { range(0, 30).map((val) => (
              <ListItem content={`NavItem - ${val}`} />
            )) }
          </NavigationContent>
          <NavigationContent header={Element2Header} fixedHeader withScroll>
            { range(0, 30).map((val) => (
              <ListItem content={`NavItem - ${val}`} />
            )) }
          </NavigationContent>
        </Navigations>
      </Wrapper>
    </Container>
  )
}

export const Primary = Template.bind({})
Primary.args = {}
