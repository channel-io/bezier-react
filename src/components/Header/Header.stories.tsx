/* External dependencies */
import React from 'react'
import { base } from 'paths.macro'

/* Internal depependencies */
import { styled, Typography } from '../../foundation'
import { getTitle } from '../../utils/etcUtils'
import Header from './Header'

export default {
  title: getTitle(base),
  component: Header,
}

const Container = styled.div`
  width: 600px;
  height: 500px;
  border: 1px solid grey;
`

const Template = ({ ...otherProps }) => (
  <Container>
    <Header
      {...otherProps}

    />
  </Container>
)

export const Primary = Template.bind({})

Primary.args = {
  title: 'Betty',
  titleSize: Typography.Size18,
  titleImageUrl: 'https://picsum.photos/200/300.jpg',
  titleImageSize: 42,
}
