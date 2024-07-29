import React from 'react'

import { type Meta, type StoryFn } from '@storybook/react'

import { Loader } from './Loader'
import { type LoaderProps } from './Loader.types'

const meta: Meta<typeof Loader> = {
  component: Loader,
}

export default meta

const Template: StoryFn<LoaderProps> = ({ ...args }) => <Loader {...args} />

export const Primary = {
  render: Template,

  args: {
    size: 'm',
    variant: 'secondary',
  },
  parameters: {
    design: {
      type: 'link',
      url: 'https://www.figma.com/design/KyhPPZeeC0JBmTclJGe3nn/Status?node-id=6-69&t=aiOXLQegb05Jiqqg-1',
    },
  },
}
