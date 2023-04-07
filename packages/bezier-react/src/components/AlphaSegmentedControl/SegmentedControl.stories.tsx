import React from 'react'

import {
  type Meta,
  type Story,
} from '@storybook/react'
import base from 'paths.macro'

import { getTitle } from '~/src/utils/storyUtils'

import { SegmentedControl } from './SegmentedControl'
import {
  type SegmentedControlProps,
  type SegmentedControlType,
} from './SegmentedControl.types'
import { SegmentedControlItem } from './SegmentedControlItem'

export default {
  title: getTitle(base),
  component: SegmentedControl,
} as Meta<SegmentedControlProps<SegmentedControlType, string>>

const Template: Story<SegmentedControlProps<SegmentedControlType, string>> = ({ children, ...rest }) => (
  <div style={{ width: 500 }}>
    <SegmentedControl
      {...rest}
      type="radiogroup"
    >
      <SegmentedControlItem value="1">First</SegmentedControlItem>
      <SegmentedControlItem value="2">Second</SegmentedControlItem>
      <SegmentedControlItem value="3">Third</SegmentedControlItem>
    </SegmentedControl>

    <SegmentedControl
      {...rest}
      type="tabs"
    >
      <SegmentedControlItem value="1">First</SegmentedControlItem>
      <SegmentedControlItem value="2">Second</SegmentedControlItem>
      <SegmentedControlItem value="3">Third</SegmentedControlItem>
    </SegmentedControl>
  </div>
)

export const Primary = Template.bind({})

Primary.args = {}
