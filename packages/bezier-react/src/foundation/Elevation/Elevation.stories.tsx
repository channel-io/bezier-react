import React from 'react'

import {
  type Meta,
  type StoryFn,
} from '@storybook/react'

import { styled } from '~/src/foundation'

export default {
  title: 'Foundation/Elevation',
  argTypes: {
    ev: {
      control: {
        type: 'radio',
        options: [
          'ev1',
          'ev2',
          'ev3',
          'ev4',
          'ev5',
          'ev6',
        ],
      },
    },
  },
} as Meta

interface ElevationChipProps {
  ev: string
}

const ElevationChip = styled.div<ElevationChipProps>`
  width: 100px;
  height: 100px;
  ${({ foundation, ev }) => foundation?.elevation?.[ev]};
  ${({ foundation }) => foundation?.rounding?.round16};
`

const Template: StoryFn<ElevationChipProps> = (args) => (
  <ElevationChip {...args} />
)

export const Primary = {
  render: Template,

  args: {
    ev: 'ev1',
  },
}
