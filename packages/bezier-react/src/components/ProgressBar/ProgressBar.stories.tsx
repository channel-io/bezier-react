import { useState } from 'react'

import type { Meta, StoryFn, StoryObj } from '@storybook/react'

import { Button } from '~/src/components/Button'
import {
  LegacyHStack,
  LegacySpacer,
  LegacyStackItem,
  LegacyVStack,
} from '~/src/components/LegacyStack'
import { Text } from '~/src/components/Text'

import { ProgressBar } from './ProgressBar'
import mdx from './ProgressBar.mdx'
import type { ProgressBarProps } from './ProgressBar.types'

const meta: Meta<typeof ProgressBar> = {
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
      },
    },
    variant: {
      control: {
        type: 'radio',
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
  tags: ['!autodocs'],
}

export default meta

export const Primary: StoryObj<ProgressBarProps> = {
  render: (props) => <ProgressBar {...props} />,
  args: {
    size: 'm',
    variant: 'green',
    width: 36,
    value: 0.5,
  },
}

export const Overview: StoryFn<{}> = () => {
  const [values, setValues] = useState<number[]>([0.25, 0.5, 0.75, 1])

  const handleSetRandomValues = () => {
    setValues([...Array(4)].map(() => Math.random()))
  }

  return (
    <LegacyVStack
      spacing={12}
      align="center"
    >
      <LegacyStackItem>
        <LegacyVStack
          spacing={6}
          align="stretch"
        >
          <LegacyStackItem>
            <ProgressBar
              size="m"
              variant="green"
              width={200}
              value={values[0]}
            />
          </LegacyStackItem>
          <LegacyStackItem>
            <ProgressBar
              size="m"
              variant="monochrome"
              width={200}
              value={values[1]}
            />
          </LegacyStackItem>
          <LegacyStackItem>
            <ProgressBar
              size="s"
              variant="green"
              width={200}
              value={values[2]}
            />
          </LegacyStackItem>
          <LegacyStackItem>
            <ProgressBar
              size="s"
              variant="monochrome"
              width={200}
              value={values[3]}
            />
          </LegacyStackItem>
        </LegacyVStack>
      </LegacyStackItem>
      <LegacyStackItem>
        <Button
          text="Set random values"
          onClick={handleSetRandomValues}
        />
      </LegacyStackItem>
    </LegacyVStack>
  )
}

export const UsageWidth: StoryObj<{}> = {
  render: () => (
    <LegacyVStack
      spacing={6}
      align="stretch"
    >
      <LegacyStackItem>
        <LegacyHStack
          spacing={8}
          align="center"
        >
          <LegacyStackItem style={{ width: 120 }}>
            <Text color="txt-black-darkest">36px (default)</Text>
          </LegacyStackItem>
          <LegacyStackItem
            grow
            shrink
            weight={1}
          >
            <ProgressBar value={0.5} />
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
      <LegacyStackItem>
        <LegacyHStack
          spacing={8}
          align="center"
        >
          <LegacyStackItem style={{ width: 120 }}>
            <Text color="txt-black-darkest">80px</Text>
          </LegacyStackItem>
          <LegacyStackItem
            grow
            shrink
            weight={1}
          >
            <ProgressBar
              width={80}
              value={0.5}
            />
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
      <LegacyStackItem>
        <LegacyHStack
          spacing={8}
          align="center"
        >
          <LegacyStackItem style={{ width: 120 }}>
            <Text color="txt-black-darkest">200px</Text>
          </LegacyStackItem>
          <LegacyStackItem
            grow
            shrink
            weight={1}
          >
            <ProgressBar
              width={200}
              value={0.5}
            />
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
    </LegacyVStack>
  ),

  name: 'Usage (width)',
}

export const UsageValue: StoryObj<{}> = {
  render: () => (
    <LegacyVStack
      spacing={6}
      align="stretch"
    >
      <LegacyStackItem>
        <LegacyHStack
          spacing={8}
          align="center"
        >
          <LegacyStackItem style={{ width: 120 }}>
            <Text color="txt-black-darkest">0 (default)</Text>
          </LegacyStackItem>
          <LegacyStackItem
            grow
            shrink
            weight={1}
          >
            <ProgressBar width={200} />
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
      <LegacyStackItem>
        <LegacyHStack
          spacing={8}
          align="center"
        >
          <LegacyStackItem style={{ width: 120 }}>
            <Text color="txt-black-darkest">0.25</Text>
          </LegacyStackItem>
          <LegacyStackItem
            grow
            shrink
            weight={1}
          >
            <ProgressBar
              width={200}
              value={0.25}
            />
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
      <LegacyStackItem>
        <LegacyHStack
          spacing={8}
          align="center"
        >
          <LegacyStackItem style={{ width: 120 }}>
            <Text color="txt-black-darkest">0.5</Text>
          </LegacyStackItem>
          <LegacyStackItem
            grow
            shrink
            weight={1}
          >
            <ProgressBar
              width={200}
              value={0.5}
            />
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
      <LegacyStackItem>
        <LegacyHStack
          spacing={8}
          align="center"
        >
          <LegacyStackItem style={{ width: 120 }}>
            <Text color="txt-black-darkest">0.75</Text>
          </LegacyStackItem>
          <LegacyStackItem
            grow
            shrink
            weight={1}
          >
            <ProgressBar
              width={200}
              value={0.75}
            />
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
      <LegacyStackItem>
        <LegacyHStack
          spacing={8}
          align="center"
        >
          <LegacyStackItem style={{ width: 120 }}>
            <Text color="txt-black-darkest">1</Text>
          </LegacyStackItem>
          <LegacyStackItem
            grow
            shrink
            weight={1}
          >
            <ProgressBar
              width={200}
              value={1}
            />
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
      <LegacyStackItem>
        <LegacyHStack
          spacing={8}
          align="center"
        >
          <LegacyStackItem style={{ width: 120 }}>
            <Text color="txt-black-darkest">-1 (invalid value)</Text>
          </LegacyStackItem>
          <LegacyStackItem
            grow
            shrink
            weight={1}
          >
            <ProgressBar
              width={200}
              value={-1}
            />
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
      <LegacyStackItem>
        <LegacyHStack
          spacing={8}
          align="center"
        >
          <LegacyStackItem style={{ width: 120 }}>
            <Text color="txt-black-darkest">3 (invalid value)</Text>
          </LegacyStackItem>
          <LegacyStackItem
            grow
            shrink
            weight={1}
          >
            <ProgressBar
              width={200}
              value={3}
            />
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
    </LegacyVStack>
  ),

  name: 'Usage (value)',
}

export const SizeVariant: StoryObj<{}> = {
  render: () => (
    <LegacyVStack
      spacing={16}
      align="stretch"
    >
      <LegacyStackItem>
        <LegacyHStack
          spacing={8}
          align="center"
        >
          <LegacyStackItem>
            <Text color="txt-black-darkest">M (6px)</Text>
          </LegacyStackItem>
          <LegacySpacer />
          <LegacyStackItem>
            <ProgressBar
              size="m"
              variant="green"
              width={200}
              value={0.5}
            />
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
      <LegacyStackItem>
        <LegacyHStack
          spacing={8}
          align="center"
        >
          <LegacyStackItem>
            <Text color="txt-black-darkest">S (4px)</Text>
          </LegacyStackItem>
          <LegacySpacer />
          <LegacyStackItem>
            <ProgressBar
              size="s"
              variant="green"
              width={200}
              value={0.5}
            />
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
    </LegacyVStack>
  ),

  name: 'Variant (size)',
}

export const Variant: StoryObj<{}> = {
  render: () => (
    <LegacyVStack
      spacing={16}
      align="stretch"
    >
      <LegacyStackItem>
        <LegacyHStack
          spacing={8}
          align="center"
        >
          <LegacyStackItem>
            <Text color="txt-black-darkest">green</Text>
          </LegacyStackItem>
          <LegacySpacer />
          <LegacyStackItem>
            <ProgressBar
              size="m"
              variant="green"
              width={200}
              value={0.5}
            />
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
      <LegacyStackItem>
        <LegacyHStack
          spacing={8}
          align="center"
        >
          <LegacyStackItem>
            <Text color="txt-black-darkest">monochrome</Text>
          </LegacyStackItem>
          <LegacySpacer />
          <LegacyStackItem>
            <ProgressBar
              size="m"
              variant="monochrome"
              width={200}
              value={0.5}
            />
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
      <LegacyStackItem>
        <LegacyHStack
          spacing={8}
          align="center"
        >
          <LegacyStackItem>
            <Text color="txt-black-darkest">green-alt</Text>
          </LegacyStackItem>
          <LegacySpacer />
          <LegacyStackItem>
            <ProgressBar
              size="m"
              variant="green-alt"
              width={200}
              value={0.5}
            />
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
    </LegacyVStack>
  ),

  name: 'Variant (color)',
}
