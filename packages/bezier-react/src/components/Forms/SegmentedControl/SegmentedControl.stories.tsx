import React from 'react'

import {
  type Meta,
  type Story,
} from '@storybook/react'
import base from 'paths.macro'

import {
  getObjectFromEnum,
  getTitle,
} from '~/src/utils/storyUtils'

import { AlphaStack } from '~/src/components/AlphaStack'
import { Text } from '~/src/components/Text'

import {
  SegmentedControl,
  SegmentedControlTabContent,
  SegmentedControlTabList,
} from './SegmentedControl'
import {
  type SegmentedControlProps,
  SegmentedControlSize,
  type SegmentedControlType,
} from './SegmentedControl.types'
import { SegmentedControlItem } from './SegmentedControlItem'

export default {
  title: getTitle(base),
  component: SegmentedControl,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: getObjectFromEnum(SegmentedControlSize),
      },
    },
  },
} as Meta<SegmentedControlProps<SegmentedControlType, string>>

const Template: Story<SegmentedControlProps<SegmentedControlType, string>> = ({ children, ...rest }) => (
  <AlphaStack
    style={{ width: 500 }}
    direction="vertical"
    spacing={20}
  >
    <SegmentedControl
      {...rest}
      type="radiogroup"
    >
      <SegmentedControlItem value="1">First Radio</SegmentedControlItem>
      <SegmentedControlItem value="2">Second Radio</SegmentedControlItem>
      <SegmentedControlItem value="3">Third Radio</SegmentedControlItem>
    </SegmentedControl>

    <SegmentedControl
      {...rest}
      type="tabs"
    >
      <AlphaStack
        direction="vertical"
        spacing={12}
      >
        <SegmentedControlTabList>
          <SegmentedControlItem value="1">First Tab</SegmentedControlItem>
          <SegmentedControlItem value="2">Second Tab</SegmentedControlItem>
          <SegmentedControlItem value="3">Third Tab</SegmentedControlItem>
        </SegmentedControlTabList>

        <Text color="txt-black-dark">
          <SegmentedControlTabContent value="1">First Tab Content</SegmentedControlTabContent>
          <SegmentedControlTabContent value="2">Second Tab Content</SegmentedControlTabContent>
          <SegmentedControlTabContent value="3">Third Tab Content</SegmentedControlTabContent>
        </Text>
      </AlphaStack>
    </SegmentedControl>
  </AlphaStack>
)

export const Primary = Template.bind({})

Primary.args = {
  size: SegmentedControlSize.XS,
}
