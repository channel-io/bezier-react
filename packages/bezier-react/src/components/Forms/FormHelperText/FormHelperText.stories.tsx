/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import type {
  Story,
  Meta,
} from '@storybook/react'

/* Internal dependencies */
import { getTitle } from '~/src/utils/storyUtils'
import {
  FormHelperText,
  FormErrorMessage,
} from './FormHelperText'
import {
  type FormHelperTextProps,
  type FormErrorMessageProps,
} from './FormHelperText.types'

export default {
  title: getTitle(base),
  component: FormHelperText,
} as Meta

const Template: Story<FormHelperTextProps> = props => <FormHelperText {...props} />

export const Primary: Story<FormHelperTextProps> = Template.bind({})
Primary.args = {
  id: 'test',
  children: 'Description',
}

const ErrorMessageTemplate: Story<FormErrorMessageProps> = props => <FormErrorMessage {...props} />

export const ErrorMessage: Story<FormErrorMessageProps> = ErrorMessageTemplate.bind({})
ErrorMessage.args = {
  id: 'test',
  children: 'Error!',
}
