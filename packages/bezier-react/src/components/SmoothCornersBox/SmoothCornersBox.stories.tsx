import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { SmoothCornersBox } from './SmoothCornersBox'
import { type SmoothCornersBoxProps } from './SmoothCornersBox.types'

const meta: Meta = {
  component: SmoothCornersBox,
}

const Template: StoryFn<SmoothCornersBoxProps> = ({
  children,
  ...otherCheckboxProps
}) => (
  <SmoothCornersBox
    style={{ width: 200, height: 200 }}
    {...otherCheckboxProps}
  >
    {children}
  </SmoothCornersBox>
)

export const Primary: StoryObj<SmoothCornersBoxProps> = {
  render: Template,
  args: {
    disabled: false,
    borderRadius: '42%',
    shadow: {
      offsetX: 0,
      offsetY: 4,
      blurRadius: 20,
      spreadRadius: 0,
      color: 'shdw-large',
    },
    margin: 0,
    backgroundColor: 'bgtxt-absolute-white-dark',
    backgroundImage: '',
  },
}

export default meta
