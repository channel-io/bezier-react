/* External dependencies */
import React, { useMemo, useRef } from 'react'
import { range } from 'lodash-es'
import { base } from 'paths.macro'

/* Internal dependencies */
import Client from '../Client/Client'
import { getTitle } from '../../utils/utils'
import { styled, Palette } from '../../foundation'
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
  color: ${({ foundation }) => foundation?.theme?.['txt-black-dark']};
`

const Template = ({ onChangeWidth }) => {
  const navigationRef = useRef<NavigationHandles | null>(null)

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
        <Navigations ref={navigationRef} onChangeWidth={onChangeWidth}>
          <NavigationContent
            header={Element1Header}
            withScroll
            layoutOption={{
              initialWidth: 350,
              maxWidth: 400,
              minWidth: 250,
              hidable: true,
            }}
          >
            { range(0, 30).map((val) => (
              <ListItem content={`NavItem - ${val}`} />
            )) }
          </NavigationContent>
          <NavigationContent
            header={Element2Header}
            fixedHeader
            withScroll
            layoutOption={{
              initialWidth: 300,
              maxWidth: 400,
              minWidth: 250,
              hidable: false,
            }}
          >
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
Primary.args = {
  /* eslint-disable-next-line no-console */
  onChangeWidth: console.log,
}
