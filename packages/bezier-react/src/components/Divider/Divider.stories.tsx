import React from 'react'

import type { Meta, StoryFn, StoryObj } from '@storybook/react'

import { ListItem } from '~/src/components/ListItem'
import { Stack } from '~/src/components/Stack'

import { Divider } from './Divider'
import { type DividerProps } from './Divider.types'

const meta = {
  component: Divider,
  argTypes: {
    orientation: {
      control: {
        type: 'radio',
      },
      options: ['horizontal', 'vertical'],
    },
    withoutSideIndent: {
      control: {
        type: 'boolean',
      },
    },
    withoutParallelIndent: {
      control: {
        type: 'boolean',
      },
    },
    withoutIndent: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof Divider>

export default meta

const Template: StoryFn<DividerProps> = (props) => (
  <Stack
    direction="vertical"
    align="center"
    justify="center"
    width={200}
    height={200}
  >
    <Divider {...props} />
  </Stack>
)

export const Primary: StoryObj<DividerProps> = {
  render: Template,

  args: {
    orientation: 'horizontal',
  },
}

const CompositionTemplate: StoryFn<DividerProps> = ({
  orientation,
  ...rest
}) => (
  <Stack
    direction={orientation === 'horizontal' ? 'vertical' : 'horizontal'}
    align="center"
    justify="center"
    width={200}
    height={200}
  >
    <ListItem content="Channel" />
    <Divider
      orientation={orientation}
      {...rest}
    />
    <ListItem content="Bezier" />
  </Stack>
)

export const Composition: StoryObj<DividerProps> = {
  render: CompositionTemplate,

  args: {
    orientation: 'horizontal',
  },
}
