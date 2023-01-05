/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import type { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from '~/src/utils/storyUtils'
import FormLabel from './FormLabel'
import FormLabelProps from './FormLabel.types'

export default {
  title: getTitle(base),
  component: FormLabel,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    help: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

const Template: Story<FormLabelProps> = props => <FormLabel {...props} />

export const Primary: Story<FormLabelProps> = Template.bind({})
Primary.args = {
  htmlFor: 'test',
  help: 'Lorem ipsum',
  children: 'Label',
}
