/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import {
  getObjectFromEnum,
  getTitle,
} from '../../../utils/storyUtils'
import Select from './Select'
import { SelectSize } from './Select.types'

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
}

const Template = (args) => (
  <Select {...args}/>
)

export const Primary = Template.bind({})
Primary.args = {
  placeholder: 'hello',
  text: 'hello',
  iconComponent: 'calendar',
  disabled: false,
  withoutChevron: false,
  hasError: false,
  size: SelectSize.M,
}
