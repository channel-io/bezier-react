import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { Tag } from './Tag'

const meta: Meta<typeof Tag> = {
  component: Tag,
}

export default meta

const Template: StoryFn<typeof Tag> = ({ children, ...otherProps }) => (
  <Tag {...otherProps}>{children}</Tag>
)

export const Primary: StoryObj<typeof Tag> = {
  render: Template,

  args: {
    children: 'Design',
    size: 'm',
    variant: 'default',
    // eslint-disable-next-line no-console
    onDelete: console.log,
    // eslint-disable-next-line no-console
    onClick: console.log,
  },
}
