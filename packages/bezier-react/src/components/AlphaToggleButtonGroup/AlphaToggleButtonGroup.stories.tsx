import React, { useEffect, useMemo, useState } from 'react'

import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { ToggleButton } from '~/src/components/AlphaToggleButton/ToggleButton'
import {
  type ToggleButtonMultipleGroupProps,
  type ToggleButtonSingleGroupProps,
} from '~/src/components/AlphaToggleButtonGroup/ToggleButtonGroup.types'
import { Box } from '~/src/components/Box'

import { ToggleButtonGroup } from './ToggleButtonGroup'

const meta = {
  component: ToggleButtonGroup,
} satisfies Meta<typeof ToggleButtonGroup>

const Template: StoryFn<
  ToggleButtonMultipleGroupProps | ToggleButtonSingleGroupProps
> = ({ type, ...props }) => {
  const initialValue = useMemo(
    () => (type === 'single' ? 'react' : ['react']),
    [type]
  )

  const [value, setValue] = useState(initialValue)

  useEffect(
    function initializeValue() {
      setValue(initialValue)
    },
    [initialValue]
  )

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
