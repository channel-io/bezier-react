import React from 'react'

import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import { css } from '~/src/foundation/FoundationStyledComponent'

import { range } from '~/src/utils/number'

import { Stack } from './Stack'

const FLEX_PROPERTIES = ['start', 'center', 'end', 'stretch']

const meta = {
  component: Stack,
  argTypes: {
    spacing: {
      control: {
        type: 'number',
      },
    },
    direction: {
      control: {
        type: 'radio',
      },
      options: ['horizontal', 'vertical'],
    },
    justify: {
      control: {
        type: 'radio',
      },
      options: FLEX_PROPERTIES,
    },
    align: {
      control: {
        type: 'radio',
      },
      options: FLEX_PROPERTIES,
    },
  },
} satisfies Meta<typeof Stack>

export default meta

type Story = StoryObj<typeof meta>

const Template: StoryFn<typeof Stack> = (args) => (
  <Stack {...args}>
    <>
      { range(4).map((i) =>
        <div style={{ height: '30px', width: '30px', backgroundColor: 'red' }} key={`item-${i}`}>{ i }</div>,
      ) }
    </>
  </Stack>
)

export const Primary: Story = {
  render: Template,

  args: {
    direction: 'vertical',
    style: {
      width: '200px',
      height: '200px',
    },
    interpolation: css`
      background-color: blue;
    `,
  },
}
