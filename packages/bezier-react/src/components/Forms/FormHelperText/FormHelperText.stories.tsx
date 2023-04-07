import React from 'react'

import type {
  Meta,
  Story,
} from '@storybook/react'
import base from 'paths.macro'

import { getTitle } from '~/src/utils/storyUtils'

import {
  FormErrorMessage,
  FormHelperText,
} from './FormHelperText'
import {
  type FormErrorMessageProps,
  type FormHelperTextProps,
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
