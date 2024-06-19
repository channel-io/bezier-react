import React, { useState } from 'react'

import { type Meta, type StoryFn } from '@storybook/react'

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

const SingleTemplate: StoryFn<ToggleButtonSingleGroupProps> = ({
  type,
  ...props
}) => {
  const [value, setValue] = useState('react')

  return (
    <Box
      width={800}
      backgroundColor="bg-lounge"
    >
      <ToggleButtonGroup
        type="single"
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

const MultipleTemplate: StoryFn<ToggleButtonMultipleGroupProps> = ({
  type,
  ...props
}) => {
  const [value, setValue] = useState(['react'])

  return (
    <Box
      width={800}
      backgroundColor="bg-lounge"
    >
      <ToggleButtonGroup
        type="multiple"
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

export const SingleType = {
  render: SingleTemplate,
  args: {
    shape: 'rectangle',
    fullWidth: false,
  },
}

export const MultipleType = {
  render: MultipleTemplate,
  args: {
    shape: 'rectangle',
    fullWidth: false,
  },
}

export default meta
