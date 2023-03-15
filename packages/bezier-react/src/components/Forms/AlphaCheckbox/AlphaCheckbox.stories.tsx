/* External dependencies */
import React from 'react'
import { base } from 'paths.macro'
import { Meta, Story } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from 'Utils/storyUtils'
import { CheckboxProps } from './AlphaCheckbox.types'
import { AlphaCheckbox } from './AlphaCheckbox'

export default {
  title: getTitle(base),
  component: AlphaCheckbox,
  argTypes: {
    checked: {
      control: {
        type: 'radio',
        options: [
          true,
          false,
          'indeterminate',
        ],
      },
    },
  },
} as Meta

const ControlledTemplate: Story<CheckboxProps> = ({ children, ...otherCheckboxProps }) => (
  <AlphaCheckbox {...otherCheckboxProps}>
    { children }
  </AlphaCheckbox>
)

export const Controlled = ControlledTemplate.bind({})
Controlled.args = {
  checked: true,
  disabled: false,
  children: 'Option',
}

const UncontrolledTemplate: Story<CheckboxProps> = ({ children, defaultChecked }) => (
  <AlphaCheckbox defaultChecked={defaultChecked}>
    { children }
  </AlphaCheckbox>
)

export const Uncontrolled = UncontrolledTemplate.bind({})
Uncontrolled.args = {
  defaultChecked: true,
  disabled: false,
  children: 'Option',
}
