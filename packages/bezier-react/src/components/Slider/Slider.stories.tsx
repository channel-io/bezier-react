import { type Meta, type StoryObj } from '@storybook/react'

import { Slider } from './Slider'

const meta: Meta<typeof Slider> = {
  component: Slider,
  argTypes: {
    minStepsBetweenThumbs: {
      control: {
        type: 'number',
      },
    },
    onValueChange: {
      action: 'onValueChange',
    },
    onValueCommit: {
      action: 'onValueCommit',
    },
  },
  args: {
    width: 285,
    disabled: false,
    guide: [5],
    min: 0,
    max: 10,
    step: 1,
    disableTooltip: false,
  },
}
export default meta

export const Primary = {
  args: {
    value: [5],
  },
} satisfies StoryObj<typeof meta>

export const Uncontrolled = {
  args: {
    defaultValue: [5],
  },
} satisfies StoryObj<typeof meta>
