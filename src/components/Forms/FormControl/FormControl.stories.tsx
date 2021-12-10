/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import type { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from 'Utils/storyUtils'
import { FormLabel, FormLabelProps } from 'Components/Forms/FormLabel'
import { FormHelperText } from 'Components/Forms/FormHelperText'
import { TextField } from 'Components/Forms/Inputs/TextField'
import FormControl from './FormControl'
import FormControlProps from './FormControl.types'

export default {
  title: getTitle(base),
  component: FormControl,
} as Meta

const Template: Story<FormControlProps & FormLabelProps> = ({ help, hasError, ...args }) => (
  <FormControl
    {...args}
    hasError={hasError}
  >
    <FormLabel help={help}>Label</FormLabel>
    <TextField />
    <FormHelperText>{ hasError ? 'Error!' : 'Helper' }</FormHelperText>
  </FormControl>
)

export const Primary: Story<FormControlProps & FormLabelProps> = Template.bind({})
Primary.args = {
  id: 'form',
  help: 'Lorem Ipsum',
  hasError: false,
}
