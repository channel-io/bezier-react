/* External dependencies */
import React from 'react'
import { addDecorator } from '@storybook/react'

/* Internal dependencies */
import GNB from './GNB'

export default {
  title: 'GNB',
  component: GNB,
}

const decorator = Story => (
  <div style={{ height: '100vh' }}>
    <Story />
  </div>
)

addDecorator(decorator)

const Template = (args) => (
  <GNB {...args}>
    GNB
  </GNB>
)

export const Primary = Template.bind({})
