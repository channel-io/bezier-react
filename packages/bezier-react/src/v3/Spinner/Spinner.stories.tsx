import { type Meta, type StoryFn } from '@storybook/react'

import { Spinner } from './Spinner'
import { type SpinnerProps } from './Spinner.types'

const meta: Meta<typeof Spinner> = {
  title: 'V3 components/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: ['xs', 's', 'm', 'l', 'xl'],
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
