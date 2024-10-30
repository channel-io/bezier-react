import React, { useState } from 'react'

import type { Meta, StoryFn, StoryObj } from '@storybook/react'

import { Center } from '~/src/components/Center'

import {
  ToggleEmojiButtonGroup,
  ToggleEmojiButtonSource,
} from './ToggleEmojiButtonGroup'
import type {
  ToggleEmojiButtonGroupProps,
  ToggleEmojiButtonSourceProps,
} from './ToggleEmojiButtonGroup.types'

const meta: Meta<typeof ToggleEmojiButtonGroup> = {
  component: ToggleEmojiButtonGroup,
}
export default meta

type ToggleButtonCompositionType = ToggleEmojiButtonGroupProps &
  Pick<ToggleEmojiButtonSourceProps, 'variant' | 'loading'>

const Template: StoryFn<ToggleButtonCompositionType> = ({
  fillDirection,
  variant,
  loading,
}) => {
  const [value, setValue] = useState('blush')

  return (
    <Center
      width="25vw"
      height="15vh"
      backgroundColor="bg-lounge"
    >
      <ToggleEmojiButtonGroup
        value={value}
        onValueChange={setValue}
        fillDirection={fillDirection}
      >
        <ToggleEmojiButtonSource
          variant={variant}
          loading={loading}
          value="blush"
          name="blush"
        />
        <ToggleEmojiButtonSource
          variant={variant}
          loading={loading}
          value="grinning"
          name="grinning"
        />
      </ToggleEmojiButtonGroup>
    </Center>
  )
}

export const Primary = {
  render: Template,

  args: {
    fillDirection: 'horizontal',
    variant: 'primary',
    loading: false,
  },
} satisfies StoryObj<ToggleButtonCompositionType>
