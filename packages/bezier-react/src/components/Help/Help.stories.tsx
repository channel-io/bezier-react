/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import type {
  Story,
  Meta,
} from '@storybook/react'

/* Internal dependencies */
import { getTitle } from '~/src/utils/storyUtils'
import Help from './Help'
import type HelpProps from './Help.types'

export default {
  title: getTitle(base),
  component: Help,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

const Template: Story<HelpProps> = props => <Help {...props} />

export const Primary: Story<HelpProps> = Template.bind({})
Primary.args = {
  children: 'Lorem ipsum',
}
