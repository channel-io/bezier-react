import React from 'react'

import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import { css } from '~/src/foundation/FoundationStyledComponent'

import { range } from '~/src/utils/numberUtils'

import { AlphaStack } from './AlphaStack'

const FLEX_PROPERTIES = ['start', 'center', 'end', 'stretch']

const meta: Meta<typeof AlphaStack> = {
  component: AlphaStack,
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
}
export default meta

const Template: StoryFn<typeof AlphaStack> = (args) => (
  <AlphaStack {...args}>
    <>
      { range(4).map((i) =>
        <div style={{ height: '30px', width: '30px', backgroundColor: 'red' }} key={`item-${i}`}>{ i }</div>,
      ) }
    </>
  </AlphaStack>
)

export const Primary: StoryObj<typeof AlphaStack> = {
  render: Template,

  args: {
    style: {
      width: '200px',
      height: '200px',
    },
    interpolation: css`
      background-color: blue;
    `,
  },
}
