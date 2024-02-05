import React from 'react'

import type {
  Meta,
  StoryFn,
  StoryObj,
} from '@storybook/react'

import {
  FormErrorMessage,
  FormHelperText,
} from './FormHelperText'
import {
  type FormErrorMessageProps,
  type FormHelperTextProps,
} from './FormHelperText.types'

const meta: Meta<typeof FormHelperText> = {
  component: FormHelperText,
}
export default meta

export const Primary: StoryObj<FormHelperTextProps> = {
  args: {
    id: 'test',
    children: 'Description',
  },
}

const ErrorMessageTemplate: StoryFn<FormErrorMessageProps> = (props) => (
  <FormErrorMessage {...props} />
)

export const ErrorMessage: StoryObj<FormErrorMessageProps> = {
  render: ErrorMessageTemplate,

  args: {
    id: 'test',
    children: 'Error!',
  },
}
