/* External dependencies */
import React from 'react'
import { base } from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/utils'
import Checkbox from './Checkbox'
import CheckType from './CheckType'

export default {
  title: getTitle(base),
  component: Checkbox,
  argTypes: {
    onClick: { control: { action: 'onClick' } },
    checked: {
      control: {
        type: 'radio',
        options: [
          CheckType.True,
          CheckType.False,
          CheckType.Partial,
        ],
      },
    },
  },
}

const Template = ({ text, ...otherCheckboxProps }) => (
  <Checkbox {...otherCheckboxProps}>
    Check Me!
  </Checkbox>
)

export const Primary = Template.bind({})
Primary.args = {
  checked: CheckType.True,
  disabled: false,
}
