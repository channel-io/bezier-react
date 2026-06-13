import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { HStack } from '~/src/v3/HStack'

import { Search } from './Search'
import type { SearchProps } from './Search.types'

const SEARCH_STORY_WIDTH = 200

const meta: Meta<typeof Search> = {
  title: 'V3 components/Search',
  component: Search,
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: ['m', 'l'],
    },
  },
}

export default meta

const Template: StoryFn<SearchProps> = ({ style, ...args }) => (
  <Search
    style={{
      width: SEARCH_STORY_WIDTH,
      ...style,
    }}
    {...args}
  />
)

export const Primary: StoryObj<SearchProps> = {
  render: Template,

  args: {
    placeholder: 'Search by customer name or email',
    size: 'm',
    allowClear: true,
    disabled: false,
  },
}

export const Sizes: StoryObj<SearchProps> = {
  render: (args) => (
    <HStack
      spacing={8}
      align="center"
    >
      {(['m', 'l'] as const).map((size) => (
        <Search
          key={size}
          {...args}
          size={size}
          style={{
            width: SEARCH_STORY_WIDTH,
            ...args.style,
          }}
        />
      ))}
    </HStack>
  ),

  args: {
    placeholder: 'Search by customer name or email',
    defaultValue: 'hong',
    allowClear: true,
  },

  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
  },
}
