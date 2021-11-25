/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import type { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { styled } from '../../foundation'
import { getTitle } from '../../utils/storyUtils'
import Divider from './Divider'
import DividerProps from './Divider.types'

export default {
  title: getTitle(base),
  component: Divider,
  argTypes: {
    orientation: {
      control: {
        type: 'radio',
        options: ['horizontal', 'vertical'],
      },
    },
  },
} as Meta

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
`

const Template: Story<DividerProps> = props => (
  <Wrapper>
    <Divider {...props} />
  </Wrapper>
)

export const Primary: Story<DividerProps> = Template.bind({})
Primary.args = {
  orientation: 'horizontal',
  withoutSideIndent: false,
}
