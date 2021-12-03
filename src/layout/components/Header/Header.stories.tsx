/* External dependencies */
import React from 'react'
import { base } from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal depependencies */
import { styled, Typography } from '../../../foundation'
import { getTitle } from '../../../utils/storyUtils'
import Header from './Header'
import HeaderProps from './Header.types'

export default {
  title: getTitle(base),
  component: Header,
} as Meta

const Container = styled.div`
  width: 600px;
  height: 500px;
  border: 1px solid grey;
`

const Template: Story<HeaderProps> = (args) => (
  <Container>
    <Header {...args} />
  </Container>
)

export const Primary = Template.bind({})

Primary.args = {
  title: 'Betty',
  titleSize: Typography.Size18,
  titleImageUrl: 'https://picsum.photos/200/300.jpg',
  titleImageSize: 42,
}
