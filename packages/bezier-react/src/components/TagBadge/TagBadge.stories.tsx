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

import { noop } from '~/src/utils/function'

import {
  LegacyHStack,
  LegacyStackItem,
  LegacyVStack,
} from '~/src/components/LegacyStack'
import { Stack } from '~/src/components/Stack'
import {
  Badge,
  Tag,
  TagBadgeSize,
  TagBadgeVariant,
} from '~/src/components/TagBadge'

import mdx from './TagBadge.mdx'

const meta: Meta<typeof Badge> = {
  component: Badge,
  parameters: {
    docs: {
      page: mdx,
    },
  },
}
export default meta

export const Overview: StoryFn<{}> = () => (
  <LegacyVStack spacing={16}>
    <LegacyStackItem>
      <Stack
        direction="horizontal"
        spacing={4}
        wrap
      >
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
      </Stack>
    </LegacyStackItem>
    <LegacyStackItem>
      <Stack
        direction="horizontal"
        spacing={4}
        wrap
      >
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
      </Stack>
    </LegacyStackItem>
  </LegacyVStack>
)

export const BadgeWithoutText: StoryObj<{}> = {
  render: () => (
    <LegacyHStack spacing={4}>
      <LegacyStackItem>
        <Badge variant={TagBadgeVariant.Red} icon={BlockIcon} />
      </LegacyStackItem>
      <LegacyStackItem>
        <Badge
          variant={TagBadgeVariant.Orange}
          icon={ErrorTriangleFilledIcon}
        />
      </LegacyStackItem>
      <LegacyStackItem>
        <Badge variant={TagBadgeVariant.Green} icon={LightningFilledIcon} />
      </LegacyStackItem>
    </LegacyHStack>
  ),

  name: 'Usage (badges without text)',
}

export const DismissibleTag: StoryObj<{}> = {
  render: () => (
    <LegacyVStack spacing={4}>
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
          <LegacyStackItem key={variant}>
            <Tag variant={variant} onDelete={noop}>{ label }</Tag>
          </LegacyStackItem>
        )) }
    </LegacyVStack>
  ),

  name: 'Usage (dismissible tags)',
}

export const Gap: StoryObj<{}> = {
  render: () => (
    <Stack
      direction="horizontal"
      wrap
      width={400}
      spacing={4}
      borderWidth={1}
      borderColor="bdr-black-light"
    >
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
    </Stack>
  ),

  name: 'Usage (multiple tags or badges with gap)',
}

export const SizeVariant: StoryObj<{}> = {
  render: () => (
    <LegacyVStack spacing={16}>
      { [
        [TagBadgeSize.XS, 'XS (18px)'] as const,
        [TagBadgeSize.S, 'S (20px)'] as const,
        [TagBadgeSize.M, 'M (20px)'] as const,
        [TagBadgeSize.L, 'L (22px)'] as const,
      ]
        .map(([size, label]) => (
          <LegacyStackItem key={size}>
            <LegacyHStack spacing={4}>
              <LegacyStackItem>
                <Tag size={size}>{ label }</Tag>
              </LegacyStackItem>
              <LegacyStackItem>
                <Badge size={size} icon={ClockIcon}>{ label }</Badge>
              </LegacyStackItem>
            </LegacyHStack>
          </LegacyStackItem>
        )) }
    </LegacyVStack>
  ),

  name: 'Variant (size)',
}

export const Variant: StoryObj<{}> = {
  render: () => (
    <LegacyVStack spacing={16}>
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
          <LegacyStackItem key={variant}>
            <LegacyHStack spacing={4}>
              <LegacyStackItem>
                <Tag variant={variant}>{ label }</Tag>
              </LegacyStackItem>
              <LegacyStackItem>
                <Badge icon={ClockIcon} variant={variant}>{ label }</Badge>
              </LegacyStackItem>
            </LegacyHStack>
          </LegacyStackItem>
        )) }
    </LegacyVStack>
  ),

  name: 'Variant (color)',
}
