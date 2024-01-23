import React, { useState } from 'react'

import type {
  Meta,
  StoryFn,
  StoryObj,
} from '@storybook/react'

import { type SemanticNames } from '~/src/foundation'

import { LightTheme } from '~/src/foundation/Colors/Theme'

import { range } from '~/src/utils/number'

import {
  Button,
  ButtonSize,
} from '~/src/components/Button'
import { Text } from '~/src/components/Text'

import { LegacyHStack } from './LegacyHStack'
import mdx from './LegacyStack.mdx'
import { LegacySpacer } from './LegacySpacer'
import {
  LegacyStack,
  type LegacyStackProps,
} from './LegacyStack'
import { LegacyStackItem } from './LegacyStackItem'
import { LegacyVStack } from './LegacyVStack'
import type { AxisAlignment } from './types'

const meta: Meta<LegacyStackProps & {
  containerSize: number
}> = {
  component: LegacyStack,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    containerSize: {
      control: {
        type: 'range',
        min: 400,
        max: 1200,
        step: 10,
      },
    },
    direction: {
      control: {
        type: 'radio',
      },
      options: ['horizontal', 'vertical'],
    },
    justify: {
      control: {
        type: 'radio',
      },
      options: ['start', 'center', 'end', 'stretch'],
    },
    align: {
      control: {
        type: 'radio',
      },
      options: ['start', 'center', 'end', 'stretch'],
    },
    spacing: {
      control: {
        type: 'range',
        min: 0,
        max: 32,
        step: 4,
      },
    },
  },
}
export default meta

const randomColor = (): SemanticNames =>
  Object.values(LightTheme)[Math.floor(Math.random() * Object.keys(LightTheme).length)] as SemanticNames
const randomSize = (): number => Math.floor((Math.random() * 240) + 120)

const Item = ({
  fixedSize,
  direction,
}: {
  fixedSize: boolean
  direction: 'horizontal' | 'vertical'
}) => {
  const [color] = useState(() => randomColor())
  const [alignSize] = useState(() => randomSize())

  return (
    <div
      style={{
        width: fixedSize && direction === 'vertical' ? alignSize : '100%',
        height: fixedSize && direction === 'horizontal' ? alignSize : '100%',
        backgroundColor: color,
        borderRadius: '4px',
        boxShadow: 'inset 0 0 1px #c0c0c0',
      }}
    />
  )
}

interface StackPreviewProps {
  containerSize: number

  /* Stack Props */
  direction: 'horizontal' | 'vertical'
  justify: AxisAlignment
  align: AxisAlignment
  spacing: number

  /* Item Props */
  itemJustifies: (AxisAlignment | undefined)[]
  itemAligns: (AxisAlignment | undefined)[]
  itemSizes: (number | undefined)[]
  itemWeights: (number | undefined)[]
  itemGrows: (boolean | undefined)[]
  itemShrinks: (boolean | undefined)[]
  itemMarginBefores: (number | undefined)[]
  itemMarginAfters: (number | undefined)[]
}

const Template: StoryFn<StackPreviewProps> = ({
  containerSize,

  direction,
  justify,
  align,
  spacing,

  itemJustifies,
  itemAligns,
  itemSizes,
  itemWeights,
  itemGrows,
  itemShrinks,
  itemMarginBefores,
  itemMarginAfters,
}: StackPreviewProps) => (
  <>
    <div
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: 4,
        ...(
          direction === 'horizontal'
            ? { width: containerSize, height: 480 }
            : { width: 480, height: containerSize }
        ),
      }}
    >
      <LegacyStack
        direction={direction}
        justify={justify}
        align={align}
        spacing={spacing}
      >
        { range(4)
          .map(i => (
            <LegacyStackItem
              key={`item-${i}`}
              justify={itemJustifies[i]}
              align={itemAligns[i]}
              size={itemSizes[i]}
              weight={itemWeights[i]}
              grow={itemGrows[i]}
              shrink={itemShrinks[i]}
              marginBefore={itemMarginBefores[i]}
              marginAfter={itemMarginAfters[i]}
            >
              <Item direction={direction} fixedSize={(align ?? itemAligns[i]) !== 'stretch'} />
            </LegacyStackItem>
          )) }
      </LegacyStack>
    </div>
  </>
)

export const Primary: StoryObj<StackPreviewProps> = {
  render: Template,

  args: {
    containerSize: 800,

    direction: 'horizontal',
    justify: 'start',
    align: 'start',
    spacing: 0,

    itemJustifies: [],
    itemAligns: [],
    itemSizes: [120, 240, 180, 120],
    itemWeights: [],
    itemGrows: [],
    itemShrinks: [],
    itemMarginBefores: [],
    itemMarginAfters: [],
  },
}

export const Overview: StoryFn<{}> = () => (
  <LegacyVStack style={{ width: '400px' }} spacing={16} align="stretch">
    <LegacyStackItem>
      <Text
        as="h3"
        style={{
          border: '1px solid #ccc',
        }}
        typo="24"
        bold
      >
        스택에 대해 더 자세히 알아보세요.
      </Text>
    </LegacyStackItem>
    <LegacyStackItem>
      <Text
        as="p"
        style={{
          border: '1px solid #ccc',
        }}
        typo="13"
        color="txt-black-darker"
      >
        스택은 flex layout을 서술하는 컴포넌트입니다. 스택과 함께라면 뭐든지 만들 수 있어요. 누가 만들었는지는 모르겠지만, 정말 잘 만든 컴포넌트에요. FormControl과 함께 싸드세요!
      </Text>
    </LegacyStackItem>
    <LegacyStackItem>
      <div
        style={{
          border: '1px solid #ccc',
        }}
      >
        <Button
          size={ButtonSize.L}
          text="스택에 대해 더 자세히 알아보기"
        />
      </div>
    </LegacyStackItem>
  </LegacyVStack>
)

export const DirectionHorizontal: StoryObj<{}> = {
  render: () => (
    <LegacyHStack
      style={{ width: '720px', height: '60px', border: '1px solid #ffc0c0' }}
      align="stretch"
    >
      <LegacyStackItem size={120} style={{ backgroundColor: '#ccc' }}>
        <Text typo="18">Item 1</Text>
      </LegacyStackItem>
      <LegacyStackItem size={180} style={{ backgroundColor: '#eee' }}>
        <Text typo="18">Item 2</Text>
      </LegacyStackItem>
      <LegacyStackItem size={180} style={{ backgroundColor: '#888' }}>
        <Text typo="18">Item 3</Text>
      </LegacyStackItem>
      <LegacyStackItem size={80} style={{ backgroundColor: '#aaa' }}>
        <Text typo="18">Item 4</Text>
      </LegacyStackItem>
    </LegacyHStack>
  ),

  name: 'Horizontal stack',
}

export const DirectionVertical: StoryObj<{}> = {
  render: () => (
    <LegacyVStack
      style={{ width: '200px', height: '600px', border: '1px solid #ffc0c0' }}
      align="start"
    >
      <LegacyStackItem size={120} style={{ width: '80px', backgroundColor: '#ccc' }}>
        <Text typo="18">Item 1</Text>
      </LegacyStackItem>
      <LegacyStackItem size={180} style={{ width: '150px', backgroundColor: '#eee' }}>
        <Text typo="18">Item 2</Text>
      </LegacyStackItem>
      <LegacyStackItem size={180} style={{ width: '200px', backgroundColor: '#888' }}>
        <Text typo="18">Item 3</Text>
      </LegacyStackItem>
      <LegacyStackItem size={80} style={{ width: '120px', backgroundColor: '#aaa' }}>
        <Text typo="18">Item 4</Text>
      </LegacyStackItem>
    </LegacyVStack>
  ),

  name: 'Vertical stack',
}

export const AlignmentJustify: StoryObj<{}> = {
  render: () => (
    <LegacyVStack align="stretch" spacing={8}>
      <LegacyStackItem>
        <Text typo="14">justify = &quot;start&quot;</Text>
      </LegacyStackItem>
      <LegacyStackItem>
        <LegacyHStack
          style={{
            width: '720px',
            height: '60px',
            border: '1px solid #ffc0c0',
          }}
          justify="start"
          align="stretch"
        >
          <LegacyStackItem size={120} style={{ backgroundColor: '#ccc' }}>
            <Text typo="18">Item 1</Text>
          </LegacyStackItem>
          <LegacyStackItem size={180} style={{ backgroundColor: '#eee' }}>
            <Text typo="18">Item 2</Text>
          </LegacyStackItem>
          <LegacyStackItem size={180} style={{ backgroundColor: '#888' }}>
            <Text typo="18">Item 3</Text>
          </LegacyStackItem>
          <LegacyStackItem size={80} style={{ backgroundColor: '#aaa' }}>
            <Text typo="18">Item 4</Text>
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
      <LegacyStackItem marginBefore={16}>
        <Text typo="14">justify = &quot;center&quot;</Text>
      </LegacyStackItem>
      <LegacyStackItem>
        <LegacyHStack
          style={{
            width: '720px',
            height: '60px',
            border: '1px solid #ffc0c0',
          }}
          justify="center"
          align="stretch"
        >
          <LegacyStackItem size={120} style={{ backgroundColor: '#ccc' }}>
            <Text typo="18">Item 1</Text>
          </LegacyStackItem>
          <LegacyStackItem size={180} style={{ backgroundColor: '#eee' }}>
            <Text typo="18">Item 2</Text>
          </LegacyStackItem>
          <LegacyStackItem size={180} style={{ backgroundColor: '#888' }}>
            <Text typo="18">Item 3</Text>
          </LegacyStackItem>
          <LegacyStackItem size={80} style={{ backgroundColor: '#aaa' }}>
            <Text typo="18">Item 4</Text>
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
      <LegacyStackItem marginBefore={16}>
        <Text typo="14">justify = &quot;end&quot;</Text>
      </LegacyStackItem>
      <LegacyStackItem>
        <LegacyHStack
          style={{
            width: '720px',
            height: '60px',
            border: '1px solid #ffc0c0',
          }}
          justify="end"
          align="stretch"
        >
          <LegacyStackItem size={120} style={{ backgroundColor: '#ccc' }}>
            <Text typo="18">Item 1</Text>
          </LegacyStackItem>
          <LegacyStackItem size={180} style={{ backgroundColor: '#eee' }}>
            <Text typo="18">Item 2</Text>
          </LegacyStackItem>
          <LegacyStackItem size={180} style={{ backgroundColor: '#888' }}>
            <Text typo="18">Item 3</Text>
          </LegacyStackItem>
          <LegacyStackItem size={80} style={{ backgroundColor: '#aaa' }}>
            <Text typo="18">Item 4</Text>
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
    </LegacyVStack>
  ),

  name: 'Alignment (justify)',
}

export const AlignmentAlign: StoryObj<{}> = {
  render: () => (
    <LegacyVStack align="stretch" spacing={8}>
      <LegacyStackItem>
        <Text typo="14">align = &quot;start&quot;</Text>
      </LegacyStackItem>
      <LegacyStackItem>
        <LegacyHStack
          style={{
            width: '720px',
            height: '80px',
            border: '1px solid #ffc0c0',
          }}
          justify="start"
          align="start"
        >
          <LegacyStackItem
            size={120}
            style={{ height: '40px', backgroundColor: '#ccc' }}
          >
            <Text typo="18">Item 1</Text>
          </LegacyStackItem>
          <LegacyStackItem
            size={180}
            style={{ height: '60px', backgroundColor: '#eee' }}
          >
            <Text typo="18">Item 2</Text>
          </LegacyStackItem>
          <LegacyStackItem
            size={180}
            style={{ height: '50px', backgroundColor: '#888' }}
          >
            <Text typo="18">Item 3</Text>
          </LegacyStackItem>
          <LegacyStackItem size={80} style={{ backgroundColor: '#aaa' }}>
            <Text typo="18">Item 4</Text>
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
      <LegacyStackItem marginBefore={16}>
        <Text typo="14">align = &quot;center&quot;</Text>
      </LegacyStackItem>
      <LegacyStackItem>
        <LegacyHStack
          style={{
            width: '720px',
            height: '80px',
            border: '1px solid #ffc0c0',
          }}
          justify="start"
          align="center"
        >
          <LegacyStackItem
            size={120}
            style={{ height: '40px', backgroundColor: '#ccc' }}
          >
            <Text typo="18">Item 1</Text>
          </LegacyStackItem>
          <LegacyStackItem
            size={180}
            style={{ height: '60px', backgroundColor: '#eee' }}
          >
            <Text typo="18">Item 2</Text>
          </LegacyStackItem>
          <LegacyStackItem
            size={180}
            style={{ height: '50px', backgroundColor: '#888' }}
          >
            <Text typo="18">Item 3</Text>
          </LegacyStackItem>
          <LegacyStackItem size={80} style={{ backgroundColor: '#aaa' }}>
            <Text typo="18">Item 4</Text>
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
      <LegacyStackItem marginBefore={16}>
        <Text typo="14">align = &quot;end&quot;</Text>
      </LegacyStackItem>
      <LegacyStackItem>
        <LegacyHStack
          style={{
            width: '720px',
            height: '80px',
            border: '1px solid #ffc0c0',
          }}
          justify="start"
          align="end"
        >
          <LegacyStackItem
            size={120}
            style={{ height: '40px', backgroundColor: '#ccc' }}
          >
            <Text typo="18">Item 1</Text>
          </LegacyStackItem>
          <LegacyStackItem
            size={180}
            style={{ height: '60px', backgroundColor: '#eee' }}
          >
            <Text typo="18">Item 2</Text>
          </LegacyStackItem>
          <LegacyStackItem
            size={180}
            style={{ height: '50px', backgroundColor: '#888' }}
          >
            <Text typo="18">Item 3</Text>
          </LegacyStackItem>
          <LegacyStackItem size={80} style={{ backgroundColor: '#aaa' }}>
            <Text typo="18">Item 4</Text>
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
      <LegacyStackItem marginBefore={16}>
        <Text typo="14">align = &quot;stretch&quot;</Text>
      </LegacyStackItem>
      <LegacyStackItem>
        <LegacyHStack
          style={{
            width: '720px',
            height: '80px',
            border: '1px solid #ffc0c0',
          }}
          justify="start"
          align="stretch"
        >
          <LegacyStackItem
            size={120}
            style={{ height: '40px', backgroundColor: '#ccc' }}
          >
            <Text typo="18">Item 1</Text>
          </LegacyStackItem>
          <LegacyStackItem
            size={180}
            style={{ height: '60px', backgroundColor: '#eee' }}
          >
            <Text typo="18">Item 2</Text>
          </LegacyStackItem>
          <LegacyStackItem
            size={180}
            style={{ height: '50px', backgroundColor: '#888' }}
          >
            <Text typo="18">Item 3</Text>
          </LegacyStackItem>
          <LegacyStackItem size={80} style={{ backgroundColor: '#aaa' }}>
            <Text typo="18">Item 4</Text>
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
    </LegacyVStack>
  ),

  name: 'Alignment (align)',
}

export const Spacing: StoryFn<{}> = () => (
  <LegacyHStack
    style={{ width: '720px', height: '80px', border: '1px solid #ffc0c0' }}
    justify="start"
    align="stretch"
    spacing={16}
  >
    <LegacyStackItem
      size={120}
      style={{ backgroundColor: '#ccc' }}
    >
      <Text typo="18">Item 1</Text>
    </LegacyStackItem>
    <LegacyStackItem
      size={180}
      style={{ backgroundColor: '#eee' }}
    >
      <Text typo="18">Item 2</Text>
    </LegacyStackItem>
    <LegacyStackItem
      size={180}
      style={{ backgroundColor: '#888' }}
    >
      <Text typo="18">Item 3</Text>
    </LegacyStackItem>
    <LegacyStackItem
      size={80}
      style={{ backgroundColor: '#aaa' }}
      marginBefore={40}
    >
      <Text typo="18">Item 4</Text>
    </LegacyStackItem>
  </LegacyHStack>
)

export const Expanded: StoryFn<{}> = () => (
  <LegacyHStack
    style={{ width: '720px', height: '80px', border: '1px solid #ffc0c0' }}
    justify="start"
    align="stretch"
  >
    <LegacyStackItem
      size={120}
      style={{ backgroundColor: '#ccc' }}
    >
      <Text typo="18">Item 1</Text>
    </LegacyStackItem>
    <LegacyStackItem
      size={180}
      style={{ backgroundColor: '#eee' }}
    >
      <Text typo="18">Item 2</Text>
    </LegacyStackItem>
    <LegacyStackItem
      grow
      shrink
      weight={1}
      style={{ backgroundColor: '#ffa0a0' }}
    >
      <Text typo="18">Item 3 (Expanded)</Text>
    </LegacyStackItem>
    <LegacyStackItem
      size={80}
      style={{ backgroundColor: '#aaa' }}
    >
      <Text typo="18">Item 4</Text>
    </LegacyStackItem>
  </LegacyHStack>
)

export const WeightSpacer: StoryObj<{}> = {
  render: () => (
    <LegacyHStack
      style={{ width: '720px', height: '80px', border: '1px solid #ffc0c0' }}
      justify="start"
      align="stretch"
    >
      <LegacyStackItem size={120} style={{ backgroundColor: '#ccc' }}>
        <Text typo="18">Item 1</Text>
      </LegacyStackItem>
      <LegacySpacer />
      <LegacyStackItem size={80} style={{ backgroundColor: '#aaa' }}>
        <Text typo="18">Item 2</Text>
      </LegacyStackItem>
    </LegacyHStack>
  ),

  name: 'Spacer',
}

export const WeightFixed: StoryObj<{}> = {
  render: () => (
    <LegacyHStack
      style={{ width: '100px', height: '80px', border: '1px solid #ffc0c0' }}
      justify="start"
      align="stretch"
    >
      <LegacyStackItem size={80} style={{ backgroundColor: '#ccc' }}>
        <Text typo="18">Item 1</Text>
      </LegacyStackItem>
      <LegacySpacer />
      <LegacyStackItem size={80} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <Text typo="18">Item 2</Text>
      </LegacyStackItem>
    </LegacyHStack>
  ),

  name: 'Fix-sized item',
}
