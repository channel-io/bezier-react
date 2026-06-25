import { useState } from 'react'

import {
  ChevronSmallDownIcon,
  ChevronSmallUpIcon,
  PersonFilledIcon,
  PlusIcon,
} from '@channel.io/bezier-icons'
import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from '~/src/beta/Avatar'
import { Button } from '~/src/beta/Button'

import { Select, SelectGroup, SelectOption, SelectTrigger } from './'
import type { SelectProps } from './'



const meta: Meta<typeof Select> = {
  title: 'Beta components/Select',
  component: Select,
  decorators: [
    (Story) => (
      <div style={{ minHeight: 320 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    placeholder: 'Select option',
    triggerSize: 'm',
    position: 'bottom-left',
    offset: 6,
    withoutChevron: false,
    dropdownWidth: undefined,
    dropdownMaxHeight: undefined,
  },
  argTypes: {
    triggerSize: {
      control: 'select',
      options: ['m', 'l'],
    },
    placeholder: {
      control: 'text',
    },
    position: {
      control: 'select',
      options: [
        'top-center',
        'top-left',
        'top-right',
        'right-center',
        'right-top',
        'right-bottom',
        'bottom-center',
        'bottom-left',
        'bottom-right',
        'left-center',
        'left-top',
        'left-bottom',
      ],
    },
    offset: {
      control: 'number',
    },
    keepInContainer: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    withoutChevron: {
      control: 'boolean',
    },
    dropdownWidth: {
      control: 'text',
    },
    dropdownMaxHeight: {
      control: 'text',
    },
  },
}

export default meta

type Story = StoryObj<typeof Select>

const CUSTOM_TRIGGER_SOURCE = `
function CustomTriggerExample() {
  const [value, setValue] = useState<string | null>(null)

  return (
    <Select
      value={value}
      onValueChange={setValue}
      placeholder="Select theme"
      dropdownWidth={188}
    >
      <SelectTrigger>
        {({ triggerProps, open, selectedOption, placeholder, triggerSize }) => (
          <Button
            {...triggerProps}
            label={selectedOption?.label ?? String(placeholder ?? '')}
            size={triggerSize}
            variant="filled"
            semantic="secondary"
            active={open}
            trailingContent={open ? ChevronSmallUpIcon : ChevronSmallDownIcon}
          />
        )}
      </SelectTrigger>
      <SelectOption value="light" label="Light" />
      <SelectOption value="dark" label="Dark" />
      <SelectOption value="system" label="System" />
    </Select>
  )
}
`.trim()

function ControlledExample(args: SelectProps) {
  const [value, setValue] = useState('option-1')

  return (
    <div style={{ width: 280 }}>
      <Select
        {...args}
        value={value}
        onValueChange={setValue}
      >
        <SelectOption
          value="option-1"
          label="Option 1"
        />
        <SelectOption
          value="option-2"
          label="Option 2"
          leadingContent={PlusIcon}
        />
        <SelectOption
          value="option-3"
          label="Option 3"
          leadingContent={
            <Avatar
              name="Option"
              size="20"
              avatarUrl="https://bit.ly/dan-abramov"
            />
          }
        />
      </Select>
    </div>
  )
}

function WithDescriptionExample() {
  return (
    <div style={{ width: 280 }}>
      <Select
        defaultValue="manager-1"
        placeholder="Select manager"
      >
        <SelectOption
          value="manager-1"
          label="Amy Kim"
          leadingContent={PersonFilledIcon}
          description="Owner"
        />
        <SelectOption
          value="manager-2"
          label="Ben Lee"
          leadingContent={PersonFilledIcon}
          description="Member"
        />
        <SelectOption
          value="manager-3"
          label="Chris Park"
          leadingContent={PersonFilledIcon}
          disabled
        />
      </Select>
    </div>
  )
}

function CustomTriggerExample() {
  const [value, setValue] = useState<string | null>(null)

  return (
    <div style={{ width: 280 }}>
      <Select
        value={value}
        onValueChange={setValue}
        placeholder="Select theme"
        dropdownWidth={188}
      >
        <SelectTrigger>
          {({ triggerProps, open, selectedOption, placeholder, triggerSize }) => (
            <Button
              {...triggerProps}
              label={selectedOption?.label ?? String(placeholder ?? '')}
              size={triggerSize}
              variant="filled"
              semantic="secondary"
              active={open}
              trailingContent={
                open ? ChevronSmallUpIcon : ChevronSmallDownIcon
              }
            />
          )}
        </SelectTrigger>
        <SelectOption
          value="light"
          label="Light"
        />
        <SelectOption
          value="dark"
          label="Dark"
        />
        <SelectOption
          value="system"
          label="System"
        />
      </Select>
    </div>
  )
}

export const Primary: Story = {
  render: (args) => <ControlledExample {...args} />,
}

export const Uncontrolled: StoryObj<SelectProps> = {
  render: () => (
    <div style={{ width: 280 }}>
      <Select
        defaultValue="email"
        placeholder="Select channel"
      >
        <SelectOption value="chat" />
        <SelectOption value="email" />
        <SelectOption value="sms" />
      </Select>
    </div>
  ),
}

export const CustomTrigger: Story = {
  render: () => <CustomTriggerExample />,
  parameters: {
    docs: {
      source: {
        code: CUSTOM_TRIGGER_SOURCE,
      },
    },
  },
}

export const WithDescription: Story = {
  render: () => <WithDescriptionExample />,
}

export const Grouped: Story = {
  render: () => (
    <div style={{ width: 280 }}>
      <Select
        defaultValue="email"
        placeholder="Select channel"
      >
        <SelectGroup label="Messaging">
          <SelectOption
            value="chat"
            label="Chat"
          />
          <SelectOption
            value="email"
            label="Email"
          />
        </SelectGroup>
        <SelectGroup label="Broadcast">
          <SelectOption
            value="sms"
            label="SMS"
          />
          <SelectOption
            value="push"
            label="Push"
          />
        </SelectGroup>
      </Select>
    </div>
  ),
}
