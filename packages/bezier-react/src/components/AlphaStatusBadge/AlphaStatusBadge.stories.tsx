import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { Center } from '~/src/components/Center'

import { StatusBadge } from './StatusBadge'
import { type StatusBadgeProps } from './StatusBadge.types'

const meta: Meta<typeof StatusBadge> = {
  component: StatusBadge,
}

export default meta

const Template: StoryFn<StatusBadgeProps> = (args) => (
  <Center
    width={200}
    height={200}
    backgroundColor="bg-grey-light"
  >
    <StatusBadge {...args} />
  </Center>
)

export const Primary: StoryObj<StatusBadgeProps> = {
  render: Template,
  args: {
    size: 'm',
    online: true,
    doNotDisturb: false,
  },
  parameters: {
    design: {
      type: 'link',
      url: 'https://www.figma.com/design/KyhPPZeeC0JBmTclJGe3nn/Status?node-id=0-1&t=jHTuLNWLSHKGQjYX-1',
    },
  },
}
