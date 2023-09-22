import React from 'react'

import type {
  Meta,
  StoryFn,
  StoryObj,
} from '@storybook/react'

import { Checkbox } from '~/src/components/Forms/Checkbox'

import FormGroup from './FormGroup'
import type FormGroupProps from './FormGroup.types'

const meta: Meta<typeof FormGroup> = {
  component: FormGroup,
  argTypes: {
    spacing: {
      control: {
        type: 'number',
      },
    },
    direction: {
      control: {
        type: 'radio',
        options: ['horizontal', 'vertical'],
      },
    },
  },
}
export default meta

const Template: StoryFn<FormGroupProps> = (props) => (
  <FormGroup {...props}>
    <Checkbox>Option</Checkbox>
    <Checkbox>Option</Checkbox>
    <Checkbox>Option</Checkbox>
    <Checkbox>Option</Checkbox>
  </FormGroup>
)

export const Primary: StoryObj<FormGroupProps> = {
  render: Template,

  args: {
    spacing: 0,
    direction: 'vertical',
  },
}
