import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '~/src/beta/Button'

import { Tooltip } from './Tooltip'



const meta: Meta<typeof Tooltip> = {
  title: 'Beta components/Tooltip',
  component: Tooltip,
  argTypes: {
    offset: {
      control: {
        type: 'range',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const Primary: Story = {
  render: (args) => <Tooltip {...args} />,
  args: {
    defaultShow: false,
    placement: 'top-center',
    offset: 4,
    disabled: false,
    keepInContainer: true,
    allowHover: false,
    children: <Button label="Button" />,
    content: 'Tooltip',
  },
}

export const RichContent: Story = {
  tags: ['!autodocs'],
  parameters: { controls: { disable: true } },
  render: () => (
    <Tooltip
      title="Title"
      content="Tooltip content"
      description="Description"
    >
      <Button label="Button" />
    </Tooltip>
  ),
}
