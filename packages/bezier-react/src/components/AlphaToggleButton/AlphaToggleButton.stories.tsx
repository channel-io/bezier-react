import React, { useState } from 'react'

import { ArrowLeftIcon } from '@channel.io/bezier-icons'
import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import {
  AlphaToggleButton,
  type AlphaToggleButtonProps,
} from '~/src/components/AlphaToggleButton'
import { ToggleButton } from '~/src/components/AlphaToggleButton/ToggleButton'

const meta: Meta<typeof AlphaToggleButton> = {
  component: AlphaToggleButton,
  argTypes: {
    onClick: { action: 'onClick' },
  },
}
export default meta

const Template: StoryFn<AlphaToggleButtonProps> = (props) => {
  const [selected, setSelected] = useState(false)

  return (
    <ToggleButton
      {...props}
      selected={selected}
      onClick={() => setSelected((prev) => !prev)}
    />
  )
}

export const Playground: StoryObj<AlphaToggleButtonProps> = {
  render: Template,
  args: {
    text: 'Invite',
    selected: false,
    loading: false,
    prefixContent: ArrowLeftIcon,
    size: 'm',
    shape: 'capsule',
    variant: 'primary',
  },
}
