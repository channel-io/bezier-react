/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { styled } from 'Foundation'
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
    width: {
      control: {
        type: 'text',
      },
    },
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.01,
      },
    },
  },
} as Meta

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 720px;
  padding: 16px;
  border: 1px solid ${({ foundation }) => foundation?.theme?.['bg-grey-light']};
`

const Template: Story<ProgressBarProps> = (args) => (
  <Wrapper>
    <ProgressBar {...args} />
  </Wrapper>
)

export const Primary: Story<ProgressBarProps> = Template.bind({})
Primary.args = {
  size: ProgressBarSize.M,
  variant: ProgressBarVariant.Green,
  width: '36',
  value: 0.5,
}
