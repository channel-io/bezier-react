import { useState } from 'react'

import {
  ArrowLeftIcon,
  BookmarkFilledIcon,
  CallInProgressIcon,
  ChannelBtnFilledIcon,
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
import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { type BetaSemanticColor } from '~/src/types/beta-tokens'
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
import { useTokens } from '~/src/components/ThemeProvider'

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
  tags: ['!autodocs'],
}

export default meta

export const Primary: StoryObj<IconProps> = {
  args: {
    source: ChannelBtnFilledIcon,
    size: 'm',
    color: 'icon-neutral-heavier',
  },
}

const pascalCase = (str: string) =>
  camelCase(str).replace(/^./, (char) => char.toUpperCase())

export const AllIcons: StoryObj<Omit<IconProps, 'source'>> = {
  render: (args) => (
    <>
      {(Object.keys(icons) as IconName[]).map((iconName) => (
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
          <Icon
            source={icons[iconName]}
            {...args}
          />
          <Text
            style={{
              wordBreak: 'break-word',
            }}
            typo="12"
            color="text-neutral"
            align="center"
          >
            {pascalCase(iconName)}
          </Text>
        </Stack>
      ))}
    </>
  ),

  args: {
    size: 'm',
    color: 'icon-neutral-heavier',
  },
}

export const Overview: StoryFn<{}> = () => (
  <LegacyVStack spacing={16}>
    <LegacyStackItem>
      <LegacyHStack spacing={8}>
        {[
          ChannelBtnFilledIcon,
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
        ].map((source, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <LegacyStackItem key={`item-${i}`}>
            <Icon
              source={source}
              color="icon-neutral-heavier"
            />
          </LegacyStackItem>
        ))}
      </LegacyHStack>
    </LegacyStackItem>
    <LegacyStackItem>
      <LegacyHStack spacing={8}>
        {[
          'icon-neutral-heavier' as const,
          'icon-accent-blue' as const,
          'icon-accent-cobalt' as const,
          'icon-accent-teal' as const,
          'icon-accent-green' as const,
          'icon-accent-olive' as const,
          'icon-accent-yellow' as const,
          'icon-accent-orange' as const,
          'icon-accent-red' as const,
          'icon-accent-pink' as const,
          'icon-accent-purple' as const,
          'icon-accent-navy' as const,
        ].map((semanticName) => (
          <LegacyStackItem key={semanticName}>
            <Icon
              source={ChannelBtnFilledIcon}
              color={semanticName}
              size="l"
            />
          </LegacyStackItem>
        ))}
      </LegacyHStack>
    </LegacyStackItem>
    <LegacyStackItem>
      <LegacyHStack spacing={8}>
        {(['xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl'] as const).map((size) => (
          <LegacyStackItem key={size}>
            <Icon
              source={ChannelBtnFilledIcon}
              color="icon-neutral-heavier"
              size={size}
            />
          </LegacyStackItem>
        ))}
      </LegacyHStack>
    </LegacyStackItem>
  </LegacyVStack>
)

function ColorIcon() {
  const [color, setColor] = useState<BetaSemanticColor>('icon-accent-blue')

  return (
    <LegacyVStack spacing={16}>
      <LegacyStackItem>
        <Icon
          source={ChannelBtnFilledIcon}
          color={color}
          size="l"
        />
      </LegacyStackItem>
      <LegacyStackItem>
        <Select
          text={color}
          style={{ width: 200 }}
        >
          <div style={{ padding: 6, maxHeight: 200, overflowY: 'auto' }}>
            {Object.keys(useTokens().semantic.color).map((semanticName) => (
              <ListItem
                key={semanticName}
                content={semanticName}
                onClick={() => setColor(semanticName as BetaSemanticColor)}
              />
            ))}
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
    {(['xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl'] as const).map((size) => (
      <LegacyStackItem key={size}>
        <LegacyHStack spacing={24}>
          <LegacyStackItem size={30}>
            <Text
              typo="13"
              color="text-neutral"
            >
              {size}
            </Text>
          </LegacyStackItem>
          <LegacyStackItem>
            <Icon
              source={ChannelBtnFilledIcon}
              color="icon-neutral-heavier"
              size={size}
            />
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
    ))}
  </LegacyVStack>
)

export const TipsMargin: StoryObj<{}> = {
  render: () => (
    <div style={{ border: '1px solid red' }}>
      <Icon
        source={ChannelBtnFilledIcon}
        color="text-accent-blue"
        marginTop={16}
        marginRight={24}
        marginBottom={32}
        marginLeft={40}
      />
    </div>
  ),

  name: 'Tips (margin)',
}
