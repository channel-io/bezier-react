/* External dependencies */
import React from 'react'

/* Internal dependencies */
import GlobalHeader from './GlobalHeader'

export default {
  title: 'GlobalHeader',
  component: GlobalHeader,
}

const Template = (args) => (
  <GlobalHeader {...args}>
    GlobalHeader
  </GlobalHeader>
)

export const Primary = Template.bind({})
Primary.args = {
  isWindows: false,
}
