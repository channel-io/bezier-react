/* External dependencies */
import React from 'react'
import { base } from 'paths.macro'
import { Meta, Story } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from 'Utils/storyUtils'
import { AlphaCheckbox } from './AlphaCheckbox'

export default {
  title: getTitle(base),
  component: AlphaCheckbox,
  argTypes: {
    onClick: { control: { action: 'onClick' } },
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

const Template: Story<any> = ({ children, ...otherCheckboxProps }) => (
  <>
    <AlphaCheckbox {...otherCheckboxProps}>
      { children }
    </AlphaCheckbox>
    <AlphaCheckbox {...otherCheckboxProps} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
  checked: true,
  disabled: false,
  children: 'Check Me!',
}

const UncontrolledTemplate: Story<any> = ({ children }) => (
  <AlphaCheckbox>
    { children }
  </AlphaCheckbox>
)

export const Uncontrolled = UncontrolledTemplate.bind({})
Uncontrolled.args = {
  children: 'Check Me!',
}
