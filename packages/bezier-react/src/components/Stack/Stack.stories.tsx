import React from 'react'

import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import { range } from '~/src/utils/number'

import { Box } from '~/src/components/Box'
import { Text } from '~/src/components/Text'

import { Stack } from './Stack'

const meta = {
  component: Stack,
} satisfies Meta<typeof Stack>

type Story = StoryObj<typeof meta>

function DecorativeBox({ children }) {
  return (
    <Box
      width={50}
      height={50}
      backgroundColor="bg-black-light"
      borderRadius="8"
      borderWidth={1}
      borderColor="bdr-black-light"
    >
      <Text>
        { children }
      </Text>
    </Box>
  )
}

const Template: StoryFn<typeof Stack> = (args) => (
  <Stack
    {...args}
    borderColor="bdr-black-dark"
    borderWidth={1}
  >
    { range(4).map((i) => (
      <DecorativeBox key={`item-${i}`}>{ i + 1 }</DecorativeBox>
    )) }
  </Stack>
)

export const Primary: Story = {
  render: Template,
  args: {
    direction: 'horizontal',
    justify: 'start',
    align: 'start',
    reverse: false,
    wrap: true,
    width: 300,
    height: 300,
    spacing: 6,
  },
}

export default meta
