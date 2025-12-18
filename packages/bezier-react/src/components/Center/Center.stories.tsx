import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { Center } from './Center'
import { type CenterProps } from './Center.types'

const meta: Meta<typeof Center> = {
  component: Center,
}

const Template: StoryFn<CenterProps> = ({ children, ...rest }) => (
  <Center {...rest}>{children}</Center>
)

export const Primary: StoryObj<typeof meta> = {
  render: Template,
  args: {
    style: {
      fontSize: '16px',
    },
    width: 200,
    height: 200,
    backgroundColor: 'fill-neutral-light',
    borderRadius: '8',
    borderWidth: 1,
    borderColor: 'border-neutral',
    children: 'Centered content',
  },
}

export default meta
