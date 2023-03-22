/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from 'Utils/storyUtils'
import { range } from 'Utils/numberUtils'
import { AlphaStack } from './AlphaStack'
import { AlphaStackProps } from './AlphaStack.types'

export default {
  title: getTitle(base),
  component: AlphaStack,
} as Meta<AlphaStackProps>

const Template: Story<AlphaStackProps> = ({ children, ...rest }) => (
  <AlphaStack {...rest} spacing={10}>
    <>
      { range(4).map((_, i) =>
        // eslint-disable-next-line react/no-array-index-key
        <div style={{ height: '30px', width: '30px', backgroundColor: 'red' }} key={`item-${i}`}>{ i }</div>,
      ) }
    </>
  </AlphaStack>
)

export const Vertical = Template.bind({})

Vertical.args = {
  style: {
    width: '200px',
    height: '200px',
  },
  direction: 'vertical',
}

export const Horizontal = Template.bind({})

Horizontal.args = {
  style: {
    width: '200px',
    height: '200px',
  },
  direction: 'horizontal',
}

export const JustifyCenter = Template.bind({})

Horizontal.args = {
  style: {
    width: '200px',
    height: '200px',
  },
  direction: 'horizontal',
  justify: 'center',
}

