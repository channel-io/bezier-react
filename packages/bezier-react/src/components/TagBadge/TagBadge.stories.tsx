import React from 'react'

import {
  ArchiveIcon,
  BlockIcon,
  BookmarkFilledIcon,
  CancelIcon,
  CheckAllIcon,
  ClockIcon,
  ErrorTriangleFilledIcon,
  HeartFilledIcon,
  LightningFilledIcon,
  StarFilledIcon,
  TimeElapsedIcon,
  TrendingUpIcon,
  ViewIcon,
} from '@channel.io/bezier-icons'
import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import { styled } from '~/src/foundation'

import { noop } from '~/src/utils/functionUtils'
import { gap } from '~/src/utils/styleUtils'

import {
  HStack,
  StackItem,
  VStack,
} from '~/src/components/Stack'
import {
  Badge,
  Tag,
  TagBadgeSize,
  TagBadgeVariant,
} from '~/src/components/TagBadge'

import mdx from './TagBadge.mdx'

export default {
  component: Badge,
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

export const Overview: StoryFn<{}> = () => (
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
        <Badge icon={ClockIcon} variant={TagBadgeVariant.Default}>default</Badge>
        <Badge icon={BookmarkFilledIcon} variant={TagBadgeVariant.Blue}>blue</Badge>
        <Badge icon={TimeElapsedIcon} variant={TagBadgeVariant.Cobalt}>cobalt</Badge>
        <Badge icon={ViewIcon} variant={TagBadgeVariant.Teal}>teal</Badge>
        <Badge icon={LightningFilledIcon} variant={TagBadgeVariant.Green}>green</Badge>
        <Badge icon={CheckAllIcon} variant={TagBadgeVariant.Olive}>olive</Badge>
        <Badge icon={HeartFilledIcon} variant={TagBadgeVariant.Pink}>pink</Badge>
        <Badge icon={ArchiveIcon} variant={TagBadgeVariant.Navy}>navy</Badge>
        <Badge icon={StarFilledIcon} variant={TagBadgeVariant.Yellow}>yellow</Badge>
        <Badge icon={ErrorTriangleFilledIcon} variant={TagBadgeVariant.Orange}>orange</Badge>
        <Badge icon={BlockIcon} variant={TagBadgeVariant.Red}>red</Badge>
        <Badge icon={TrendingUpIcon} variant={TagBadgeVariant.Purple}>purple</Badge>
        <Badge icon={ClockIcon} variant={TagBadgeVariant.MonochromeDark}>monochrome-dark</Badge>
        <Badge icon={CancelIcon} variant={TagBadgeVariant.MonochromeLight}>monochrome-light</Badge>
      </Container>
    </StackItem>
  </VStack>
)

export const BadgeWithoutText: StoryObj<{}> = {
  render: () => (
    <HStack spacing={4}>
      <StackItem>
        <Badge variant={TagBadgeVariant.Red} icon={BlockIcon} />
      </StackItem>
      <StackItem>
        <Badge
          variant={TagBadgeVariant.Orange}
          icon={ErrorTriangleFilledIcon}
        />
      </StackItem>
      <StackItem>
        <Badge variant={TagBadgeVariant.Green} icon={LightningFilledIcon} />
      </StackItem>
    </HStack>
  ),

  name: 'Usage (badges without text)',
}

export const DismissibleTag: StoryObj<{}> = {
  render: () => (
    <VStack spacing={4}>
      { [
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
        )) }
    </VStack>
  ),

  name: 'Usage (dismissible tags)',
}

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  border: 1px solid red;
  ${gap(4)}
`

export const Gap: StoryObj<{}> = {
  render: () => (
    <Items>
      <Badge icon={ClockIcon} variant={TagBadgeVariant.Default}>
        default
      </Badge>
      <Badge icon={BookmarkFilledIcon} variant={TagBadgeVariant.Blue}>
        blue
      </Badge>
      <Badge icon={TimeElapsedIcon} variant={TagBadgeVariant.Cobalt}>
        cobalt
      </Badge>
      <Badge icon={ViewIcon} variant={TagBadgeVariant.Teal}>
        teal
      </Badge>
      <Badge icon={LightningFilledIcon} variant={TagBadgeVariant.Green}>
        green
      </Badge>
      <Badge icon={CheckAllIcon} variant={TagBadgeVariant.Olive}>
        olive
      </Badge>
      <Badge icon={HeartFilledIcon} variant={TagBadgeVariant.Pink}>
        pink
      </Badge>
      <Badge icon={ArchiveIcon} variant={TagBadgeVariant.Navy}>
        navy
      </Badge>
      <Badge icon={StarFilledIcon} variant={TagBadgeVariant.Yellow}>
        yellow
      </Badge>
      <Badge icon={ErrorTriangleFilledIcon} variant={TagBadgeVariant.Orange}>
        orange
      </Badge>
      <Badge icon={BlockIcon} variant={TagBadgeVariant.Red}>
        red
      </Badge>
      <Badge icon={TrendingUpIcon} variant={TagBadgeVariant.Purple}>
        purple
      </Badge>
      <Badge icon={ClockIcon} variant={TagBadgeVariant.MonochromeDark}>
        monochrome-dark
      </Badge>
      <Badge icon={CancelIcon} variant={TagBadgeVariant.MonochromeLight}>
        monochrome-light
      </Badge>
    </Items>
  ),

  name: 'Usage (multiple tags or badges with gap)',
}

export const SizeVariant: StoryObj<{}> = {
  render: () => (
    <VStack spacing={16}>
      { [
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
                <Badge size={size} icon={ClockIcon}>{ label }</Badge>
              </StackItem>
            </HStack>
          </StackItem>
        )) }
    </VStack>
  ),

  name: 'Variant (size)',
}

export const Variant: StoryObj<{}> = {
  render: () => (
    <VStack spacing={16}>
      { [
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
                <Badge icon={ClockIcon} variant={variant}>{ label }</Badge>
              </StackItem>
            </HStack>
          </StackItem>
        )) }
    </VStack>
  ),

  name: 'Variant (color)',
}
