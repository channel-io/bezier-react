/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import {
  type Story,
  type Meta,
} from '@storybook/react'

/* Internal dependencies */
import { range } from '~/src/utils/numberUtils'
import { getTitle } from '~/src/utils/storyUtils'
import { css } from '~/src/foundation/FoundationStyledComponent'
import { AlphaStack } from './AlphaStack'
import { type AlphaStackProps } from './AlphaStack.types'

const FLEX_PROPERTIES = ['start', 'center', 'end', 'stretch']

export default {
  title: getTitle(base),
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
        options: ['horizontal', 'vertical'],
      },
    },
    justify: {
      control: {
        type: 'radio',
        options: FLEX_PROPERTIES,
      },
    },
    align: {
      control: {
        type: 'radio',
        options: FLEX_PROPERTIES,
      },
    },
  },
} as Meta<AlphaStackProps>

const Template: Story<AlphaStackProps> = ({ children, ...rest }) => (
  <AlphaStack {...rest}>
    <>
      { range(4).map((i) =>
        <div style={{ height: '30px', width: '30px', backgroundColor: 'red' }} key={`item-${i}`}>{ i }</div>,
      ) }
    </>
  </AlphaStack>
)

export const Primary = Template.bind({})

Primary.args = {
  style: {
    width: '200px',
    height: '200px',
  },
  interpolation: css`background-color: blue;`,
}
