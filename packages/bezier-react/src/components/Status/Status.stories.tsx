import React from 'react'

import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import { styled } from '~/src/foundation'

import { Status } from './Status'
import {
  type StatusProps,
  StatusSize,
  StatusType,
} from './Status.types'

const meta:Meta<typeof Status> = {
  component: Status,
  argTypes: {
    type: {
      control: {
        type: 'radio',
      },
      options: StatusType,
    },
  },
}
export default meta

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  background-color: ${({ foundation }) => foundation?.theme?.['bg-grey-light']};
`

const Template: StoryFn<StatusProps> = (args) => (
  <Wrapper>
    <Status {...args} />
  </Wrapper>
)

export const Primary: StoryObj<StatusProps> = {
  render: Template,

  args: {
    type: StatusType.Online,
    size: StatusSize.M,
  },
}
