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
          'Round10',
          'Round20',
          'Round30',
          'Round40',
          'Round50',
          'Round60',
          'Round70',
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
  ${props => props.theme?.elevation?.ev20};
  ${({ theme, round }) => theme?.rounding?.[round]};
`

const Template = (args) => (
  <RoundingChip {...args}/>
)

export const Primary = Template.bind({})
Primary.args = {
  round: 'Round10',
}
