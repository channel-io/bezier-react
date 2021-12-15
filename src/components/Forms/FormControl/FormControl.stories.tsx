/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import type { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from 'Utils/storyUtils'
import { FormLabel } from 'Components/Forms/FormLabel'
import { TextField } from 'Components/Forms/Inputs/TextField'
import { FormHelperText } from 'Components/Forms/FormHelperText'
import FormControl from './FormControl'
import FormControlProps from './FormControl.types'

export default {
  title: getTitle(base),
  component: FormControl,
} as Meta

const Template: Story<FormControlProps> = (args) => (
  <FormControl {...args}>
    <FormLabel help="Lorem Ipsum">Label</FormLabel>
    <TextField placeholder="Placeholder" />
    <FormHelperText>Helper</FormHelperText>
  </FormControl>
)

export const Primary: Story<FormControlProps> = Template.bind({})
Primary.args = {
  id: 'form',
  labelPosition: 'top',
  hasError: false,
  disabled: false,
  readOnly: false,
}
