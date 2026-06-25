import type { Meta, StoryFn, StoryObj } from '@storybook/react'

import { Divider } from './Divider'
import { type DividerProps } from './Divider.types'

const meta = {
  title: 'Beta components/Divider',
  component: Divider,
  argTypes: {
    orientation: {
      control: {
        type: 'radio',
      },
      options: ['horizontal', 'vertical'],
    },
    withoutSideIndent: {
      control: {
        type: 'boolean',
      },
    },
    withoutParallelIndent: {
      control: {
        type: 'boolean',
      },
    },
    withoutIndent: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof Divider>

export default meta

const Template: StoryFn<DividerProps> = (props) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 200,
      height: 200,
    }}
  >
    <Divider {...props} />
  </div>
)

export const Primary: StoryObj<DividerProps> = {
  render: Template,

  args: {
    orientation: 'horizontal',
  },
}

export const Vertical: StoryObj<DividerProps> = {
  render: Template,

  args: {
    orientation: 'vertical',
  },
}

const CompositionTemplate: StoryFn<DividerProps> = ({
  orientation,
  ...rest
}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: orientation === 'horizontal' ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: 200,
      height: 200,
    }}
  >
    <div>Channel</div>
    <Divider
      orientation={orientation}
      {...rest}
    />
    <div>Bezier</div>
  </div>
)

export const Composition: StoryObj<DividerProps> = {
  render: CompositionTemplate,

  args: {
    orientation: 'horizontal',
  },
}
