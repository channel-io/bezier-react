/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/utils'
import Editor from './Editor'

export default {
  title: getTitle(base),
  component: Editor,
}

const Template = (args) => (
  <Editor {...args}/>
)

export const Primary = Template.bind({})
Primary.args = {
  initialBlocks: [{ type: 'text', value: 'hello, world!' }],
}
