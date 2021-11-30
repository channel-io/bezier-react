/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import type { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from '../../utils/storyUtils'
import FormHelperText from './FormHelperText'
import FormHelperTextProps from './FormHelperText.types'

export default {
  title: getTitle(base),
  component: FormHelperText,
} as Meta

const Template: Story<FormHelperTextProps> = props => <FormHelperText {...props} />

export const Primary: Story<FormHelperTextProps> = Template.bind({})
Primary.args = {
  id: 'test',
  errorMessage: '',
  children: 'Description',
}
