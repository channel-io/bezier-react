import React, { Fragment } from 'react'

import { ArrowRightIcon, PlusIcon } from '@channel.io/bezier-icons'
import { type Meta, type StoryObj } from '@storybook/react'

import {
  AlphaButton,
  type AlphaButtonProps,
} from '~/src/components/AlphaButton'
import { HStack, VStack } from '~/src/components/Stack'
import { Text } from '~/src/components/Text'

const meta: Meta<typeof AlphaButton> = {
  component: AlphaButton,
  argTypes: {
    onClick: { action: 'onClick' },
  },
}
export default meta

export const Primary: StoryObj<AlphaButtonProps> = {
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
      url: 'https://www.figma.com/design/8J76noM3T1Sp5cNPhnYQiG/Action?node-id=0-1&t=WwfuBAWI872yYPf8-1',
    },
  },
}

export const Hovered: StoryObj<AlphaButtonProps> = {
  render: () => {
    const VARIANTS: AlphaButtonProps['variant'][] = [
      'primary',
      'secondary',
      'tertiary',
    ]
    const COLORS: AlphaButtonProps['color'][] = [
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
                    <AlphaButton
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
                    <AlphaButton
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
