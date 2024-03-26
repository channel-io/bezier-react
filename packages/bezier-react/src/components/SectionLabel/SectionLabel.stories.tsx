import React from 'react'

import { ChevronDownIcon, InfoFilledIcon } from '@channel.io/bezier-icons'
import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { SectionLabel } from './SectionLabel'
import type { SectionLabelProps } from './SectionLabel.types'

const meta: Meta<typeof SectionLabel> = {
  component: SectionLabel,
}

const Template: StoryFn<SectionLabelProps> = ({ children, ...rest }) => (
  <div style={{ width: 200 }}>
    <SectionLabel {...rest}>{children}</SectionLabel>
  </div>
)

export const Primary: StoryObj<SectionLabelProps> = {
  render: Template,
  args: {
    content: 'Sort by',
    leftContent: InfoFilledIcon,
    rightContent: ChevronDownIcon,
  },
}

export default meta
