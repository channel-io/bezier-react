/* External dependencies */
import React from 'react'

import {
  type Meta,
  type Story,
} from '@storybook/react'
import { base } from 'paths.macro'

/* Internal dependencies */
import { styled } from '~/src/foundation'

import { getTitle } from '~/src/utils/storyUtils'

import { Status } from './Status'
import {
  type StatusProps,
  StatusSize,
  StatusType,
} from './Status.types'

export default {
  title: getTitle(base),
  component: Status,
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: StatusType,
      },
    },
  },
} as Meta

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  background-color: ${({ foundation }) => foundation?.theme?.['bg-grey-light']};
`

const Template: Story<StatusProps> = (args) => (
  <Wrapper>
    <Status {...args} />
  </Wrapper>
)

export const Primary: Story<StatusProps> = Template.bind({})
Primary.args = {
  type: StatusType.Online,
  size: StatusSize.M,
}
