import React from 'react'

import {
  type Meta,
  type StoryFn,
} from '@storybook/react'

import { styled } from '~/src/foundation'

const meta: Meta = {
  title: 'Foundation/Rounding',
  argTypes: {
    round: {
      control: {
        type: 'radio',
        options: [
          'round3',
          'round4',
          'round6',
          'round8',
          'round12',
          'round16',
          'round20',
          'round32',
        ],
      },
    },
  },
}
export default meta

interface RoundingChipProps {
  round: string
}

const RoundingChip = styled.div<RoundingChipProps>`
  width: 100px;
  height: 100px;
  ${({ foundation, round }) => foundation?.rounding?.[round]};
  ${({ foundation }) => foundation?.elevation?.ev3()};
`

const Template: StoryFn<RoundingChipProps> = (args) => (
  <RoundingChip {...args} />
)

export const Primary = {
  render: Template,

  args: {
    round: 'round4',
  },
}
