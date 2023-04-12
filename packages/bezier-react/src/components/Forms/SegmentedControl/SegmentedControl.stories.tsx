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
    type: {
      control: {
        type: 'radio',
        options: ['radiogroup', 'tabs'],
      },
    },
    size: {
      control: {
        type: 'radio',
        options: getObjectFromEnum(SegmentedControlSize),
      },
    },
    value: {
      control: {
        type: 'text',
      },
    },
    defaultValue: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<SegmentedControlProps<SegmentedControlType, string>>

const VALUES = [
  {
    value: '1',
    label: 'First',
  },
  {
    value: '2',
    label: 'Second',
  },
  {
    value: '3',
    label: 'Third',
  },
]

const Template: Story<SegmentedControlProps<SegmentedControlType, string>> = ({
  children,
  type,
  ...rest
}) => (
  <div style={{ width: 500 }}>
    <SegmentedControl
      type={type}
      {...rest}
    >
      { type === 'radiogroup'
        ? VALUES.map(({ value, label }) => (
          <SegmentedControlItem
            key={value}
            value={value}
          >
            { label }
          </SegmentedControlItem>
        ))
        : (
          <>
            <SegmentedControlTabList>
              { VALUES.map(({ value, label }) => (
                <SegmentedControlItem
                  key={value}
                  value={value}
                >
                  { label }
                </SegmentedControlItem>
              )) }
            </SegmentedControlTabList>

            { VALUES.map(({ value, label }) => (
              <SegmentedControlTabContent
                key={value}
                value={value}
              >
                <Text color="txt-black-darkest">
                  { label }
                </Text>
              </SegmentedControlTabContent>
            )) }
          </>
        ) }
    </SegmentedControl>
  </div>
)

export const Primary = Template.bind({})

Primary.args = {
  type: 'radiogroup',
  size: SegmentedControlSize.XS,
  width: '100%',
  value: undefined,
  defaultValue: undefined,
  disabled: false,
}
