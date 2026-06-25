import React from 'react'

import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'


import { Box } from '~/src/beta/Box'
import { Text } from '~/src/beta/Text'
import { range } from '~/src/utils/number'

import { HStack } from './HStack'


const meta = {
  title: 'Beta components/HStack',
  component: HStack,
} satisfies Meta<typeof HStack>

type Story = StoryObj<typeof meta>

function DecorativeBox({ children }: React.PropsWithChildren<{}>) {
  return (
    <Box
      width={50}
      height={50}
      backgroundColor="fill-neutral"
      borderRadius="8"
      borderWidth={1}
      borderColor="border-neutral"
    >
      <Text>{children}</Text>
    </Box>
  )
}

const Template: StoryFn<typeof HStack> = (args) => (
  <HStack
    {...args}
    borderColor="border-neutral"
    borderWidth={1}
  >
    {range(4).map((i) => (
      <DecorativeBox key={`item-${i}`}>{i + 1}</DecorativeBox>
    ))}
  </HStack>
)

export const Primary: Story = {
  render: Template,
  args: {
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
