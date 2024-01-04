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

import {
  LightFoundation,
  type SemanticNames,
  styled,
} from '~/src/foundation'

import {
  getObjectFromEnum,
  iconList,
} from '~/src/utils/story'
import { camelCase } from '~/src/utils/string'

import { Select } from '~/src/components/Forms/Inputs/Select'
import {
  LegacyHStack,
  LegacyStackItem,
  LegacyVStack,
} from '~/src/components/LegacyStack'
import { ListItem } from '~/src/components/ListItem'
import { Text } from '~/src/components/Text'

import { Icon } from './Icon'
import mdx from './Icon.mdx'
import {
  type IconProps,
  IconSize,
} from './Icon.types'

const meta: Meta<typeof Icon> = {
  component: Icon,
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
      options: getObjectFromEnum(IconSize),
    },
  },
}
export default meta

const IconInfo = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
`

const Name = styled.p`
  text-align: center;
`

export const Playground: StoryObj<IconProps> = {
  args: {
    source: ChannelIcon,
    size: IconSize.Normal,
    color: 'bg-black-darker',
  },
}

const pascalCase = (str: string) =>
  camelCase(str).replace(/^./, (char) => char.toUpperCase())

export const AllIcons: StoryObj<Omit<IconProps, 'source'>> = {
  render: (args) => (
    <>
      { iconList.map((iconName) => (
        <IconInfo key={iconName}>
          <Icon source={icons[iconName]} {...args} />
          <Name>{ pascalCase(iconName) }</Name>
        </IconInfo>
      )) }
    </>
  ),

  args: {
    size: IconSize.Normal,
    color: 'bg-black-darker',
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
                <Icon source={ChannelBtnSmileFilledIcon} color={semanticName} size={IconSize.L} />
              </LegacyStackItem>
            ))
        }
      </LegacyHStack>
    </LegacyStackItem>
    <LegacyStackItem>
      <LegacyHStack spacing={8}>
        { [
          IconSize.XXXS,
          IconSize.XXS,
          IconSize.XS,
          IconSize.S,
          IconSize.Normal,
          IconSize.L,
          IconSize.XL,
        ].map((size) => (
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

export const UsageColor: StoryObj<{}> = {
  render: function Render() {
    const [color, setColor] = useState<SemanticNames>('bgtxt-blue-normal')

    return (
      <LegacyVStack spacing={16}>
        <LegacyStackItem>
          <Icon
            source={ChannelBtnSmileFilledIcon}
            color={color}
            size={IconSize.L}
          />
        </LegacyStackItem>
        <LegacyStackItem>
          <Select text={color} style={{ width: 200 }}>
            <div style={{ padding: 6, maxHeight: 200, overflowY: 'auto' }}>
              { Object.keys(LightFoundation.theme).map((semanticName) => (
                <ListItem
                  key={semanticName}
                  content={semanticName}
                  onClick={() => setColor(semanticName as SemanticNames)}
                />
              )) }
            </div>
          </Select>
        </LegacyStackItem>
      </LegacyVStack>
    )
  },

  name: 'Usage (color)',
}

export const UsageSize: StoryFn<{}> = () => (
  <LegacyVStack spacing={16}>
    { [
      { label: 'XXXS', size: IconSize.XXXS },
      { label: 'XXS', size: IconSize.XXS },
      { label: 'XS', size: IconSize.XS },
      { label: 'S', size: IconSize.S },
      { label: 'Normal', size: IconSize.Normal },
      { label: 'L', size: IconSize.L },
      { label: 'XL', size: IconSize.XL },
    ].map(({ label, size }) => (
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
        mt={16}
        mr={24}
        mb={32}
        ml={40}
      />
    </div>
  ),

  name: 'Tips (margin)',
}
