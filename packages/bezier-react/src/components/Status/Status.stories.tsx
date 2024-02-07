import React from 'react'

import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import { Center } from '~/src/components/Center'

import { Status } from './Status'
import { type StatusProps } from './Status.types'

const meta:Meta<typeof Status> = {
  component: Status,
}

export default meta

const Template: StoryFn<StatusProps> = (args) => (
  <Center
    width={200}
    height={200}
    backgroundColor="bg-grey-light"
  >
    <Status {...args} />
  </Center>
)

export const Primary: StoryObj<StatusProps> = {
  render: Template,

  args: {
    type: 'Online',
    size: 'm',
  },
}
