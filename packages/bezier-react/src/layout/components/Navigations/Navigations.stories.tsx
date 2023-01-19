/* External dependencies */
import React, { useMemo } from 'react'
import { range } from 'lodash-es'
import { base } from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { styled } from '~/src/foundation'
import { getTitle } from '~/src/utils/storyUtils'
import { Icon, SearchIcon, TriangleUpdownIcon } from '~/src/components/Icon'
import { ListItem } from '~/src/components/ListItem'
import { Client } from '~/src/layout/components/Client'
import { Header } from '~/src/layout/components/Header'
import LayoutProvider from '~/src/layout/LayoutProvider'
import { NavigationContent } from './NavigationContent'
import Navigations from './Navigations'

export default {
  title: getTitle(base),
  component: Navigations,
} as Meta

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

interface TemplateProps {
  onChangeWidth: () => void
}

const Template = ({ onChangeWidth }: TemplateProps) => {
  const DummyActions = useMemo(() => (
    <>
      <StyledIcon source={SearchIcon} marginRight={10} />
      <StyledIcon source={TriangleUpdownIcon} />
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
              <ListItem
                key={val}
                content={`NavItem - ${val}`}
              />
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
              <ListItem key={val} content={`NavItem - ${val}`} />
            )) }
          </NavigationContent>
        </Navigations>
      </Client>
    </Container>
  )
}

const LayoutProvidedTemplate: Story<TemplateProps> = (args) => (
  <LayoutProvider initialState={{}}>
    <Template {...args} />
  </LayoutProvider>
)

export const Primary = LayoutProvidedTemplate.bind({})
Primary.args = {
  /* eslint-disable-next-line no-console */
  onChangeWidth: console.log,
}
