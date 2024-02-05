import React from 'react'

import {
  type Meta,
  type StoryFn,
} from '@storybook/react'

import { getObjectFromEnum } from '~/src/utils/story'

import { Text } from '~/src/components/Text'

import {
  SegmentedControl,
  SegmentedControlItem,
  SegmentedControlTabContent,
  SegmentedControlTabList,
} from './SegmentedControl'
import {
  type SegmentedControlProps,
  SegmentedControlSize,
} from './SegmentedControl.types'

const meta: Meta<typeof SegmentedControl> = {
  component: SegmentedControl,
  argTypes: {
    type: {
      control: {
        type: 'radio',
      },
      options: ['radiogroup', 'tabs'],
    },
    size: {
      control: {
        type: 'radio',
      },
      options: getObjectFromEnum(SegmentedControlSize),
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
}
export default meta

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

const Template: StoryFn<
SegmentedControlProps<'radiogroup', string>
> = ({ type, ...rest }) => (
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

export const Primary = {
  render: Template,

  args: {
    type: 'radiogroup',
    size: SegmentedControlSize.XS,
    width: '100%',
    value: undefined,
    defaultValue: undefined,
    disabled: false,
  },
}
