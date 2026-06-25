import { ArrowRightIcon, PlusIcon, SquaresIcon } from '@channel.io/bezier-icons'
import { type Meta, type StoryObj } from '@storybook/react'


import { VStack } from '~/src/beta/VStack'

import {
  SegmentedControl,
  SegmentedControlItem,
  SegmentedControlTabContent,
  SegmentedControlTabList,
} from './SegmentedControl'
import {
  type SegmentedControlProps,
  type SegmentedControlSize,
} from './SegmentedControl.types'


const meta: Meta<typeof SegmentedControl> = {
  title: 'Beta components/SegmentedControl',
  component: SegmentedControl,
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: ['s', 'm'],
    },
    type: {
      control: {
        type: 'radio',
      },
      options: ['radiogroup', 'tabs'],
    },
    defaultValue: {
      control: {
        type: 'text',
      },
    },
  },
}

export default meta

const RADIOGROUP_TYPE_ARG_TYPE = {
  control: {
    disable: true,
  },
  table: {
    type: {
      summary: 'radiogroup',
    },
    defaultValue: {
      summary: 'radiogroup',
    },
  },
}

function getExampleItems() {
  return [
    <SegmentedControlItem
      key="first"
      value="first"
    >
      Option 1
    </SegmentedControlItem>,
    <SegmentedControlItem
      key="second"
      value="second"
    >
      Option 2
    </SegmentedControlItem>,
    <SegmentedControlItem
      key="third"
      value="third"
    >
      Option 3
    </SegmentedControlItem>,
  ]
}

export const Primary: StoryObj<SegmentedControlProps<'radiogroup', string>> = {
  render: (args) => (
    <SegmentedControl {...args}>{getExampleItems()}</SegmentedControl>
  ),

  args: {
    defaultValue: 'first',
    size: 'm',
    type: 'radiogroup',
    width: 300,
  },

  argTypes: {
    type: RADIOGROUP_TYPE_ARG_TYPE,
  },
}

export const Sizes: StoryObj<SegmentedControlProps<'radiogroup', string>> = {
  render: (args) => (
    <VStack spacing={16}>
      {(['s', 'm'] as const).map((size: SegmentedControlSize) => (
        <SegmentedControl
          key={size}
          {...args}
          size={size}
        >
          {getExampleItems()}
        </SegmentedControl>
      ))}
    </VStack>
  ),

  args: {
    defaultValue: 'first',
    type: 'radiogroup',
    width: 300,
  },

  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
    type: RADIOGROUP_TYPE_ARG_TYPE,
  },
}

export const WithContent: StoryObj<
  SegmentedControlProps<'radiogroup', string>
> = {
  render: (args) => (
    <SegmentedControl {...args}>
      <SegmentedControlItem
        value="all"
        leadingContent={PlusIcon}
      >
        All
      </SegmentedControlItem>
      <SegmentedControlItem
        value="open"
        trailingContent={ArrowRightIcon}
      >
        Open
      </SegmentedControlItem>
      <SegmentedControlItem value="closed">Closed</SegmentedControlItem>
    </SegmentedControl>
  ),

  args: {
    defaultValue: 'all',
    size: 'm',
    type: 'radiogroup',
    width: 300,
  },

  argTypes: {
    type: RADIOGROUP_TYPE_ARG_TYPE,
  },
}

export const IconOnly: StoryObj<SegmentedControlProps<'radiogroup', string>> = {
  render: (args) => (
    <SegmentedControl {...args}>
      <SegmentedControlItem
        value="create"
        icon={PlusIcon}
        aria-label="Create"
      />
      <SegmentedControlItem
        value="grid"
        icon={SquaresIcon}
        aria-label="Grid"
      />
      <SegmentedControlItem
        value="next"
        icon={ArrowRightIcon}
        aria-label="Next"
      />
    </SegmentedControl>
  ),

  args: {
    defaultValue: 'grid',
    size: 's',
    type: 'radiogroup',
    width: 'fit-content',
  },

  argTypes: {
    type: RADIOGROUP_TYPE_ARG_TYPE,
  },
}

export const Tabs: StoryObj<SegmentedControlProps<'tabs', string>> = {
  render: (args) => (
    <SegmentedControl
      {...args}
      type="tabs"
    >
      <SegmentedControlTabList>
        <SegmentedControlItem value="all">All</SegmentedControlItem>
        <SegmentedControlItem value="open">Open</SegmentedControlItem>
        <SegmentedControlItem value="closed">Closed</SegmentedControlItem>
      </SegmentedControlTabList>

      <SegmentedControlTabContent value="all">
        All content
      </SegmentedControlTabContent>
      <SegmentedControlTabContent value="open">
        Open content
      </SegmentedControlTabContent>
      <SegmentedControlTabContent value="closed">
        Closed content
      </SegmentedControlTabContent>
    </SegmentedControl>
  ),

  args: {
    defaultValue: 'all',
    size: 'm',
    width: 300,
  },

  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
  },
}
