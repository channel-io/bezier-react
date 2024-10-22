import React from 'react'

import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { Loader } from './Loader'
import { type LoaderProps } from './Loader.types'

const meta = {
  component: Loader,
} satisfies Meta<typeof Loader>

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
} satisfies StoryObj<typeof meta>
