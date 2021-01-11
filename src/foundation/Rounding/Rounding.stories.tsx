/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/utils'
import { styled } from '../index'

export default {
  title: getTitle(base),
  argTypes: {
    round: {
      control: {
        type: 'radio',
        options: [
          'round10',
          'round20',
          'round30',
          'round40',
          'round50',
          'round60',
          'round70',
        ],
      },
    },
  },
}

interface RoundingChipProps {
  round: string
}

const RoundingChip = styled.div<RoundingChipProps>`
  width: 100px;
  height: 100px;
  ${({ foundation, round }) => foundation?.rounding?.[round]};
  ${({ foundation }) => foundation?.elevation?.ev3};
`

const Template = (args) => (
  <RoundingChip {...args}/>
)

export const Primary = Template.bind({})
Primary.args = {
  round: 'round10',
}
