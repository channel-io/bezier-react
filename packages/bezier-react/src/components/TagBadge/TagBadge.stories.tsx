/* External dependencies */
import React from 'react'
import {
  type Meta,
  type Story,
} from '@storybook/react'
import base from 'paths.macro'

/* Internal dependencies */
import {
  styled,
} from 'Foundation'
import {
  getTitle,
} from 'Utils/storyUtils'
import {
  gap,
} from 'Utils/styleUtils'
import { noop } from 'Utils/functionUtils'
import {
  HStack,
  StackItem,
  VStack,
} from 'Components/Stack'
import {
  Badge,
  Tag,
  TagBadgeSize,
  TagBadgeVariant,
} from 'Components/TagBadge'
import mdx from './TagBadge.mdx'

export default {
  title: getTitle(base),
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as Meta

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${gap(4)}
`

export const Overview: Story<{}> = () => (
  <VStack spacing={16}>
    <StackItem>
      <Container>
        <Tag variant={TagBadgeVariant.Default}>default</Tag>
        <Tag variant={TagBadgeVariant.Blue}>blue</Tag>
        <Tag variant={TagBadgeVariant.Cobalt}>cobalt</Tag>
        <Tag variant={TagBadgeVariant.Teal}>teal</Tag>
        <Tag variant={TagBadgeVariant.Green}>green</Tag>
        <Tag variant={TagBadgeVariant.Olive}>olive</Tag>
        <Tag variant={TagBadgeVariant.Pink}>pink</Tag>
        <Tag variant={TagBadgeVariant.Navy}>navy</Tag>
        <Tag variant={TagBadgeVariant.Yellow}>yellow</Tag>
        <Tag variant={TagBadgeVariant.Orange}>orange</Tag>
        <Tag variant={TagBadgeVariant.Red}>red</Tag>
        <Tag variant={TagBadgeVariant.Purple}>purple</Tag>
      </Container>
    </StackItem>
    <StackItem>
      <Container>
        <Badge iconName="clock" variant={TagBadgeVariant.Default}>default</Badge>
        <Badge iconName="bookmark-filled" variant={TagBadgeVariant.Blue}>blue</Badge>
        <Badge iconName="time-elapsed" variant={TagBadgeVariant.Cobalt}>cobalt</Badge>
        <Badge iconName="view" variant={TagBadgeVariant.Teal}>teal</Badge>
        <Badge iconName="lightning-filled" variant={TagBadgeVariant.Green}>green</Badge>
        <Badge iconName="check-all" variant={TagBadgeVariant.Olive}>olive</Badge>
        <Badge iconName="heart-filled" variant={TagBadgeVariant.Pink}>pink</Badge>
        <Badge iconName="archive" variant={TagBadgeVariant.Navy}>navy</Badge>
        <Badge iconName="star-filled" variant={TagBadgeVariant.Yellow}>yellow</Badge>
        <Badge iconName="error-triangle-filled" variant={TagBadgeVariant.Orange}>orange</Badge>
        <Badge iconName="block" variant={TagBadgeVariant.Red}>red</Badge>
        <Badge iconName="trending-up" variant={TagBadgeVariant.Purple}>purple</Badge>
        <Badge iconName="clock" variant={TagBadgeVariant.MonochromeDark}>monochrome-dark</Badge>
        <Badge iconName="cancel" variant={TagBadgeVariant.MonochromeLight}>monochrome-light</Badge>
      </Container>
    </StackItem>
  </VStack>
)

export const BadgeWithoutText: Story<{}> = () => (
  <HStack spacing={4}>
    <StackItem>
      <Badge variant={TagBadgeVariant.Red} iconName="block" />
    </StackItem>
    <StackItem>
      <Badge variant={TagBadgeVariant.Orange} iconName="error-triangle-filled" />
    </StackItem>
    <StackItem>
      <Badge variant={TagBadgeVariant.Green} iconName="lightning-filled" />
    </StackItem>
  </HStack>
)

BadgeWithoutText.storyName = 'Usage (badges without text)'

export const DismissibleTag: Story<{}> = () => (
  <VStack spacing={4}>
    {
      [
        [TagBadgeVariant.Red, 'red'] as const,
        [TagBadgeVariant.Orange, 'orange'] as const,
        [TagBadgeVariant.Yellow, 'yellow'] as const,
        [TagBadgeVariant.Green, 'green'] as const,
        [TagBadgeVariant.Cobalt, 'cobalt'] as const,
        [TagBadgeVariant.Blue, 'blue'] as const,
        [TagBadgeVariant.Purple, 'purple'] as const,
      ]
        .map(([variant, label]) => (
          <StackItem key={variant}>
            <Tag variant={variant} onDelete={noop}>{ label }</Tag>
          </StackItem>
        ))
    }
  </VStack>
)

DismissibleTag.storyName = 'Usage (dismissible tags)'

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  border: 1px solid red;
  ${gap(4)}
`

export const Gap: Story<{}> = () => (
  <Items>
    <Badge iconName="clock" variant={TagBadgeVariant.Default}>default</Badge>
    <Badge iconName="bookmark-filled" variant={TagBadgeVariant.Blue}>blue</Badge>
    <Badge iconName="time-elapsed" variant={TagBadgeVariant.Cobalt}>cobalt</Badge>
    <Badge iconName="view" variant={TagBadgeVariant.Teal}>teal</Badge>
    <Badge iconName="lightning-filled" variant={TagBadgeVariant.Green}>green</Badge>
    <Badge iconName="check-all" variant={TagBadgeVariant.Olive}>olive</Badge>
    <Badge iconName="heart-filled" variant={TagBadgeVariant.Pink}>pink</Badge>
    <Badge iconName="archive" variant={TagBadgeVariant.Navy}>navy</Badge>
    <Badge iconName="star-filled" variant={TagBadgeVariant.Yellow}>yellow</Badge>
    <Badge iconName="error-triangle-filled" variant={TagBadgeVariant.Orange}>orange</Badge>
    <Badge iconName="block" variant={TagBadgeVariant.Red}>red</Badge>
    <Badge iconName="trending-up" variant={TagBadgeVariant.Purple}>purple</Badge>
    <Badge iconName="clock" variant={TagBadgeVariant.MonochromeDark}>monochrome-dark</Badge>
    <Badge iconName="cancel" variant={TagBadgeVariant.MonochromeLight}>monochrome-light</Badge>
  </Items>
)

Gap.storyName = 'Usage (multiple tags or badges with gap)'

export const SizeVariant: Story<{}> = () => (
  <VStack spacing={16}>
    {
      [
        [TagBadgeSize.XS, 'XS (18px)'] as const,
        [TagBadgeSize.S, 'S (20px)'] as const,
        [TagBadgeSize.M, 'M (20px)'] as const,
        [TagBadgeSize.L, 'L (22px)'] as const,
      ]
        .map(([size, label]) => (
          <StackItem key={size}>
            <HStack spacing={4}>
              <StackItem>
                <Tag size={size}>{ label }</Tag>
              </StackItem>
              <StackItem>
                <Badge size={size} iconName="clock">{ label }</Badge>
              </StackItem>
            </HStack>
          </StackItem>
        ))
    }
  </VStack>
)

SizeVariant.storyName = 'Variant (size)'

export const Variant: Story<{}> = () => (
  <VStack spacing={16}>
    {
      [
        [TagBadgeVariant.Default, 'default'] as const,
        [TagBadgeVariant.Blue, 'blue'] as const,
        [TagBadgeVariant.Cobalt, 'cobalt'] as const,
        [TagBadgeVariant.Teal, 'teal'] as const,
        [TagBadgeVariant.Green, 'green'] as const,
        [TagBadgeVariant.Olive, 'olive'] as const,
        [TagBadgeVariant.Pink, 'pink'] as const,
        [TagBadgeVariant.Navy, 'navy'] as const,
        [TagBadgeVariant.Yellow, 'yellow'] as const,
        [TagBadgeVariant.Orange, 'orange'] as const,
        [TagBadgeVariant.Red, 'red'] as const,
        [TagBadgeVariant.Purple, 'purple'] as const,
        [TagBadgeVariant.MonochromeDark, 'monochrome-dark'] as const,
        [TagBadgeVariant.MonochromeLight, 'monochrome-light'] as const,
      ]
        .map(([variant, label]) => (
          <StackItem key={variant}>
            <HStack spacing={4}>
              <StackItem>
                <Tag variant={variant}>{ label }</Tag>
              </StackItem>
              <StackItem>
                <Badge iconName="clock" variant={variant}>{ label }</Badge>
              </StackItem>
            </HStack>
          </StackItem>
        ))
    }
  </VStack>
)

Variant.storyName = 'Variant (color)'
