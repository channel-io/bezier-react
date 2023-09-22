import React from 'react'

import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import { styled } from '~/src/foundation'

import { range } from '~/src/utils/numberUtils'

import {
  Avatar,
  AvatarSize,
} from '~/src/components/Avatars/Avatar'
import {
  AvatarGroup,
  AvatarGroupEllipsisType,
} from '~/src/components/Avatars/AvatarGroup'
import { CheckableAvatar } from '~/src/components/Avatars/CheckableAvatar'
import {
  Emoji,
  EmojiSize,
} from '~/src/components/Emoji'
import {
  HStack,
  StackItem,
  VStack,
} from '~/src/components/Stack'
import { StatusType } from '~/src/components/Status'
import { Text } from '~/src/components/Text'

import mdx from './Avatars.mdx'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  parameters: {
    docs: {
      page: mdx,
    },
  },
}
export default meta

const SAMPLE_AVATARS = [
  {
    name: 'Channel.io',
    avatarUrl: 'https://cf.channel.io/thumb/200x200/pub-file/1/606d87d059a6093594c0/ch-symbol-filled-smiley-bg.png',
  },
  {
    avatarUrl: 'https://bit.ly/code-beast',
    name: 'Christian Nwamba',
  },
  {
    avatarUrl: 'https://bit.ly/kent-c-dodds',
    name: 'Kent Dodds',
  },
  {
    avatarUrl: 'https://bit.ly/ryan-florence',
    name: 'Ryan Florence',
  },
  {
    avatarUrl: 'https://bit.ly/dan-abramov',
    name: 'Dan Abrahmov',
  },
  {
    avatarUrl: 'https://bit.ly/prosper-baba',
    name: 'Prosper Otemuyiwa',
  },
  {
    avatarUrl: 'https://bit.ly/sage-adebayo',
    name: 'Segun Adebayo',
  },
]

const KAKAO_AVATAR = {
  name: 'kakao',
  avatarUrl: 'https://cf.channel.io/asset/plugin/images/app-messenger-kakao.png',
}

const NAVER_TALK_AVATAR = {
  name: 'naver-talk',
  avatarUrl: 'https://cf.channel.io/asset/plugin/images/app-messenger-naver-talk.png',
}

export const Overview: StoryFn<{}> = () => (
  <VStack spacing={16}>
    <StackItem>
      <HStack spacing={16}>
        { [AvatarSize.Size20, AvatarSize.Size36, AvatarSize.Size72, AvatarSize.Size120]
          .map(size => (
            <StackItem key={size}>
              <Avatar
                {...SAMPLE_AVATARS[0]}
                size={size}
              />
            </StackItem>
          )) }
      </HStack>
    </StackItem>

    <StackItem>
      <HStack spacing={16}>
        { [StatusType.Online, StatusType.Offline, StatusType.Lock]
          .map(status => (
            <StackItem key={status}>
              <Avatar
                {...SAMPLE_AVATARS[0]}
                status={status}
                size={AvatarSize.Size36}
              />
            </StackItem>
          )) }

        <StackItem>
          <Avatar
            {...SAMPLE_AVATARS[0]}
            size={AvatarSize.Size36}
          >
            <Avatar
              {...KAKAO_AVATAR}
              size={AvatarSize.Size20}
              showBorder
            />
          </Avatar>
        </StackItem>
      </HStack>
    </StackItem>

    <StackItem>
      <HStack spacing={16}>
        { [AvatarSize.Size24, AvatarSize.Size36, AvatarSize.Size42, AvatarSize.Size48]
          .map((size, i) => (
            <StackItem key={size}>
              <CheckableAvatar
                {...SAMPLE_AVATARS[0]}
                size={size}
                checked={i % 2 === 0}
                disabled={i % 3 === 1}
              />
            </StackItem>
          )) }
      </HStack>
    </StackItem>

    <StackItem>
      <HStack spacing={16}>
        <StackItem>
          <AvatarGroup max={4} size={AvatarSize.Size36}>
            { range(6).map((i) => (
              <Avatar key={i} {...SAMPLE_AVATARS[0]} />
            )) }
          </AvatarGroup>
        </StackItem>

        <StackItem>
          <AvatarGroup max={4} spacing={-8} size={AvatarSize.Size36}>
            { range(6).map((i) => (
              <Avatar key={i} {...SAMPLE_AVATARS[0]} />
            )) }
          </AvatarGroup>
        </StackItem>

        <StackItem>
          <AvatarGroup
            max={4}
            spacing={-8}
            ellipsisType={AvatarGroupEllipsisType.Count}
            size={AvatarSize.Size36}
          >
            { range(6).map((i) => (
              <Avatar key={i} {...SAMPLE_AVATARS[0]} />
            )) }
          </AvatarGroup>
        </StackItem>
      </HStack>
    </StackItem>
  </VStack>
)

export const UsageBasic: StoryObj<{}> = {
  render: () => (
    <HStack spacing={16}>
      { SAMPLE_AVATARS.map((avatar) => (
        <StackItem key={avatar.name}>
          <Avatar {...avatar} size={AvatarSize.Size36} />
        </StackItem>
      )) }
    </HStack>
  ),

  name: 'Usage (basic)',
}

export const UsagePresetStatus: StoryObj<{}> = {
  render: () => (
    <HStack spacing={16}>
      { [
        StatusType.Online,
        StatusType.Offline,
        StatusType.Lock,
        StatusType.OnlineCrescent,
        StatusType.OfflineCrescent,
      ].map((status) => (
        <StackItem key={status}>
          <Avatar
            {...SAMPLE_AVATARS[0]}
            status={status}
            size={AvatarSize.Size24}
          />
        </StackItem>
      )) }
    </HStack>
  ),

  name: 'Usage (with preset status)',
}

export const UsagePresetStatusWithSize: StoryObj<{}> = {
  render: () => (
    <HStack spacing={16}>
      { [AvatarSize.Size24, AvatarSize.Size36, AvatarSize.Size48].map((size) => (
        <StackItem key={size}>
          <Avatar
            {...SAMPLE_AVATARS[0]}
            status={StatusType.Online}
            size={size}
          />
        </StackItem>
      )) }
    </HStack>
  ),

  name: 'Usage (with preset status and size)',
}

const EmojiStatusWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: ${({ foundation }) => foundation?.theme['bg-white-high']};
  border-radius: 42%;
`

export const UsageCustomStatus: StoryObj<{}> = {
  render: () => (
    <HStack spacing={16}>
      <StackItem>
        <Avatar {...SAMPLE_AVATARS[0]} size={AvatarSize.Size36}>
          <Avatar {...KAKAO_AVATAR} size={AvatarSize.Size20} showBorder />
        </Avatar>
      </StackItem>

      <StackItem>
        <Avatar {...SAMPLE_AVATARS[0]} size={AvatarSize.Size36}>
          <Avatar {...NAVER_TALK_AVATAR} size={AvatarSize.Size20} showBorder />
        </Avatar>
      </StackItem>

      <StackItem>
        <Avatar {...SAMPLE_AVATARS[0]} size={AvatarSize.Size36}>
          <Avatar {...SAMPLE_AVATARS[0]} size={AvatarSize.Size20} showBorder />
        </Avatar>
      </StackItem>

      <StackItem>
        <Avatar {...SAMPLE_AVATARS[0]} size={AvatarSize.Size36}>
          <EmojiStatusWrapper>
            <Emoji
              name="smile"
              imageUrl="https://cf.channel.io/asset/emoji/images/80/smile.png"
              size={EmojiSize.Size20}
            />
          </EmojiStatusWrapper>
        </Avatar>
      </StackItem>
    </HStack>
  ),

  name: 'Usage (with custom status)',
}

export const UsageCustomStatusAvatar: StoryObj<{}> = {
  render: () => (
    <Avatar {...SAMPLE_AVATARS[0]} size={AvatarSize.Size48}>
      <Avatar {...KAKAO_AVATAR} size={AvatarSize.Size20} showBorder />
    </Avatar>
  ),

  name: 'Usage (avatar as custom status)',
}

export const UsageDisabled: StoryObj<{}> = {
  render: () => (
    <Avatar {...SAMPLE_AVATARS[0]} size={AvatarSize.Size36} disabled />
  ),

  name: 'Usage (disabled)',
}

export const UsageCheckableAvatar: StoryObj<{}> = {
  render: () => (
    <VStack spacing={16}>
      <StackItem>
        <HStack align="center" spacing={24}>
          <StackItem size={270}>
            <Text color="txt-black-darkest">Checkable (checked=false)</Text>
          </StackItem>

          <StackItem>
            <CheckableAvatar {...SAMPLE_AVATARS[0]} size={AvatarSize.Size36} />
          </StackItem>
        </HStack>
      </StackItem>

      <StackItem>
        <HStack align="center" spacing={24}>
          <StackItem size={270}>
            <Text color="txt-black-darkest">
              Checkable (checked=false, disabled)
            </Text>
          </StackItem>

          <StackItem>
            <CheckableAvatar
              {...SAMPLE_AVATARS[0]}
              size={AvatarSize.Size36}
              disabled
            />
          </StackItem>
        </HStack>
      </StackItem>

      <StackItem>
        <HStack align="center" spacing={24}>
          <StackItem size={270}>
            <Text color="txt-black-darkest">Checkable (checked=true)</Text>
          </StackItem>

          <StackItem>
            <CheckableAvatar
              {...SAMPLE_AVATARS[0]}
              size={AvatarSize.Size36}
              checked
            />
          </StackItem>
        </HStack>
      </StackItem>
    </VStack>
  ),

  name: 'Usage (checkable avatars)',
}

export const UsageGroupEllipsis: StoryObj<{}> = {
  render: () => (
    <VStack spacing={16}>
      <StackItem>
        <HStack align="center" spacing={24}>
          <StackItem size={150}>
            <Text color="txt-black-darkest">Ellipsis type = Icon</Text>
          </StackItem>

          <StackItem>
            <AvatarGroup max={4} size={AvatarSize.Size36}>
              { SAMPLE_AVATARS.map((avatar) => (
                <Avatar key={avatar.name} {...avatar} />
              )) }
            </AvatarGroup>
          </StackItem>
        </HStack>
      </StackItem>

      <StackItem>
        <HStack align="center" spacing={24}>
          <StackItem size={150}>
            <Text color="txt-black-darkest">Ellipsis type = Count</Text>
          </StackItem>

          <StackItem>
            <AvatarGroup max={4} size={AvatarSize.Size36} ellipsisType={AvatarGroupEllipsisType.Count}>
              { SAMPLE_AVATARS.map(avatar => <Avatar key={avatar.name} {...avatar} />) }
            </AvatarGroup>
          </StackItem>
        </HStack>
      </StackItem>
    </VStack>
  ),

  name: 'Usage (avatar group with ellipsis)',
}

export const UsageGroupSpacing: StoryObj<{}> = {
  render: () => (
    <VStack spacing={16}>
      <StackItem>
        <AvatarGroup max={4} spacing={8}>
          { SAMPLE_AVATARS.map((avatar) => (
            <Avatar key={avatar.name} {...avatar} />
          )) }
        </AvatarGroup>
      </StackItem>

      <StackItem>
        <AvatarGroup max={4} spacing={2}>
          { SAMPLE_AVATARS.map(avatar => <Avatar key={avatar.name} {...avatar} />) }
        </AvatarGroup>
      </StackItem>

      <StackItem>
        <AvatarGroup max={4} spacing={-8}>
          { SAMPLE_AVATARS.map(avatar => <Avatar key={avatar.name} {...avatar} />) }
        </AvatarGroup>
      </StackItem>
    </VStack>
  ),

  name: 'Usage (avatar group with spacing)',
}

export const VariantsSize: StoryObj<{}> = {
  render: () => (
    <VStack spacing={16}>
      { [
        AvatarSize.Size20,
        AvatarSize.Size24,
        AvatarSize.Size30,
        AvatarSize.Size36,
        AvatarSize.Size42,
        AvatarSize.Size48,
        AvatarSize.Size72,
        AvatarSize.Size90,
        AvatarSize.Size120,
      ]
        .map(size => (
          <StackItem key={size}>
            <HStack spacing={24}>
              <StackItem>
                <Text color="txt-black-darkest">{ `Size${size}` }</Text>
              </StackItem>
              <StackItem>
                <Avatar
                  {...SAMPLE_AVATARS[0]}
                  size={size}
                />
              </StackItem>
            </HStack>
          </StackItem>
        )) }
    </VStack>
  ),

  name: 'Variants (size)',
}
