import React from 'react'

import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { ToggleButton } from '~/src/components/AlphaToggleButton/ToggleButton'
import {
  type ToggleButtonMultipleGroupProps,
  type ToggleButtonSingleGroupProps,
} from '~/src/components/AlphaToggleButtonGroup/ToggleButtonGroup.types'

import { ToggleButtonGroup } from './ToggleButtonGroup'

const meta = {
  component: ToggleButtonGroup,
} satisfies Meta<typeof ToggleButtonGroup>

const Template: StoryFn<
  ToggleButtonSingleGroupProps | ToggleButtonMultipleGroupProps
> = ({ value: valueProp, ...props }) => {
  return (
    <div style={{ width: '800px' }}>
      <ToggleButtonGroup {...props}>
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
    </div>
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
