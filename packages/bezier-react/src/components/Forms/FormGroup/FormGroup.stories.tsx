/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import type { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from 'Utils/storyUtils'
import { Checkbox } from 'Components/Forms/Checkbox'
import FormGroup from './FormGroup'
import FormGroupProps from './FormGroup.types'

export default {
  title: getTitle(base),
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
  spacing: 6,
  direction: 'vertical',
}
