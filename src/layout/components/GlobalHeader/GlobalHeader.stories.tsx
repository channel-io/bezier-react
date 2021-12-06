/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from 'Utils/storyUtils'
import GlobalHeader from './GlobalHeader'
import GlobalHeaderProps from './GlobalHeader.types'

export default {
  title: getTitle(base),
  component: GlobalHeader,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: Story<GlobalHeaderProps> = (args) => (
  <GlobalHeader {...args}>
    GlobalHeader
  </GlobalHeader>
)

export const Primary = Template.bind({})
Primary.args = {
  isWindows: false,
}
