/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/utils'
import Loader from './Loader'
import { SpinnerSize, SpinnerThickness, SpinnerColor } from './Loader.types'

export default {
  title: getTitle(base),
  component: Loader,
  argTypes: {
    isLoading: { control: 'boolean' },
    color: {
      control: {
        type: 'radio',
        options: [
          SpinnerColor.Grey,
          SpinnerColor.White,
          SpinnerColor.Cobalt,
        ],
      },
    },
    size: {
      control: {
        type: 'radio',
        options: [
          SpinnerSize.L,
          SpinnerSize.Normal,
          SpinnerSize.S,
          SpinnerSize.XS,
          SpinnerSize.XXS,
        ],
      },
    },
    thickness: {
      control: {
        type: 'radio',
        options: [
          SpinnerThickness.Bold,
          SpinnerThickness.Normal,
          SpinnerThickness.Light,
        ],
      },
    },
  },
}

const Template = ({ ...args }) => (
  <Loader {...args}>
    <div>
      hi!
    </div>
  </Loader>

)

export const Primary = Template.bind({})
Primary.args = {
  isLoading: true,
  size: SpinnerSize.Normal,
  thickness: SpinnerThickness.Normal,
  color: SpinnerColor.Grey,
}
