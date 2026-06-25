import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { SmoothCornersBox } from './SmoothCornersBox'
import { type SmoothCornersBoxProps } from './SmoothCornersBox.types'

const meta: Meta<typeof SmoothCornersBox> = {
  title: 'Beta components/SmoothCornersBox',
  component: SmoothCornersBox,
}

export default meta

const Template: StoryFn<SmoothCornersBoxProps> = ({
  children,
  ...otherSmoothCornersBoxProps
}) => (
  <SmoothCornersBox
    style={{ width: 200, height: 200 }}
    {...otherSmoothCornersBoxProps}
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
      color: 'elevation-large',
    },
    margin: 0,
    backgroundColor: 'fill-absolute-white',
    backgroundImage: '',
  },
}
