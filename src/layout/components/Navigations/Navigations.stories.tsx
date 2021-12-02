/* External dependencies */
import React, { useMemo } from 'react'
import { range } from 'lodash-es'
import { base } from 'paths.macro'

/* Internal dependencies */
import Client from '../Client/Client'
import { getTitle } from '../../../utils/storyUtils'
import { styled } from '../../../foundation'
import { Icon } from '../../../components/Icon'
import { ListItem } from '../../../components/ListItem'
import { Header } from '../Header'
import LayoutProvider from '../../LayoutProvider'
import { NavigationContent } from './NavigationContent'
import Navigations from './Navigations'

export default {
  title: getTitle(base),
  component: Navigations,
}

const Container = styled.div`
  width: 700px;
  height: 400px;
  padding: 2px;
  margin: 0 auto;
  border: 2px solid black;
  border-radius: 10px;
`

const StyledIcon = styled(Icon)`
  color: ${({ foundation }) => foundation?.theme?.['txt-black-dark']};
`

const Template = ({ onChangeWidth }) => {
  const DummyActions = useMemo(() => (
    <>
      <StyledIcon name="search" marginRight={10} />
      <StyledIcon name="triangle-updown" />
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
          <NavigationContent
            navigationKey="1"
            header={Element1Header}
            withScroll
            onChangeWidth={onChangeWidth}
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
            navigationKey="2"
            header={Element2Header}
            fixedHeader
            withScroll
            onChangeWidth={onChangeWidth}
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

function LayoutProvidedTemplate(props) {
  return (
    <LayoutProvider initialState={undefined}>
      <Template {...props} />
    </LayoutProvider>
  )
}

export const Primary = LayoutProvidedTemplate.bind({})
Primary.args = {
  /* eslint-disable-next-line no-console */
  onChangeWidth: console.log,
}
