import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { Box } from './Box'
import { type BoxProps } from './Box.types'

const meta: Meta<typeof Box> = {
  title: 'Beta components/Box',
  component: Box,
}

const Template: StoryFn<BoxProps> = ({ children, ...rest }) => (
  <Box {...rest}>{children}</Box>
)

export const Primary: StoryObj<typeof Box> = {
  render: Template,
  args: {
    width: '50px',
    height: '50px',
    backgroundColor: 'fill-neutral',
    borderRadius: '8',
    borderWidth: '1px',
    borderColor: 'border-neutral',
  },
}

export default meta
