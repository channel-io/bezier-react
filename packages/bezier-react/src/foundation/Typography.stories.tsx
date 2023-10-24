import React from 'react'

import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import { styled } from '~/src/foundation'

import {
  StackItem,
  VStack,
} from '~/src/components/Stack'
import { Text } from '~/src/components/Text'

import { Typography } from './Typography'
import mdx from './Typography.mdx'

const meta: Meta = {
  title: 'Foundation/Typography',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    typography: {
      control: {
        type: 'radio',
      },
      options: Object.keys(Typography),
    },
  },
}
export default meta

const Span = styled.span<{ typography: keyof typeof Typography }>`
  ${({ typography }) => Typography[typography]}
`

export const Primary: StoryObj<{
  typography: keyof typeof Typography
}> = {
  render: ({ typography }) => (
    <Span typography={typography}>
      Channel.io, an all-in-one business solution.
    </Span>
  ),

  args: {
    typography: 'Size13',
  },
}

export const Overview: StoryFn<{}> = () => (
  <VStack spacing={16}>
    <StackItem>
      <Text
        typo={Typography.Size11}
        color="txt-black-darkest"
      >
        11Aa한글 <b>11Aa한글</b>
      </Text>
    </StackItem>
    <StackItem>
      <Text
        typo={Typography.Size12}
        color="txt-black-darkest"
      >
        12Aa한글 <b>12Aa한글</b>
      </Text>
    </StackItem>
    <StackItem>
      <Text
        typo={Typography.Size13}
        color="txt-black-darkest"
      >
        13Aa한글 <b>13Aa한글</b>
      </Text>
    </StackItem>
    <StackItem>
      <Text
        typo={Typography.Size14}
        color="txt-black-darkest"
      >
        14Aa한글 <b>14Aa한글</b>
      </Text>
    </StackItem>
    <StackItem>
      <Text
        typo={Typography.Size15}
        color="txt-black-darkest"
      >
        15Aa한글 <b>15Aa한글</b>
      </Text>
    </StackItem>
    <StackItem>
      <Text
        typo={Typography.Size16}
        color="txt-black-darkest"
      >
        16Aa한글 <b>16Aa한글</b>
      </Text>
    </StackItem>
    <StackItem>
      <Text
        typo={Typography.Size17}
        color="txt-black-darkest"
      >
        17Aa한글 <b>17Aa한글</b>
      </Text>
    </StackItem>
    <StackItem>
      <Text
        typo={Typography.Size18}
        color="txt-black-darkest"
      >
        18Aa한글 <b>18Aa한글</b>
      </Text>
    </StackItem>
    <StackItem>
      <Text
        typo={Typography.Size22}
        color="txt-black-darkest"
      >
        22Aa한글 <b>22Aa한글</b>
      </Text>
    </StackItem>
    <StackItem>
      <Text
        typo={Typography.Size24}
        color="txt-black-darkest"
      >
        24Aa한글 <b>24Aa한글</b>
      </Text>
    </StackItem>
  </VStack>
)

export const UsageText: StoryObj<{}> = {
  render: () => (
    <Text as="p" typo={Typography.Size15} color="txt-black-darkest">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum
      elit erat, eu euismod odio tincidunt vel. Nulla non consequat ligula.
      Nulla quis justo at enim sodales aliquet. Proin placerat varius elit, et
      molestie erat ornare ut. Ut pharetra ultrices lacus. Morbi vehicula auctor
      lectus ac convallis. Etiam scelerisque feugiat lectus, nec gravida enim
      mollis eu. Cras ut urna imperdiet, blandit nisi nec, auctor ipsum. Aliquam
      eu nisl tellus. Phasellus non porta dui. Pellentesque fringilla enim ut
      volutpat commodo. In hac habitasse platea dictumst.
    </Text>
  ),

  name: 'Usage (via Text)',
}

const TypographicCode = styled.code`
  ${Typography.Size15}
  color: ${({ foundation }) => foundation?.theme['txt-black-darkest']};
`

export const UsageInterpolation: StoryObj<{}> = {
  render: () => (
    <pre>
      <TypographicCode>
        { `function main() {
    console.log('hello, world!');
  }` }
      </TypographicCode>
    </pre>
  ),

  name: 'Usage (via interpolation)',
}
