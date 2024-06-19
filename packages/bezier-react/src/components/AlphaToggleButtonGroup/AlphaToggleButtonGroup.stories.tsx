import React, { useState } from 'react'

import { StoryObj, type Meta, type StoryFn } from '@storybook/react'

import { ToggleButton } from '~/src/components/AlphaToggleButton/ToggleButton'
import {
  type ToggleButtonMultipleGroupProps,
  type ToggleButtonSingleGroupProps,
} from '~/src/components/AlphaToggleButtonGroup/ToggleButtonGroup.types'

import { ToggleButtonGroup } from './ToggleButtonGroup'
import { Box } from '~/src/components/Box'

const meta = {
  component: ToggleButtonGroup,
} satisfies Meta<typeof ToggleButtonGroup>

const Template: StoryFn<
  ToggleButtonMultipleGroupProps | ToggleButtonSingleGroupProps
> = ({ type, ...props }) => {
  const [value, setValue] = useState(type === 'single' ? 'react' : ['react'])

  return (
    <Box
      width={800}
      backgroundColor="bg-lounge"
    >
      {/* @ts-ignore */}
      <ToggleButtonGroup
        type={type}
        value={value}
        onValueChange={setValue}
        {...props}
      >
        <ToggleButton
          value="react"
          text="react"
        />
        <ToggleButton
          value="svelte"
          text="svelte"
        />
        <ToggleButton
          value="vue"
          text="vue"
        />
      </ToggleButtonGroup>
    </Box>
  )
}

export const Primary = {
  render: Template,
  args: {
    type: 'single',
    shape: 'rectangle',
    fullWidth: false,
  },
} satisfies StoryObj<typeof meta>

export default meta
