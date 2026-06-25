import { useState } from 'react'

import {
  ChevronSmallDownIcon,
  ChevronSmallUpIcon,
  TagIcon,
} from '@channel.io/bezier-icons'
import type { Meta, StoryObj } from '@storybook/react'


import { Button } from '~/src/beta/Button'

import {
  MultiSelect,
  MultiSelectGroup,
  MultiSelectOption,
  MultiSelectTrigger,
} from './'
import type { MultiSelectProps } from './'


const meta: Meta<typeof MultiSelect> = {
  title: 'Beta components/MultiSelect',
  component: MultiSelect,
  decorators: [
    (Story) => (
      <div style={{ minHeight: 320 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    placeholder: 'Select tags',
    triggerSize: 'm',
    position: 'bottom-left',
    offset: 6,
    withoutChevron: false,
    dropdownWidth: undefined,
    dropdownMaxHeight: undefined,
    selectedValuesOverflow: 'wrap',
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
    selectedValuesOverflow: {
      control: 'select',
      options: ['wrap', 'ellipsis'],
    },
  },
}

export default meta

type Story = StoryObj<typeof MultiSelect>

const CUSTOM_TRIGGER_SOURCE = `
function CustomTriggerExample() {
  const [value, setValue] = useState<readonly string[]>(['sales'])

  return (
    <MultiSelect
      value={value}
      onValueChange={setValue}
      placeholder="Select tags"
      dropdownWidth={188}
    >
      <MultiSelectTrigger>
        {({ triggerProps, open, selectedOptions, placeholder, triggerSize }) => {
          const label =
            selectedOptions.length > 0
              ? selectedOptions.map((option) => option.label).join(', ')
              : placeholder

          return (
            <Button
              {...triggerProps}
              label={String(label ?? '')}
              size={triggerSize}
              variant="filled"
              semantic="secondary"
              active={open}
              trailingContent={open ? ChevronSmallUpIcon : ChevronSmallDownIcon}
            />
          )
        }}
      </MultiSelectTrigger>
      <MultiSelectOption value="sales" label="Sales" />
      <MultiSelectOption value="support" label="Support" />
      <MultiSelectOption value="marketing" label="Marketing" />
    </MultiSelect>
  )
}
`.trim()

function ControlledExample(args: MultiSelectProps) {
  const [value, setValue] = useState<readonly string[]>(['sales', 'support'])

  return (
    <div style={{ width: 280 }}>
      <MultiSelect
        {...args}
        value={value}
        onValueChange={setValue}
      >
        <MultiSelectOption
          value="sales"
          label="Sales"
          leadingContent={TagIcon}
        />
        <MultiSelectOption
          value="support"
          label="Support"
          leadingContent={TagIcon}
        />
        <MultiSelectOption
          value="marketing"
          label="Marketing"
          leadingContent={TagIcon}
        />
      </MultiSelect>
    </div>
  )
}

function CustomTriggerExample() {
  const [value, setValue] = useState<readonly string[]>(['sales'])

  return (
    <div style={{ width: 320 }}>
      <MultiSelect
        value={value}
        onValueChange={setValue}
        placeholder="Select tags"
        dropdownWidth={188}
      >
        <MultiSelectTrigger>
          {({ triggerProps, open, selectedOptions, placeholder, triggerSize }) => {
            const label =
              selectedOptions.length > 0
                ? selectedOptions.map((option) => option.label).join(', ')
                : placeholder

            return (
              <Button
                {...triggerProps}
                label={String(label ?? '')}
                size={triggerSize}
                variant="filled"
                semantic="secondary"
                active={open}
                trailingContent={
                  open ? ChevronSmallUpIcon : ChevronSmallDownIcon
                }
              />
            )
          }}
        </MultiSelectTrigger>
        <MultiSelectOption
          value="sales"
          label="Sales"
        />
        <MultiSelectOption
          value="support"
          label="Support"
        />
        <MultiSelectOption
          value="marketing"
          label="Marketing"
        />
      </MultiSelect>
    </div>
  )
}

export const Primary: Story = {
  render: (args) => <ControlledExample {...args} />,
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

export const SelectedValuesOverflow: Story = {
  render: () => (
    <div style={{ width: 280 }}>
      <MultiSelect
        defaultValue={['sales', 'support', 'marketing']}
        placeholder="Select tags"
        selectedValuesOverflow="ellipsis"
      >
        <MultiSelectOption
          value="sales"
          label="Sales"
          leadingContent={TagIcon}
        />
        <MultiSelectOption
          value="support"
          label="Support"
          leadingContent={TagIcon}
        />
        <MultiSelectOption
          value="marketing"
          label="Marketing"
          leadingContent={TagIcon}
        />
      </MultiSelect>
    </div>
  ),
}

export const Empty: Story = {
  render: () => (
    <div style={{ width: 280 }}>
      <MultiSelect placeholder="Select tags">
        <MultiSelectOption value="sales" />
        <MultiSelectOption value="support" />
        <MultiSelectOption value="marketing" />
      </MultiSelect>
    </div>
  ),
}

export const Grouped: Story = {
  render: () => (
    <div style={{ width: 280 }}>
      <MultiSelect
        defaultValue={['sales', 'support']}
        placeholder="Select tags"
      >
        <MultiSelectGroup label="Teams">
          <MultiSelectOption
            value="sales"
            label="Sales"
            leadingContent={TagIcon}
          />
          <MultiSelectOption
            value="support"
            label="Support"
            leadingContent={TagIcon}
          />
        </MultiSelectGroup>
        <MultiSelectGroup label="Campaigns">
          <MultiSelectOption
            value="marketing"
            label="Marketing"
            leadingContent={TagIcon}
          />
          <MultiSelectOption
            value="product"
            label="Product"
            leadingContent={TagIcon}
          />
        </MultiSelectGroup>
      </MultiSelect>
    </div>
  ),
}
