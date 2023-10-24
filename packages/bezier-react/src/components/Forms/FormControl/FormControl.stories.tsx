import React from 'react'

import type {
  Meta,
  StoryFn,
  StoryObj,
} from '@storybook/react'

import { Checkbox } from '~/src/components/Forms/Checkbox'
import { FormGroup } from '~/src/components/Forms/FormGroup'
import {
  FormErrorMessage,
  FormHelperText,
} from '~/src/components/Forms/FormHelperText'
import { FormLabel } from '~/src/components/Forms/FormLabel'
import { Select } from '~/src/components/Forms/Inputs/Select'
import { TextArea } from '~/src/components/Forms/Inputs/TextArea'
import { TextField } from '~/src/components/Forms/Inputs/TextField'
import {
  Radio,
  RadioGroup,
} from '~/src/components/Forms/RadioGroup'
import {
  SegmentedControl,
  SegmentedControlItem,
} from '~/src/components/Forms/SegmentedControl'
import { Switch } from '~/src/components/Forms/Switch'

import { FormControl } from './FormControl'
import { type FormControlProps } from './FormControl.types'

const meta: Meta<typeof FormControl> = {
  component: FormControl,
  argTypes: {
    labelPosition: {
      control: {
        type: 'radio',
      },
      options: ['top', 'left', undefined],
    },
  },
}
export default meta

const Template: StoryFn<FormControlProps> = (args) => (
  <FormControl style={{ width: 400 }} {...args}>
    <FormLabel help="Lorem Ipsum">Label</FormLabel>
    <TextField placeholder="Placeholder" />
    <FormHelperText>Description</FormHelperText>
    <FormErrorMessage>Error!</FormErrorMessage>
  </FormControl>
)

export const Primary: StoryObj<FormControlProps> = {
  render: Template,

  args: {
    id: 'form',
    labelPosition: 'top',
    leftLabelWrapperHeight: undefined,
    hasError: false,
    disabled: false,
    readOnly: false,
    required: false,
  },
}

const WithMultiFormTemplate: StoryFn<FormControlProps> = (args) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      width: 500,
    }}
  >
    <FormControl {...args}>
      <FormLabel help="Lorem Ipsum">Label</FormLabel>
      <TextField placeholder="Placeholder" />
      <FormHelperText>Description</FormHelperText>
      <FormErrorMessage>Error!</FormErrorMessage>
    </FormControl>

    <FormControl {...args}>
      <FormLabel help="Lorem Ipsum">Label</FormLabel>
      <TextArea placeholder="Placeholder" />
      <FormHelperText>Description</FormHelperText>
      <FormErrorMessage>Error!</FormErrorMessage>
    </FormControl>

    <FormControl {...args}>
      <FormLabel>Label</FormLabel>
      <Select />
    </FormControl>

    <FormControl {...args}>
      <FormLabel help="Lorem Ipsum">Label</FormLabel>
      <SegmentedControl>
        { ['Open', 'Snoozed', 'Closed'].map((item) => (
          <SegmentedControlItem
            key={item}
            value={item}
          >
            { item }
          </SegmentedControlItem>
        )) }
      </SegmentedControl>
      <FormHelperText>Description</FormHelperText>
      <FormErrorMessage>Error!</FormErrorMessage>
    </FormControl>

    <FormControl {...args}>
      <FormLabel help="Lorem Ipsum">Label</FormLabel>
      <FormGroup direction="horizontal" spacing={10}>
        <Checkbox>Option</Checkbox>
        <Checkbox>Option</Checkbox>
        <Checkbox>Option</Checkbox>
        <Checkbox>Option</Checkbox>
      </FormGroup>
      <FormHelperText>Description</FormHelperText>
      <FormErrorMessage>Error!</FormErrorMessage>
    </FormControl>

    <FormControl {...args}>
      <FormLabel>Theme Setting</FormLabel>
      <RadioGroup>
        <Radio value="system">System Preference</Radio>
        <Radio value="light">Light Theme</Radio>
        <Radio value="dark">Dark Theme</Radio>
      </RadioGroup>
      <FormHelperText>Description</FormHelperText>
      <FormErrorMessage>Error!</FormErrorMessage>
    </FormControl>

    <FormControl {...args}>
      <FormLabel help="Lorem Ipsum">Label</FormLabel>
      <Switch />
      <FormHelperText>Description</FormHelperText>
      <FormErrorMessage>Error!</FormErrorMessage>
    </FormControl>
  </div>
)

export const WithMultiForm: StoryObj<FormControlProps> = {
  render: WithMultiFormTemplate,

  args: {
    labelPosition: 'top',
    leftLabelWrapperHeight: undefined,
    hasError: false,
    disabled: false,
    readOnly: false,
    required: false,
  },
}
