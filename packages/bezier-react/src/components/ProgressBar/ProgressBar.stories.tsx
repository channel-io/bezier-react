/* External dependencies */
import React, { useState } from 'react'
import base from 'paths.macro'
import type {
  Story,
  Meta,
} from '@storybook/react'

/* Internal dependencies */
import {
  getTitle,
  getObjectFromEnum,
} from '~/src/utils/storyUtils'
import { Button } from '~/src/components/Button'
import { Text } from '~/src/components/Text'
import {
  VStack,
  HStack,
  StackItem,
  Spacer,
} from '~/src/components/Stack'
import { ProgressBar } from './ProgressBar'
import type ProgressBarProps from './ProgressBar.types'
import {
  ProgressBarSize,
  ProgressBarVariant,
} from './ProgressBar.types'
import mdx from './ProgressBar.mdx'

export default {
  title: getTitle(base),
  component: ProgressBar,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: getObjectFromEnum(ProgressBarSize),
      },
    },
    variant: {
      control: {
        type: 'radio',
        options: getObjectFromEnum(ProgressBarVariant),
      },
    },
    width: {
      control: {
        type: 'text',
      },
    },
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.01,
      },
    },
  },
} as Meta<ProgressBarProps>

export const Playground: Story<ProgressBarProps> = (props) => <ProgressBar {...props} />
Playground.args = {
  size: ProgressBarSize.M,
  variant: ProgressBarVariant.Green,
  width: '36',
  value: 0.5,
}

export const Overview: Story<{}> = () => {
  const [values, setValues] = useState<number[]>([0.25, 0.5, 0.75, 1])

  const handleSetRandomValues = () => {
    setValues([...Array(4)].map(() => Math.random()))
  }

  return (
    <VStack spacing={12} align="center">
      <StackItem>
        <VStack spacing={6} align="stretch">
          <StackItem>
            <ProgressBar
              size={ProgressBarSize.M}
              variant={ProgressBarVariant.Green}
              width={200}
              value={values[0]}
            />
          </StackItem>
          <StackItem>
            <ProgressBar
              size={ProgressBarSize.M}
              variant={ProgressBarVariant.Monochrome}
              width={200}
              value={values[1]}
            />
          </StackItem>
          <StackItem>
            <ProgressBar
              size={ProgressBarSize.S}
              variant={ProgressBarVariant.Green}
              width={200}
              value={values[2]}
            />
          </StackItem>
          <StackItem>
            <ProgressBar
              size={ProgressBarSize.S}
              variant={ProgressBarVariant.Monochrome}
              width={200}
              value={values[3]}
            />
          </StackItem>
        </VStack>
      </StackItem>
      <StackItem>
        <Button
          text="Set random values"
          onClick={handleSetRandomValues}
        />
      </StackItem>
    </VStack>
  )
}

export const UsageWidth: Story<{}> = () => (
  <VStack spacing={6} align="stretch">
    <StackItem>
      <HStack spacing={8} align="center">
        <StackItem style={{ width: 120 }}>
          <Text color="txt-black-darkest">36px (default)</Text>
        </StackItem>
        <StackItem grow shrink weight={1}>
          <ProgressBar
            value={0.5}
          />
        </StackItem>
      </HStack>
    </StackItem>
    <StackItem>
      <HStack spacing={8} align="center">
        <StackItem style={{ width: 120 }}>
          <Text color="txt-black-darkest">80px</Text>
        </StackItem>
        <StackItem grow shrink weight={1}>
          <ProgressBar
            width={80}
            value={0.5}
          />
        </StackItem>
      </HStack>
    </StackItem>
    <StackItem>
      <HStack spacing={8} align="center">
        <StackItem style={{ width: 120 }}>
          <Text color="txt-black-darkest">200px</Text>
        </StackItem>
        <StackItem grow shrink weight={1}>
          <ProgressBar
            width={200}
            value={0.5}
          />
        </StackItem>
      </HStack>
    </StackItem>
  </VStack>
)

UsageWidth.storyName = 'Usage (width)'

export const UsageValue: Story<{}> = () => (
  <VStack spacing={6} align="stretch">
    <StackItem>
      <HStack spacing={8} align="center">
        <StackItem style={{ width: 120 }}>
          <Text color="txt-black-darkest">0 (default)</Text>
        </StackItem>
        <StackItem grow shrink weight={1}>
          <ProgressBar
            width={200}
          />
        </StackItem>
      </HStack>
    </StackItem>
    <StackItem>
      <HStack spacing={8} align="center">
        <StackItem style={{ width: 120 }}>
          <Text color="txt-black-darkest">0.25</Text>
        </StackItem>
        <StackItem grow shrink weight={1}>
          <ProgressBar
            width={200}
            value={0.25}
          />
        </StackItem>
      </HStack>
    </StackItem>
    <StackItem>
      <HStack spacing={8} align="center">
        <StackItem style={{ width: 120 }}>
          <Text color="txt-black-darkest">0.5</Text>
        </StackItem>
        <StackItem grow shrink weight={1}>
          <ProgressBar
            width={200}
            value={0.5}
          />
        </StackItem>
      </HStack>
    </StackItem>
    <StackItem>
      <HStack spacing={8} align="center">
        <StackItem style={{ width: 120 }}>
          <Text color="txt-black-darkest">0.75</Text>
        </StackItem>
        <StackItem grow shrink weight={1}>
          <ProgressBar
            width={200}
            value={0.75}
          />
        </StackItem>
      </HStack>
    </StackItem>
    <StackItem>
      <HStack spacing={8} align="center">
        <StackItem style={{ width: 120 }}>
          <Text color="txt-black-darkest">1</Text>
        </StackItem>
        <StackItem grow shrink weight={1}>
          <ProgressBar
            width={200}
            value={1}
          />
        </StackItem>
      </HStack>
    </StackItem>
    <StackItem>
      <HStack spacing={8} align="center">
        <StackItem style={{ width: 120 }}>
          <Text color="txt-black-darkest">-1 (invalid value)</Text>
        </StackItem>
        <StackItem grow shrink weight={1}>
          <ProgressBar
            width={200}
            value={-1}
          />
        </StackItem>
      </HStack>
    </StackItem>
    <StackItem>
      <HStack spacing={8} align="center">
        <StackItem style={{ width: 120 }}>
          <Text color="txt-black-darkest">3 (invalid value)</Text>
        </StackItem>
        <StackItem grow shrink weight={1}>
          <ProgressBar
            width={200}
            value={3}
          />
        </StackItem>
      </HStack>
    </StackItem>
  </VStack>
)

UsageValue.storyName = 'Usage (value)'

export const SizeVariant: Story<{}> = () => (
  <VStack spacing={16} align="stretch">
    <StackItem>
      <HStack spacing={8} align="center">
        <StackItem>
          <Text color="txt-black-darkest">M (6px)</Text>
        </StackItem>
        <Spacer />
        <StackItem>
          <ProgressBar
            size={ProgressBarSize.M}
            variant={ProgressBarVariant.Green}
            width={200}
            value={0.5}
          />
        </StackItem>
      </HStack>
    </StackItem>
    <StackItem>
      <HStack spacing={8} align="center">
        <StackItem>
          <Text color="txt-black-darkest">S (4px)</Text>
        </StackItem>
        <Spacer />
        <StackItem>
          <ProgressBar
            size={ProgressBarSize.S}
            variant={ProgressBarVariant.Green}
            width={200}
            value={0.5}
          />
        </StackItem>
      </HStack>
    </StackItem>
  </VStack>
)

SizeVariant.storyName = 'Variant (size)'

export const Variant: Story<{}> = () => (
  <VStack spacing={16} align="stretch">
    <StackItem>
      <HStack spacing={8} align="center">
        <StackItem>
          <Text color="txt-black-darkest">green</Text>
        </StackItem>
        <Spacer />
        <StackItem>
          <ProgressBar
            size={ProgressBarSize.M}
            variant={ProgressBarVariant.Green}
            width={200}
            value={0.5}
          />
        </StackItem>
      </HStack>
    </StackItem>
    <StackItem>
      <HStack spacing={8} align="center">
        <StackItem>
          <Text color="txt-black-darkest">monochrome</Text>
        </StackItem>
        <Spacer />
        <StackItem>
          <ProgressBar
            size={ProgressBarSize.M}
            variant={ProgressBarVariant.Monochrome}
            width={200}
            value={0.5}
          />
        </StackItem>
      </HStack>
    </StackItem>
  </VStack>
)

Variant.storyName = 'Variant (color)'
