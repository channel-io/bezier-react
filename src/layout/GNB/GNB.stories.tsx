/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/etcUtils'
import GNB from './GNB'

export default {
  title: getTitle(base),
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
