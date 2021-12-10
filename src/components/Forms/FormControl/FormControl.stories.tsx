/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import type { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from 'Utils/storyUtils'
import { TextField } from 'Components/Forms/Inputs/TextField'
import FormControl from './FormControl'
import FormControlProps from './FormControl.types'

export default {
  title: getTitle(base),
  component: FormControl,
} as Meta

const Template: Story<FormControlProps> = (args) => (
  <FormControl {...args}>
    <TextField />
  </FormControl>
)

export const Primary: Story<FormControlProps> = Template.bind({})
Primary.args = {
  id: 'form',
  label: '123',
  help: 'Lorem Ipsum',
  hasError: false,
  helperText: 'Helper',
  errorMessage: 'Error!',
}
