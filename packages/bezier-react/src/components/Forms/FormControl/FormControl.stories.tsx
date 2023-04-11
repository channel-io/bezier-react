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
  SegmentedControl,
  SegmentedControlItem,
} from '~/src/components/Forms/SegmentedControl'
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
import { Switch } from '~/src/components/Forms/Switch'

import { FormControl } from './FormControl'
import { type FormControlProps } from './FormControl.types'

export default {
  title: getTitle(base),
  component: FormControl,
  argTypes: {
    labelPosition: {
      control: {
        type: 'radio',
        options: ['top', 'left', undefined],
      },
    },
  },
} as Meta

const Template: Story<FormControlProps> = (args) => (
  <FormControl style={{ width: 400 }} {...args}>
    <FormLabel help="Lorem Ipsum">Label</FormLabel>
    <TextField placeholder="Placeholder" />
    <FormHelperText>Description</FormHelperText>
    <FormErrorMessage>Error!</FormErrorMessage>
  </FormControl>
)

export const Primary: Story<FormControlProps> = Template.bind({})
Primary.args = {
  id: 'form',
  labelPosition: 'top',
  leftLabelWrapperHeight: undefined,
  hasError: false,
  disabled: false,
  readOnly: false,
  required: false,
}

const WithMultiFormTemplate: Story<FormControlProps> = (args) => (
  <div style={{
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

export const WithMultiForm: Story<FormControlProps> = WithMultiFormTemplate.bind({})
WithMultiForm.args = {
  labelPosition: 'top',
  leftLabelWrapperHeight: undefined,
  hasError: false,
  disabled: false,
  readOnly: false,
  required: false,
}
