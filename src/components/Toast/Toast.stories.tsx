/* External dependencies */
import React from 'react'
import { base } from 'paths.macro'

/* Internal depependencies */
import { styled } from '../../foundation'
import { getTitle } from '../../utils/etcUtils'
import Toast from './Toast'
import { Placement } from './Toast.types'

export default {
  title: getTitle(base),
  component: Toast,
  argTypes: {
    content: {
      control: {
        type: 'text',
      },
    },
    placement: {
      control: {
        type: 'radio',
        options: [
          Placement.TopCenter,
          Placement.TopLeft,
          Placement.TopRight,
          Placement.BottomCenter,
          Placement.BottomLeft,
          Placement.BottomRight,
        ],
      },
    },
  },
}

const Container = styled.div`
  position: relative;
  width: 600px;
  height: 500px;
  border: 1px solid grey;
`

const Template = ({ ...otherProps }) => (
  <Container>
    <Toast
      {...otherProps}
    />
  </Container>
)

export const Primary = Template.bind({})

Primary.args = {
  placement: 'bottomLeft',
  content: '안내문구입니다.',
}
