/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../../utils/storyUtils'
import Select from './Select'

export default {
  title: getTitle(base),
  component: Select,
}

const Template = (args) => (
  <Select {...args}/>
)

export const Primary = Template.bind({})
Primary.args = {
  placeholder: 'hello',
  text: 'hello',
  iconComponent: 'calendar',
}
