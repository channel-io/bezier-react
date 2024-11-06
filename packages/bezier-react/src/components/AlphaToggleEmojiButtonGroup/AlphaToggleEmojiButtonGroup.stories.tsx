import React from 'react'

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
  Pick<ToggleEmojiButtonSourceProps, 'variant'>

const Template: StoryFn<ToggleButtonCompositionType> = ({
  fillDirection,
  variant,
}) => {
  return (
    <Center
      width="25vw"
      height="15vh"
      backgroundColor="bg-lounge"
    >
      <ToggleEmojiButtonGroup
        defaultValue="blush"
        fillDirection={fillDirection}
      >
        <ToggleEmojiButtonSource
          variant={variant}
          value="blush"
          name="blush"
        />
        <ToggleEmojiButtonSource
          variant={variant}
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
  },
  parameters: {
    design: {
      type: 'link',
      url: 'https://www.figma.com/design/fPXP9zfjZU9NyARnhTWL6o/Input?node-id=425-281&t=ktusTVyr8cD3cTlt-1',
    },
  },
} satisfies StoryObj<ToggleButtonCompositionType>
