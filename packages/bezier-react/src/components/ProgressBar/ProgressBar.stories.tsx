/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import type { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getTitle, getObjectFromEnum } from 'Utils/storyUtils'
import { VStack, StackItem } from 'Components/Stack'
import { ProgressBar } from './ProgressBar'
import type ProgressBarProps from './ProgressBar.types'
import { ProgressBarSize, ProgressBarVariant } from './ProgressBar.types'
import mdx from './ProgressBar.mdx'

export default {
  title: getTitle(base),
  component: ProgressBar,
  parameters: {
    docs: {
      page: mdx,
    },
  },
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
} as Meta<ProgressBarProps>

export const Playground: Story<ProgressBarProps> = (props) => <ProgressBar {...props} />
Playground.args = {
  size: ProgressBarSize.M,
  variant: ProgressBarVariant.Green,
  width: '36',
  value: 0.5,
}

export const Overview: Story<{}> = () => (
  <VStack spacing={6} align="stretch">
    <StackItem>
      <ProgressBar
        size={ProgressBarSize.M}
        variant={ProgressBarVariant.Green}
        width={200}
        value={0.8}
      />
    </StackItem>
    <StackItem>
      <ProgressBar
        size={ProgressBarSize.M}
        variant={ProgressBarVariant.Monochrome}
        width={200}
        value={0.8}
      />
    </StackItem>
    <StackItem>
      <ProgressBar
        size={ProgressBarSize.S}
        variant={ProgressBarVariant.Green}
        width={200}
        value={0.8}
      />
    </StackItem>
    <StackItem>
      <ProgressBar
        size={ProgressBarSize.S}
        variant={ProgressBarVariant.Monochrome}
        width={200}
        value={0.8}
      />
    </StackItem>
  </VStack>
)
