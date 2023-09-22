import { type Meta } from '@storybook/react'

import { Slider } from './Slider'

const meta: Meta<typeof Slider> = {
  component: Slider,
  argTypes: {
    value: {
      control: {
        type: 'array',
      },
    },
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
}
export default meta

export const Primary = {
  args: {
    width: 285,
    defaultValue: [5],
    value: undefined,
    disabled: false,
    guide: [5],
    min: 0,
    max: 10,
    step: 1,
    disableTooltip: false,
  },
}
