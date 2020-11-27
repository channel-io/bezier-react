/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { styled } from '../Theme'
import { getTitle } from '../../utils/utils'
import Elevation from './index'

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

  ${({ ev }) => {
    switch (ev) {
      case 'ev60':
        return Elevation.ev60
      case 'ev50':
        return Elevation.ev50
      case 'ev40':
        return Elevation.ev40
      case 'ev30':
        return Elevation.ev30
      case 'ev20':
        return Elevation.ev20
      case 'ev10':
        return Elevation.ev10
      case 'ev0':
      default:
        return Elevation.ev0
    }
  }};
`

const Template = (args) => (
  <ElevationChip {...args}/>
)

export const Primary = Template.bind({})
Primary.args = {
  ev: 'ev0',
}
