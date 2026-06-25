import { type Meta, type StoryFn } from '@storybook/react'

import { Spinner } from './Spinner'
import { type SpinnerProps } from './Spinner.types'

const meta: Meta<typeof Spinner> = {
  title: 'Deprecated v1 components/Spinner',
  tags: ['deprecated'],
  component: Spinner,
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: ['xl', 'l', 'm', 's', 'xs'],
    },
  },
}
export default meta

const Template: StoryFn<SpinnerProps> = ({ ...args }) => <Spinner {...args} />

export const Primary = {
  render: Template,

  args: {
    size: 'm',
  },
}
