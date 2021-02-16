/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/etcUtils'
import GlobalHeader from './GlobalHeader'

export default {
  title: getTitle(base),
  component: GlobalHeader,
  parameters: {
    layout: 'fullscreen',
  },
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
