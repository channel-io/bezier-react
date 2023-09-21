import React from 'react'

import type {
  Meta,
  Story,
} from '@storybook/react'

import { Checkbox } from '~/src/components/Forms/Checkbox'

import FormGroup from './FormGroup'
import type FormGroupProps from './FormGroup.types'

export default {
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
        options: [
          'horizontal',
          'vertical',
        ],
      },
    },
  },
} as Meta

const Template: Story<FormGroupProps> = props => (
  <FormGroup {...props}>
    <Checkbox>Option</Checkbox>
    <Checkbox>Option</Checkbox>
    <Checkbox>Option</Checkbox>
    <Checkbox>Option</Checkbox>
  </FormGroup>
)

export const Primary: Story<FormGroupProps> = Template.bind({})
Primary.args = {
  spacing: 0,
  direction: 'vertical',
}
