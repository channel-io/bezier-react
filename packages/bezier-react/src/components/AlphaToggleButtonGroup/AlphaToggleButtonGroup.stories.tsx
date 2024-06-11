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
    <ToggleButtonGroup {...props}>
      <ToggleButton
        shape="rectangle"
        value="react"
        text="react"
      />
      <ToggleButton
        shape="rectangle"
        value="svelte"
        text="svelte"
      />
      <ToggleButton
        shape="rectangle"
        value="vue"
        text="vue"
      />
    </ToggleButtonGroup>
  )
}

export const Primary = {
  render: Template,
  args: {
    type: 'single',
  },
} satisfies StoryObj<typeof meta>

export default meta
