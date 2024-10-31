import React, { Fragment } from 'react'

import { PlusIcon } from '@channel.io/bezier-icons'
import { type Meta, type StoryObj } from '@storybook/react'

import {
  AlphaFloatingIconButton,
  type AlphaFloatingIconButtonProps,
} from '~/src/components/AlphaFloatingIconButton'
import { HStack, VStack } from '~/src/components/Stack'
import { Text } from '~/src/components/Text'

const meta: Meta<typeof AlphaFloatingIconButton> = {
  component: AlphaFloatingIconButton,
  argTypes: {
    onClick: { action: 'onClick' },
  },
}
export default meta

export const Primary: StoryObj<AlphaFloatingIconButtonProps> = {
  args: {
    disabled: false,
    active: false,
    loading: false,
    content: PlusIcon,
    'aria-label': 'invite',
    size: 'm',
    variant: 'primary',
    color: 'blue',
  },
  parameters: {
    design: {
      type: 'link',
      url: 'https://www.figma.com/design/8J76noM3T1Sp5cNPhnYQiG/Action?node-id=112-2766&t=7KmMal05dj8QL5kK-1',
    },
  },
}

export const Hovered: StoryObj<AlphaFloatingIconButtonProps> = {
  render: () => {
    const VARIANTS: AlphaFloatingIconButtonProps['variant'][] = [
      'primary',
      'secondary',
    ]
    const COLORS: AlphaFloatingIconButtonProps['color'][] = [
      'blue',
      'cobalt',
      'green',
      'orange',
      'red',
      'purple',
      'pink',
      'dark-grey',
      'light-grey',
    ]

    return (
      <VStack spacing={6}>
        {VARIANTS.map((variant) => {
          return (
            <Fragment key={variant}>
              <Text>{variant}</Text>
              <HStack>
                {COLORS.map((color) => {
                  return (
                    <AlphaFloatingIconButton
                      key={color}
                      content={PlusIcon}
                      variant={variant}
                      color={color}
                    />
                  )
                })}
              </HStack>

              <HStack>
                {COLORS.map((color) => {
                  return (
                    <AlphaFloatingIconButton
                      key={color}
                      active
                      content={PlusIcon}
                      variant={variant}
                      color={color}
                    />
                  )
                })}
              </HStack>
            </Fragment>
          )
        })}
      </VStack>
    )
  },
}
