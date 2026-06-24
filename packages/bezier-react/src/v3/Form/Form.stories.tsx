import { type Meta, type StoryObj } from '@storybook/react'

import { Checkbox } from '~/src/v3/Checkbox'
import { HStack } from '~/src/v3/HStack'
import { TextArea } from '~/src/v3/TextArea'
import { TextInput } from '~/src/v3/TextInput'
import { VStack } from '~/src/v3/VStack'

import type { FormFieldProps, FormProps } from './Form.types'

import {
  FormErrorMessage as BezierFormErrorMessage,
  FormField as BezierFormField,
  FormGroup as BezierFormGroup,
  FormHelperText as BezierFormHelperText,
  FormLabel as BezierFormLabel,
  Form,
} from './index'

const FIELD_WIDTH = 360

const meta: Meta<FormProps & FormFieldProps> = {
  title: 'V3 components/Form',
  component: Form,
  argTypes: {
    labelPosition: {
      control: {
        type: 'radio',
      },
      options: ['top', 'left'],
    },
    size: {
      control: {
        type: 'radio',
      },
      options: ['m', 'l'],
    },
  },
}

export default meta

export const Primary: StoryObj<FormProps & FormFieldProps> = {
  render: (args) => (
    <Form style={{ width: FIELD_WIDTH }}>
      <BezierFormField
        labelPosition={args.labelPosition}
        size={args.size}
        hasError={args.hasError}
        disabled={args.disabled}
        readOnly={args.readOnly}
        required={args.required}
      >
        <BezierFormLabel help="This is help text.">Email</BezierFormLabel>
        <TextInput placeholder="name@company.com" />
        <BezierFormHelperText>Enter your work email.</BezierFormHelperText>
        <BezierFormErrorMessage>Email is required.</BezierFormErrorMessage>
      </BezierFormField>

      <BezierFormField
        labelPosition={args.labelPosition}
        size={args.size}
        hasError={args.hasError}
        disabled={args.disabled}
        readOnly={args.readOnly}
        required={args.required}
      >
        <BezierFormLabel>Message</BezierFormLabel>
        <TextArea
          placeholder="Enter a message"
          minRows={3}
          maxRows={3}
        />
        <BezierFormHelperText>Write a short message.</BezierFormHelperText>
        <BezierFormErrorMessage>Message is required.</BezierFormErrorMessage>
      </BezierFormField>

      <BezierFormField
        labelPosition={args.labelPosition}
        size={args.size}
        hasError={args.hasError}
        disabled={args.disabled}
        readOnly={args.readOnly}
        required={args.required}
      >
        <BezierFormLabel>Notifications</BezierFormLabel>
        <BezierFormGroup direction="horizontal">
          <Checkbox>Email</Checkbox>
          <Checkbox>SMS</Checkbox>
          <Checkbox>Push</Checkbox>
        </BezierFormGroup>
        <BezierFormHelperText>
          Select at least one channel.
        </BezierFormHelperText>
        <BezierFormErrorMessage>
          Select a notification channel.
        </BezierFormErrorMessage>
      </BezierFormField>
    </Form>
  ),

  args: {
    labelPosition: 'top',
    size: 'm',
    hasError: false,
    disabled: false,
    readOnly: false,
    required: false,
  },
}

export const LabelPosition: StoryObj<FormFieldProps> = {
  render: (args) => (
    <VStack
      spacing={20}
      width={FIELD_WIDTH}
    >
      <BezierFormField
        {...args}
        labelPosition="top"
      >
        <BezierFormLabel>Top label</BezierFormLabel>
        <TextInput placeholder="Placeholder" />
        <BezierFormHelperText>Description</BezierFormHelperText>
      </BezierFormField>

      <BezierFormField
        {...args}
        labelPosition="left"
      >
        <BezierFormLabel>Left label</BezierFormLabel>
        <TextInput placeholder="Placeholder" />
        <BezierFormHelperText>Description</BezierFormHelperText>
      </BezierFormField>
    </VStack>
  ),

  args: {
    size: 'm',
    hasError: false,
    disabled: false,
    readOnly: false,
    required: false,
  },

  argTypes: {
    labelPosition: {
      table: {
        disable: true,
      },
    },
  },
}

export const Error: StoryObj<FormFieldProps> = {
  render: (args) => (
    <HStack
      spacing={16}
      align="start"
    >
      <BezierFormField
        style={{ width: FIELD_WIDTH }}
        {...args}
        hasError={false}
      >
        <BezierFormLabel>Email</BezierFormLabel>
        <TextInput placeholder="name@company.com" />
        <BezierFormHelperText>Enter your work email.</BezierFormHelperText>
        <BezierFormErrorMessage>Email is required.</BezierFormErrorMessage>
      </BezierFormField>

      <BezierFormField
        style={{ width: FIELD_WIDTH }}
        {...args}
        hasError
      >
        <BezierFormLabel>Email</BezierFormLabel>
        <TextInput placeholder="name@company.com" />
        <BezierFormHelperText>Enter your work email.</BezierFormHelperText>
        <BezierFormErrorMessage>Email is required.</BezierFormErrorMessage>
      </BezierFormField>
    </HStack>
  ),

  args: {
    labelPosition: 'top',
    size: 'm',
    disabled: false,
    readOnly: false,
    required: false,
  },

  argTypes: {
    hasError: {
      table: {
        disable: true,
      },
    },
  },
}

export const FormField: StoryObj<FormFieldProps> = {
  render: (args) => (
    <BezierFormField
      style={{ width: FIELD_WIDTH }}
      {...args}
    >
      <BezierFormLabel help="This is help text.">Email</BezierFormLabel>
      <TextInput placeholder="name@company.com" />
      <BezierFormHelperText>Enter your work email.</BezierFormHelperText>
      <BezierFormErrorMessage>Email is required.</BezierFormErrorMessage>
    </BezierFormField>
  ),

  args: {
    labelPosition: 'top',
    size: 'm',
    hasError: false,
    disabled: false,
    readOnly: false,
    required: false,
  },
}

export const FormLabel = {
  render: () => (
    <BezierFormLabel help="This is help text.">Label</BezierFormLabel>
  ),
}

export const FormHelperText = {
  render: () => (
    <BezierFormHelperText>
      This text provides additional context for the field.
    </BezierFormHelperText>
  ),
}

export const FormErrorMessage = {
  render: () => (
    <BezierFormErrorMessage>This field is required.</BezierFormErrorMessage>
  ),
}

export const FormGroup = {
  render: () => (
    <BezierFormField style={{ width: FIELD_WIDTH }}>
      <BezierFormLabel>Notifications</BezierFormLabel>
      <BezierFormGroup direction="horizontal">
        <Checkbox>Email</Checkbox>
        <Checkbox>SMS</Checkbox>
        <Checkbox>Push</Checkbox>
      </BezierFormGroup>
      <BezierFormHelperText>Select at least one channel.</BezierFormHelperText>
    </BezierFormField>
  ),
}
