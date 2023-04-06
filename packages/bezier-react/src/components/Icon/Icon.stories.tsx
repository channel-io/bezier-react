/* External dependencies */
import React, { useState } from 'react'

import {
  type Meta,
  type Story,
} from '@storybook/react'
import base from 'paths.macro'

/* Internal dependencies */
import {
  LightFoundation,
  type SemanticNames,
  styled,
  Typography,
} from '~/src/foundation'

import {
  getObjectFromEnum,
  getTitle,
  iconList,
} from '~/src/utils/storyUtils'
import { camelCase } from '~/src/utils/stringUtils'

import { Select } from '~/src/components/Forms/Inputs/Select'
import { ListItem } from '~/src/components/ListItem'
import {
  HStack,
  StackItem,
  VStack,
} from '~/src/components/Stack'
import { Text } from '~/src/components/Text'

import { Icon } from './Icon'
import mdx from './Icon.mdx'
import type IconProps from './Icon.types'
import { IconSize } from './Icon.types'
import icons, {
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
} from './generated'

export default {
  title: getTitle(base),
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
        options: getObjectFromEnum(IconSize),
      },
    },
  },
} as Meta

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

export const Playground: Story<IconProps> = (args) => (<Icon {...args} />)

Playground.args = {
  source: ChannelIcon,
  size: IconSize.Normal,
  color: 'bg-black-darker',
}

const pascalCase = (str: string) => camelCase(str).replace(/^./, (char) => char.toUpperCase())

export const AllIcons: Story<Omit<IconProps, 'source'>> = (args) => (
  <>
    { iconList.map((iconName) => (
      <IconInfo key={iconName}>
        <Icon
          source={icons[iconName]}
          {...args}
        />
        <Name>{ pascalCase(iconName) }</Name>
      </IconInfo>
    )) }
  </>
)

AllIcons.args = {
  size: IconSize.Normal,
  color: 'bg-black-darker',
}

export const Overview: Story<{}> = () => (
  <VStack spacing={16}>
    <StackItem>
      <HStack spacing={8}>
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
              <StackItem key={`item-${i}`}>
                <Icon source={source} color="txt-black-darkest" />
              </StackItem>
            ))
        }
      </HStack>
    </StackItem>
    <StackItem>
      <HStack spacing={8}>
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
              <StackItem key={semanticName}>
                <Icon source={ChannelBtnSmileFilledIcon} color={semanticName} size={IconSize.L} />
              </StackItem>
            ))
        }
      </HStack>
    </StackItem>
    <StackItem>
      <HStack spacing={8}>
        {
          [
            IconSize.XXXS,
            IconSize.XXS,
            IconSize.XS,
            IconSize.S,
            IconSize.Normal,
            IconSize.L,
            IconSize.XL,
          ]
            .map(size => (
              <StackItem key={size}>
                <Icon source={ChannelBtnSmileFilledIcon} color="txt-black-darkest" size={size} />
              </StackItem>
            ))
        }
      </HStack>
    </StackItem>
  </VStack>
)

export const UsageColor: Story<{}> = () => {
  const [color, setColor] = useState<SemanticNames>('bgtxt-blue-normal')

  return (
    <VStack spacing={16}>
      <StackItem>
        <Icon
          source={ChannelBtnSmileFilledIcon}
          color={color}
          size={IconSize.L}
        />
      </StackItem>
      <StackItem>
        <Select text={color} style={{ width: 200 }}>
          <div style={{ padding: 6, maxHeight: 200, overflowY: 'auto' }}>
            { Object.keys(LightFoundation.theme)
              .map((semanticName) => (
                <ListItem
                  key={semanticName}
                  content={semanticName}
                  onClick={() => setColor(semanticName as SemanticNames)}
                />
              )) }
          </div>
        </Select>
      </StackItem>
    </VStack>
  )
}

UsageColor.storyName = 'Usage (color)'

export const UsageSize: Story<{}> = () => (
  <VStack spacing={16}>
    {
      [
        { label: 'XXXS', size: IconSize.XXXS },
        { label: 'XXS', size: IconSize.XXS },
        { label: 'XS', size: IconSize.XS },
        { label: 'S', size: IconSize.S },
        { label: 'Normal', size: IconSize.Normal },
        { label: 'L', size: IconSize.L },
        { label: 'XL', size: IconSize.XL },
      ]
        .map(({ label, size }) => (
          <StackItem key={size}>
            <HStack spacing={24}>
              <StackItem size={100}>
                <Text
                  typo={Typography.Size13}
                  color="txt-black-darkest"
                >
                  { `${label} (${size}x${size})` }
                </Text>
              </StackItem>
              <StackItem>
                <Icon
                  source={ChannelBtnSmileFilledIcon}
                  color="txt-black-darkest"
                  size={size}
                />
              </StackItem>
            </HStack>
          </StackItem>
        ))
    }
  </VStack>
)

export const TipsMargin: Story<{}> = () => (
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
)

TipsMargin.storyName = 'Tips (margin)'
