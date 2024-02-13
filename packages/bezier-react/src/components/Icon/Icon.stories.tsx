import React, { useState } from 'react'

import {
  ArrowLeftIcon,
  BookmarkFilledIcon,
  CallInProgressIcon,
  ChannelBtnSmileFilledIcon,
  ChannelIcon,
  CheckCircleIcon,
  ChevronDownDoubleIcon,
  ChevronRightIcon,
  ClockIcon,
  EditIcon,
  EmailIcon,
  ErrorTriangleFilledIcon,
  type IconName,
  InboxIcon,
  InfoFilledIcon,
  SendForwardFilledIcon,
  SettingsIcon,
  TrashIcon,
  icons,
} from '@channel.io/bezier-icons'
import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import { type SemanticColor } from '~/src/types/tokens'
import { camelCase } from '~/src/utils/string'

import {
  LegacyHStack,
  LegacyStackItem,
  LegacyVStack,
} from '~/src/components/LegacyStack'
import { ListItem } from '~/src/components/ListItem'
import { Select } from '~/src/components/Select'
import { Stack } from '~/src/components/Stack'
import { Text } from '~/src/components/Text'
import { useToken } from '~/src/components/ThemeProvider'

import { Icon } from './Icon'
import mdx from './Icon.mdx'
import { type IconProps } from './Icon.types'

const meta: Meta<typeof Icon> = {
  component: Icon,
  parameters: {
    docs: {
      page: mdx,
    },
  },
}
export default meta

export const Playground: StoryObj<IconProps> = {
  args: {
    source: ChannelIcon,
    size: 'normal',
    color: 'bg-black-darker',
  },
}

const pascalCase = (str: string) =>
  camelCase(str).replace(/^./, (char) => char.toUpperCase())

export const AllIcons: StoryObj<Omit<IconProps, 'source'>> = {
  render: (args) => (
    <>
      { (Object.keys(icons) as IconName[]).map((iconName) => (
        <Stack
          key={iconName}
          display="inline-flex"
          direction="vertical"
          align="center"
          justify="center"
          wrap
          padding={6}
          spacing={12}
          width={120}
          height={120}
        >
          <Icon source={icons[iconName]} {...args} />
          <Text
            style={{
              wordBreak: 'break-word',
            }}
            typo="12"
            color="txt-black-darkest"
            align="center"
          >
            { pascalCase(iconName) }
          </Text>
        </Stack>
      )) }
    </>
  ),

  args: {
    size: 'normal',
    color: 'bg-black-darkest',
  },
}

export const Overview: StoryFn<{}> = () => (
  <LegacyVStack spacing={16}>
    <LegacyStackItem>
      <LegacyHStack spacing={8}>
        {
          [
            ChannelBtnSmileFilledIcon,
            CheckCircleIcon,
            InfoFilledIcon,
            ErrorTriangleFilledIcon,
            SendForwardFilledIcon,
            EmailIcon,
            InboxIcon,
            CallInProgressIcon,
            EditIcon,
            SettingsIcon,
            TrashIcon,
            ClockIcon,
            ChevronRightIcon,
            ArrowLeftIcon,
            ChevronDownDoubleIcon,
            BookmarkFilledIcon,
          ]
            .map((source, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <LegacyStackItem key={`item-${i}`}>
                <Icon source={source} color="txt-black-darkest" />
              </LegacyStackItem>
            ))
        }
      </LegacyHStack>
    </LegacyStackItem>
    <LegacyStackItem>
      <LegacyHStack spacing={8}>
        {
          [
            'txt-black-darkest' as const,
            'bgtxt-blue-normal' as const,
            'bgtxt-cobalt-normal' as const,
            'bgtxt-teal-normal' as const,
            'bgtxt-green-normal' as const,
            'bgtxt-olive-normal' as const,
            'bgtxt-yellow-normal' as const,
            'bgtxt-orange-normal' as const,
            'bgtxt-red-normal' as const,
            'bgtxt-pink-normal' as const,
            'bgtxt-purple-normal' as const,
            'bgtxt-navy-normal' as const,
          ]
            .map(semanticName => (
              <LegacyStackItem key={semanticName}>
                <Icon source={ChannelBtnSmileFilledIcon} color={semanticName} size="l" />
              </LegacyStackItem>
            ))
        }
      </LegacyHStack>
    </LegacyStackItem>
    <LegacyStackItem>
      <LegacyHStack spacing={8}>
        { ([
          'xxxs',
          'xxs',
          'xs',
          's',
          'normal',
          'l',
          'xl',
        ] as const).map((size) => (
          <LegacyStackItem key={size}>
            <Icon
              source={ChannelBtnSmileFilledIcon}
              color="txt-black-darkest"
              size={size}
            />
          </LegacyStackItem>
        )) }
      </LegacyHStack>
    </LegacyStackItem>
  </LegacyVStack>
)

function ColorIcon() {
  const [color, setColor] = useState<SemanticColor>('bgtxt-blue-normal')

  return (
    <LegacyVStack spacing={16}>
      <LegacyStackItem>
        <Icon
          source={ChannelBtnSmileFilledIcon}
          color={color}
          size="l"
        />
      </LegacyStackItem>
      <LegacyStackItem>
        <Select text={color} style={{ width: 200 }}>
          <div style={{ padding: 6, maxHeight: 200, overflowY: 'auto' }}>
            { Object.keys(useToken().semantic.color).map((semanticName) => (
              <ListItem
                key={semanticName}
                content={semanticName}
                onClick={() => setColor(semanticName as SemanticColor)}
              />
            )) }
          </div>
        </Select>
      </LegacyStackItem>
    </LegacyVStack>
  )
}

export const UsageColor: StoryObj<{}> = {
  render: () => <ColorIcon />,
  name: 'Usage (color)',
}

export const UsageSize: StoryFn<{}> = () => (
  <LegacyVStack spacing={16}>
    { ([
      { label: 'XXXS', size: 'xxxs' },
      { label: 'XXS', size: 'xxs' },
      { label: 'XS', size: 'xs' },
      { label: 'S', size: 's' },
      { label: 'Normal', size: 'normal' },
      { label: 'L', size: 'l' },
      { label: 'XL', size: 'xl' },
    ] as const).map(({ label, size }) => (
      <LegacyStackItem key={size}>
        <LegacyHStack spacing={24}>
          <LegacyStackItem size={100}>
            <Text typo="13" color="txt-black-darkest">
              { `${label} (${size}x${size})` }
            </Text>
          </LegacyStackItem>
          <LegacyStackItem>
            <Icon
              source={ChannelBtnSmileFilledIcon}
              color="txt-black-darkest"
              size={size}
            />
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
    )) }
  </LegacyVStack>
)

export const TipsMargin: StoryObj<{}> = {
  render: () => (
    <div style={{ border: '1px solid red' }}>
      <Icon
        source={ChannelBtnSmileFilledIcon}
        color="bgtxt-blue-normal"
        marginTop={16}
        marginRight={24}
        marginBottom={32}
        marginLeft={40}
      />
    </div>
  ),

  name: 'Tips (margin)',
}
