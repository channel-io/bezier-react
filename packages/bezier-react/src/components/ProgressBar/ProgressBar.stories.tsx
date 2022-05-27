/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getTitle, getObjectFromEnum } from 'Utils/storyUtils'
import ProgressBar from './ProgressBar'
import type ProgressBarProps from './ProgressBar.types'
import { ProgressBarSize, ProgressBarVariant } from './ProgressBar.types'

export default {
  title: getTitle(base),
  component: ProgressBar,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: getObjectFromEnum(ProgressBarSize),
      },
    },
    variant: {
      control: {
        type: 'radio',
        options: getObjectFromEnum(ProgressBarVariant),
      },
    },
    percentage: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
} as Meta

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />

export const Primary: Story<ProgressBarProps> = Template.bind({})
Primary.args = {
  size: ProgressBarSize.M,
  variant: ProgressBarVariant.Green,
  percentage: 50,
}
