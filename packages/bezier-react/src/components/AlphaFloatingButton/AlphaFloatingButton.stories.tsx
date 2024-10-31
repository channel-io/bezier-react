import React, { Fragment } from 'react'

import { ArrowRightIcon, PlusIcon } from '@channel.io/bezier-icons'
import { type Meta, type StoryObj } from '@storybook/react'

import {
  AlphaFloatingButton,
  type AlphaFloatingButtonProps,
} from '~/src/components/AlphaFloatingButton'
import { HStack, VStack } from '~/src/components/Stack'
import { Text } from '~/src/components/Text'

const meta: Meta<typeof AlphaFloatingButton> = {
  component: AlphaFloatingButton,
  argTypes: {
    onClick: { action: 'onClick' },
  },
}
export default meta

export const Primary: StoryObj<AlphaFloatingButtonProps> = {
  args: {
    text: 'Invite',
    disabled: false,
    active: false,
    loading: false,
    prefixContent: PlusIcon,
    suffixContent: ArrowRightIcon,
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

export const Hovered: StoryObj<AlphaFloatingButtonProps> = {
  render: () => {
    const VARIANTS: AlphaFloatingButtonProps['variant'][] = [
      'primary',
      'secondary',
    ]
    const COLORS: AlphaFloatingButtonProps['color'][] = [
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
                    <AlphaFloatingButton
                      key={color}
                      prefixContent={PlusIcon}
                      suffixContent={ArrowRightIcon}
                      text="button"
                      variant={variant}
                      color={color}
                    />
                  )
                })}
              </HStack>

              <HStack>
                {COLORS.map((color) => {
                  return (
                    <AlphaFloatingButton
                      key={color}
                      active
                      prefixContent={PlusIcon}
                      suffixContent={ArrowRightIcon}
                      text="button"
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
