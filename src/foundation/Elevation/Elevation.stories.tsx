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
          'ev0',
          'ev10',
          'ev20',
          'ev30',
          'ev40',
          'ev50',
          'ev60',
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
`

const Template = (args) => (
  <ElevationChip {...args}/>
)

export const Primary = Template.bind({})
Primary.args = {
  ev: 'ev0',
}
