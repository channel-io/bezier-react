import { type Meta, type StoryFn } from '@storybook/react'

import { Text } from '~/src/components/Text'

import {
  SegmentedControl,
  SegmentedControlItem,
  SegmentedControlTabContent,
  SegmentedControlTabList,
} from './SegmentedControl'
import { type SegmentedControlProps } from './SegmentedControl.types'

const meta: Meta<typeof SegmentedControl> = {
  component: SegmentedControl,
  argTypes: {
    type: {
      control: {
        type: 'radio',
      },
      options: ['radiogroup', 'tabs'],
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
    label: 'Opened',
  },
  {
    value: '2',
    label: 'Snoozed',
  },
  {
    value: '3',
    label: 'Missed',
  },
  {
    value: '4',
    label: 'Closed',
  },
]

const Template: StoryFn<SegmentedControlProps<'radiogroup', string>> = ({
  type,
  ...rest
}) => (
  <div style={{ width: 500 }}>
    <SegmentedControl
      type={type}
      {...rest}
    >
      {type === 'radiogroup' ? (
        VALUES.map(({ value, label }) => (
          <SegmentedControlItem
            key={value}
            value={value}
          >
            {label}
          </SegmentedControlItem>
        ))
      ) : (
        <>
          <SegmentedControlTabList>
            {VALUES.map(({ value, label }) => (
              <SegmentedControlItem
                key={value}
                value={value}
              >
                {label}
              </SegmentedControlItem>
            ))}
          </SegmentedControlTabList>

          {VALUES.map(({ value, label }) => (
            <SegmentedControlTabContent
              key={value}
              value={value}
            >
              <Text color="txt-black-darkest">{label}</Text>
            </SegmentedControlTabContent>
          ))}
        </>
      )}
    </SegmentedControl>
  </div>
)

export const Primary = {
  render: Template,

  args: {
    type: 'radiogroup',
    size: 'xs',
    width: '100%',
    value: undefined,
    defaultValue: undefined,
    disabled: false,
  },
}
