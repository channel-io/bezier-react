import { type Meta, type StoryObj } from '@storybook/react'

import { Checkbox } from '~/src/v3/Checkbox'
import { HStack } from '~/src/v3/HStack'
import { TextArea } from '~/src/v3/TextArea'
import { TextInput } from '~/src/v3/TextInput'
import { VStack } from '~/src/v3/VStack'

import type { FormFieldProps } from './FormField.types'

import {
  FormErrorMessage as BezierFormErrorMessage,
  FormGroup as BezierFormGroup,
  FormHelperText as BezierFormHelperText,
  FormLabel as BezierFormLabel,
  FormField,
} from './index'

const FIELD_WIDTH = 360

const meta: Meta<typeof FormField> = {
  title: 'V3 components/FormField',
  component: FormField,
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

export const Primary: StoryObj<FormFieldProps> = {
  render: (args) => (
    <FormField
      style={{ width: FIELD_WIDTH }}
      {...args}
    >
      <BezierFormLabel help="This is help text.">Email</BezierFormLabel>
      <TextInput placeholder="name@company.com" />
      <BezierFormHelperText>Enter your work email.</BezierFormHelperText>
      <BezierFormErrorMessage>Email is required.</BezierFormErrorMessage>
    </FormField>
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

export const Fields: StoryObj<FormFieldProps> = {
  render: (args) => (
    <VStack
      spacing={20}
      width={FIELD_WIDTH}
    >
      <FormField {...args}>
        <BezierFormLabel help="This is help text.">Email</BezierFormLabel>
        <TextInput placeholder="name@company.com" />
        <BezierFormHelperText>Enter your work email.</BezierFormHelperText>
        <BezierFormErrorMessage>Email is required.</BezierFormErrorMessage>
      </FormField>

      <FormField {...args}>
        <BezierFormLabel>Message</BezierFormLabel>
        <TextArea
          placeholder="Enter a message"
          minRows={3}
          maxRows={3}
        />
        <BezierFormHelperText>Write a short message.</BezierFormHelperText>
        <BezierFormErrorMessage>Message is required.</BezierFormErrorMessage>
      </FormField>

      <FormField {...args}>
        <BezierFormLabel>Notifications</BezierFormLabel>
        <BezierFormGroup direction="horizontal">
          <Checkbox>Email</Checkbox>
          <Checkbox>SMS</Checkbox>
          <Checkbox>Push</Checkbox>
        </BezierFormGroup>
        <BezierFormHelperText>Select at least one channel.</BezierFormHelperText>
        <BezierFormErrorMessage>
          Select a notification channel.
        </BezierFormErrorMessage>
      </FormField>
    </VStack>
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
      <FormField
        {...args}
        labelPosition="top"
      >
        <BezierFormLabel>Top label</BezierFormLabel>
        <TextInput placeholder="Placeholder" />
        <BezierFormHelperText>Description</BezierFormHelperText>
      </FormField>

      <FormField
        {...args}
        labelPosition="left"
      >
        <BezierFormLabel>Left label</BezierFormLabel>
        <TextInput placeholder="Placeholder" />
        <BezierFormHelperText>Description</BezierFormHelperText>
      </FormField>
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
      <FormField
        style={{ width: FIELD_WIDTH }}
        {...args}
        hasError={false}
      >
        <BezierFormLabel>Email</BezierFormLabel>
        <TextInput placeholder="name@company.com" />
        <BezierFormHelperText>Enter your work email.</BezierFormHelperText>
        <BezierFormErrorMessage>Email is required.</BezierFormErrorMessage>
      </FormField>

      <FormField
        style={{ width: FIELD_WIDTH }}
        {...args}
        hasError
      >
        <BezierFormLabel>Email</BezierFormLabel>
        <TextInput placeholder="name@company.com" />
        <BezierFormHelperText>Enter your work email.</BezierFormHelperText>
        <BezierFormErrorMessage>Email is required.</BezierFormErrorMessage>
      </FormField>
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
    <FormField style={{ width: FIELD_WIDTH }}>
      <BezierFormLabel>Notifications</BezierFormLabel>
      <BezierFormGroup
        direction="horizontal"
        spacing={10}
      >
        <Checkbox>Email</Checkbox>
        <Checkbox>SMS</Checkbox>
        <Checkbox>Push</Checkbox>
      </BezierFormGroup>
      <BezierFormHelperText>Select at least one channel.</BezierFormHelperText>
    </FormField>
  ),
}
