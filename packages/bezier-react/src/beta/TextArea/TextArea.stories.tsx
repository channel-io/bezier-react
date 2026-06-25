import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'


import { HStack } from '~/src/beta/HStack'

import { TextArea } from './TextArea'
import type { TextAreaProps } from './TextArea.types'


const TEXT_AREA_STORY_WIDTH = 320

const meta: Meta<typeof TextArea> = {
  title: 'Beta components/TextArea',
  component: TextArea,
  argTypes: {
    minRows: {
      control: {
        type: 'radio',
      },
      options: [3, 6, 10, 16, 24, 36],
    },
    maxRows: {
      control: {
        type: 'radio',
      },
      options: [3, 6, 10, 16, 24, 36],
    },
  },
}

export default meta

const Template: StoryFn<TextAreaProps> = ({ style, ...args }) => (
  <TextArea
    style={{
      width: TEXT_AREA_STORY_WIDTH,
      ...style,
    }}
    {...args}
  />
)

export const Primary: StoryObj<TextAreaProps> = {
  render: Template,

  args: {
    placeholder: 'Enter a message',
    defaultValue: 'Hello, Channel!',
    minRows: 6,
    maxRows: 6,
    disabled: false,
    readOnly: false,
    hasError: false,
  },
}

export const Rows: StoryObj<TextAreaProps> = {
  render: (args) => (
    <HStack
      spacing={8}
      align="start"
    >
      {([3, 6, 10] as const).map((rows) => (
        <TextArea
          key={rows}
          {...args}
          minRows={rows}
          maxRows={rows}
          style={{
            width: TEXT_AREA_STORY_WIDTH,
            ...args.style,
          }}
        />
      ))}
    </HStack>
  ),

  args: {
    placeholder: 'Enter a message',
    defaultValue: 'Hello, Channel!',
    disabled: false,
    readOnly: false,
    hasError: false,
  },

  argTypes: {
    minRows: {
      table: {
        disable: true,
      },
    },
    maxRows: {
      table: {
        disable: true,
      },
    },
  },
}
