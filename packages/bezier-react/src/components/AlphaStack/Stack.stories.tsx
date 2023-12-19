import React from 'react'

import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import { range } from '~/src/utils/number'

import { Box } from '~/src/components/Box'

import { Stack } from './Stack'

const meta = {
  component: Stack,
} satisfies Meta<typeof Stack>

type Story = StoryObj<typeof meta>

function DecorativeBox() {
  return (
    <Box
      width={50}
      height={50}
      bgColor="bg-black-light"
      borderRadius="8"
      borderWidth={1}
      borderColor="bdr-black-light"
    />
  )
}

const Template: StoryFn<typeof Stack> = (args) => (
  <Stack {...args}>
    { range(4).map((i) => (
      <DecorativeBox key={`item-${i}`} />
    )) }
  </Stack>
)

export const Primary: Story = {
  render: Template,
  args: {
    direction: 'horizontal',
    gap: 6,
  },
}

export default meta
