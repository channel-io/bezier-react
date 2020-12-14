/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/utils'
import { styled } from '../index'

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
}

interface ElevationChipProps {
  ev: string
}

const ElevationChip = styled.div<ElevationChipProps>`
  width: 100px;
  height: 100px;
  ${({ theme, ev }) => theme?.elevation?.[ev]};
  ${({ theme }) => theme?.rounding?.round30};
`

const Template = (args) => (
  <ElevationChip {...args}/>
)

export const Primary = Template.bind({})
Primary.args = {
  ev: 'ev1',
}
