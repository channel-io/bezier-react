/* External dependencies */
import React, { useMemo, useRef } from 'react'
import { range } from 'lodash-es'
import { base } from 'paths.macro'

/* Internal dependencies */
import Client from '../Client/Client'
import { SideState } from '../Client/Client.types'
import { LayoutState } from '../Client/utils/LayoutReducer'
import { getTitle } from '../../utils/utils'
import { styled } from '../../styling/Theme'
import Palette from '../../styling/Palette'
import { Icon } from '../../components/Icon'
import { ListItem } from '../../components/List/ListItem'
import { Header } from '../../components/Header'
import { NavigationContent } from './NavigationContent'
import Navigations, { NavigationHandles } from './Navigations'

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

const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.iconBase};
`

const Template = () => {
  const navigationRef = useRef<NavigationHandles | null>(null)

  const layoutInitialState: LayoutState = {
    contentMinWidth: 330,
    sideState: SideState.SidePanel,
    sideWidth: 332,
    sideMinWidth: 320,
    sideMaxWidth: 1000,
    navigations: [
      {
        initialWidth: 200,
        minWidth: 150,
        maxWidth: 300,
        hidable: true,
      },
      {
        initialWidth: 250,
        minWidth: 200,
        maxWidth: 300,
        hidable: false,
      },
    ],
    showNavigation: true,
    navigationRef,
    withoutSearch: false, // TODO(@mong) 해당 필드 추가 적용
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

  return (
    <Container>
      <Client layoutInitialState={layoutInitialState} >
        <Navigations ref={navigationRef}>
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
      </Client>
    </Container>
  )
}

export const Primary = Template.bind({})
Primary.args = {}
