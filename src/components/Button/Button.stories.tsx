/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/utils'
import Button from './Button'

export default {
  title: getTitle(base),
  comopnent: Button,
}

const Template = (args) => <Button {...args}/>

export const Primary = Template.bind({})
