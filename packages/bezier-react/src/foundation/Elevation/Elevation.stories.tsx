import React from 'react'

import {
  type Meta,
  type Story,
} from '@storybook/react'
import base from 'paths.macro'

import { styled } from '~/src/foundation'

import { getTitle } from '~/src/utils/storyUtils'

export default {
  title: getTitle(base),
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

const Template: Story<ElevationChipProps> = (args) => <ElevationChip {...args} />

export const Primary = Template.bind({})
Primary.args = {
  ev: 'ev1',
}
