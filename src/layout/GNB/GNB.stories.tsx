/* External dependencies */
import React from 'react'

/* Internal dependencies */
import GNB from './GNB'

export default {
  title: 'GNB',
  component: GNB,
  decorators: [Story => (
    <div style={{ height: '100vh' }}>
      { Story() }
    </div>
  )],
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = (args) => (
  <GNB {...args}>
    GNB
  </GNB>
)

export const Primary = Template.bind({})
