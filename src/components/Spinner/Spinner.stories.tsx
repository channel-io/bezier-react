/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/storyUtils'
import Spinner from './Spinner'
import { SpinnerSize } from './Spinner.types'

export default {
  title: getTitle(base),
  component: Spinner,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: [
          SpinnerSize.XL,
          SpinnerSize.L,
          SpinnerSize.M,
          SpinnerSize.S,
          SpinnerSize.XS,
        ],
      },
    },
  },
}

const Template = ({ ...args }) => (
  <Spinner {...args} />

)

export const Primary = Template.bind({})
Primary.args = {
  size: SpinnerSize.M,
}
