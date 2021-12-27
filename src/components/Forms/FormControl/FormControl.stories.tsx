/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import type { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from 'Utils/storyUtils'
import { SegmentedControl } from 'Components/Forms/SegmentedControl'
import { Radio } from 'Components/Forms/Radio'
import { Checkbox } from 'Components/Forms/Checkbox'
import { Text } from 'Components/Text'
import { FormLabel } from 'Components/Forms/FormLabel'
import { TextField } from 'Components/Forms/Inputs/TextField'
import { TextArea } from 'Components/Forms/Inputs/TextArea'
import { Select } from 'Components/Forms/Inputs/Select'
import { FormHelperText, FormErrorMessage } from 'Components/Forms/FormHelperText'
import FormControl from './FormControl'
import FormControlProps from './FormControl.types'

export default {
  title: getTitle(base),
  component: FormControl,
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
  hasError: false,
  disabled: false,
  readOnly: false,
}

const WithMultiFormTemplate: Story<FormControlProps> = ({ hasError, ...args }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    width: 500,
  }}
  >
    <FormControl
      {...args}
      hasError={hasError}
    >
      <FormLabel help="Lorem Ipsum">Label</FormLabel>
      <TextField placeholder="Placeholder" />
      <FormHelperText>Description</FormHelperText>
      <FormErrorMessage>Error!</FormErrorMessage>
    </FormControl>
    <FormControl
      {...args}
      id={`${args.id}-1`}
      hasError={hasError}
    >
      <FormLabel help="Lorem Ipsum">Label</FormLabel>
      <TextArea placeholder="Placeholder" />
      <FormHelperText>Description</FormHelperText>
      <FormErrorMessage>Error!</FormErrorMessage>
    </FormControl>
    <FormControl
      {...args}
      id={`${args.id}-2`}
      hasError={hasError}
    >
      <FormLabel>Label</FormLabel>
      <Select />
    </FormControl>
    <FormControl
      {...args}
      id={`${args.id}-3`}
      hasError={hasError}
    >
      <FormLabel help="Lorem Ipsum">Label</FormLabel>
      <SegmentedControl>
        { ['Open', 'Snoozed', 'Closed'].map((item) => (
          <Text key={item} bold>{ item }</Text>
        )) }
      </SegmentedControl>
      <FormHelperText>Description</FormHelperText>
      <FormErrorMessage>Error!</FormErrorMessage>
    </FormControl>
    <FormControl
      {...args}
      id={`${args.id}-4`}
      hasError={hasError}
    >
      <FormLabel help="Lorem Ipsum">Label</FormLabel>
      <Checkbox>Option</Checkbox>
      <FormHelperText>Description</FormHelperText>
      <FormErrorMessage>Error!</FormErrorMessage>
    </FormControl>
    <FormControl
      {...args}
      id={`${args.id}-5`}
      hasError={hasError}
    >
      <FormLabel help="Lorem Ipsum">Label</FormLabel>
      <Radio>Option</Radio>
      <FormHelperText>Description</FormHelperText>
      <FormErrorMessage>Error!</FormErrorMessage>
    </FormControl>
  </div>
)

export const WithMultiForm: Story<FormControlProps> = WithMultiFormTemplate.bind({})
WithMultiForm.args = {
  id: 'form',
  labelPosition: 'top',
  hasError: false,
  disabled: false,
  readOnly: false,
}
