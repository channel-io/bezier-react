/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getObjectFromEnum, getTitle } from 'Utils/storyUtils'
import Select from './Select'
import SelectProps, { SelectSize } from './Select.types'

export default {
  title: getTitle(base),
  component: Select,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: getObjectFromEnum(SelectSize),
      },
    },
  },
} as Meta

const Template: Story<SelectProps> = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
  placeholder: 'hello',
  text: 'hello',
  iconComponent: 'calendar',
  disabled: false,
  readOnly: false,
  withoutChevron: false,
  hasError: false,
  size: SelectSize.M,
}
