import React from 'react'

import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import { range } from '~/src/utils/number'

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
  LegacyHStack,
  LegacyStackItem,
  LegacyVStack,
} from '~/src/components/LegacyStack'
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
  <LegacyVStack spacing={16}>
    <LegacyStackItem>
      <LegacyHStack spacing={16}>
        { [AvatarSize.Size20, AvatarSize.Size36, AvatarSize.Size72, AvatarSize.Size120]
          .map(size => (
            <LegacyStackItem key={size}>
              <Avatar
                {...SAMPLE_AVATARS[0]}
                size={size}
              />
            </LegacyStackItem>
          )) }
      </LegacyHStack>
    </LegacyStackItem>

    <LegacyStackItem>
      <LegacyHStack spacing={16}>
        { [StatusType.Online, StatusType.Offline, StatusType.Lock]
          .map(status => (
            <LegacyStackItem key={status}>
              <Avatar
                {...SAMPLE_AVATARS[0]}
                status={status}
                size={AvatarSize.Size36}
              />
            </LegacyStackItem>
          )) }

        <LegacyStackItem>
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
        </LegacyStackItem>
      </LegacyHStack>
    </LegacyStackItem>

    <LegacyStackItem>
      <LegacyHStack spacing={16}>
        { [AvatarSize.Size24, AvatarSize.Size36, AvatarSize.Size42, AvatarSize.Size48]
          .map((size, i) => (
            <LegacyStackItem key={size}>
              <CheckableAvatar
                {...SAMPLE_AVATARS[0]}
                size={size}
                checked={i % 2 === 0}
                disabled={i % 3 === 1}
              />
            </LegacyStackItem>
          )) }
      </LegacyHStack>
    </LegacyStackItem>

    <LegacyStackItem>
      <LegacyHStack spacing={16}>
        <LegacyStackItem>
          <AvatarGroup max={4} size={AvatarSize.Size36}>
            { range(6).map((i) => (
              <Avatar key={i} {...SAMPLE_AVATARS[0]} />
            )) }
          </AvatarGroup>
        </LegacyStackItem>

        <LegacyStackItem>
          <AvatarGroup max={4} spacing={-8} size={AvatarSize.Size36}>
            { range(6).map((i) => (
              <Avatar key={i} {...SAMPLE_AVATARS[0]} />
            )) }
          </AvatarGroup>
        </LegacyStackItem>

        <LegacyStackItem>
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
        </LegacyStackItem>
      </LegacyHStack>
    </LegacyStackItem>
  </LegacyVStack>
)

export const UsageBasic: StoryObj<{}> = {
  render: () => (
    <LegacyHStack spacing={16}>
      { SAMPLE_AVATARS.map((avatar) => (
        <LegacyStackItem key={avatar.name}>
          <Avatar {...avatar} size={AvatarSize.Size36} />
        </LegacyStackItem>
      )) }
    </LegacyHStack>
  ),

  name: 'Usage (basic)',
}

export const UsagePresetStatus: StoryObj<{}> = {
  render: () => (
    <LegacyHStack spacing={16}>
      { [
        StatusType.Online,
        StatusType.Offline,
        StatusType.Lock,
        StatusType.OnlineCrescent,
        StatusType.OfflineCrescent,
      ].map((status) => (
        <LegacyStackItem key={status}>
          <Avatar
            {...SAMPLE_AVATARS[0]}
            status={status}
            size={AvatarSize.Size24}
          />
        </LegacyStackItem>
      )) }
    </LegacyHStack>
  ),

  name: 'Usage (with preset status)',
}

export const UsagePresetStatusWithSize: StoryObj<{}> = {
  render: () => (
    <LegacyHStack spacing={16}>
      { [AvatarSize.Size24, AvatarSize.Size36, AvatarSize.Size48].map((size) => (
        <LegacyStackItem key={size}>
          <Avatar
            {...SAMPLE_AVATARS[0]}
            status={StatusType.Online}
            size={size}
          />
        </LegacyStackItem>
      )) }
    </LegacyHStack>
  ),

  name: 'Usage (with preset status and size)',
}

export const UsageCustomStatus: StoryObj<{}> = {
  render: () => (
    <LegacyHStack spacing={16}>
      <LegacyStackItem>
        <Avatar {...SAMPLE_AVATARS[0]} size={AvatarSize.Size36}>
          <Avatar {...KAKAO_AVATAR} size={AvatarSize.Size20} showBorder />
        </Avatar>
      </LegacyStackItem>

      <LegacyStackItem>
        <Avatar {...SAMPLE_AVATARS[0]} size={AvatarSize.Size36}>
          <Avatar {...NAVER_TALK_AVATAR} size={AvatarSize.Size20} showBorder />
        </Avatar>
      </LegacyStackItem>

      <LegacyStackItem>
        <Avatar {...SAMPLE_AVATARS[0]} size={AvatarSize.Size36}>
          <Avatar {...SAMPLE_AVATARS[0]} size={AvatarSize.Size20} showBorder />
        </Avatar>
      </LegacyStackItem>

      <LegacyStackItem>
        <Avatar {...SAMPLE_AVATARS[0]} size={AvatarSize.Size36}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 24,
            height: 24,
            backgroundColor: 'var(--bg-white-high',
            borderRadius: '42%',
          }}
          >
            <Emoji
              name="smile"
              imageUrl="https://cf.channel.io/asset/emoji/images/80/smile.png"
              size={EmojiSize.Size20}
            />
          </div>
        </Avatar>
      </LegacyStackItem>
    </LegacyHStack>
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
    <LegacyVStack spacing={16}>
      <LegacyStackItem>
        <LegacyHStack align="center" spacing={24}>
          <LegacyStackItem size={270}>
            <Text color="txt-black-darkest">Checkable (checked=false)</Text>
          </LegacyStackItem>

          <LegacyStackItem>
            <CheckableAvatar {...SAMPLE_AVATARS[0]} size={AvatarSize.Size36} />
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>

      <LegacyStackItem>
        <LegacyHStack align="center" spacing={24}>
          <LegacyStackItem size={270}>
            <Text color="txt-black-darkest">
              Checkable (checked=false, disabled)
            </Text>
          </LegacyStackItem>

          <LegacyStackItem>
            <CheckableAvatar
              {...SAMPLE_AVATARS[0]}
              size={AvatarSize.Size36}
              disabled
            />
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>

      <LegacyStackItem>
        <LegacyHStack align="center" spacing={24}>
          <LegacyStackItem size={270}>
            <Text color="txt-black-darkest">Checkable (checked=true)</Text>
          </LegacyStackItem>

          <LegacyStackItem>
            <CheckableAvatar
              {...SAMPLE_AVATARS[0]}
              size={AvatarSize.Size36}
              checked
            />
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
    </LegacyVStack>
  ),

  name: 'Usage (checkable avatars)',
}

export const UsageGroupEllipsis: StoryObj<{}> = {
  render: () => (
    <LegacyVStack spacing={16}>
      <LegacyStackItem>
        <LegacyHStack align="center" spacing={24}>
          <LegacyStackItem size={150}>
            <Text color="txt-black-darkest">Ellipsis type = Icon</Text>
          </LegacyStackItem>

          <LegacyStackItem>
            <AvatarGroup max={4} size={AvatarSize.Size36}>
              { SAMPLE_AVATARS.map((avatar) => (
                <Avatar key={avatar.name} {...avatar} />
              )) }
            </AvatarGroup>
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>

      <LegacyStackItem>
        <LegacyHStack align="center" spacing={24}>
          <LegacyStackItem size={150}>
            <Text color="txt-black-darkest">Ellipsis type = Count</Text>
          </LegacyStackItem>

          <LegacyStackItem>
            <AvatarGroup max={4} size={AvatarSize.Size36} ellipsisType={AvatarGroupEllipsisType.Count}>
              { SAMPLE_AVATARS.map(avatar => <Avatar key={avatar.name} {...avatar} />) }
            </AvatarGroup>
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
    </LegacyVStack>
  ),

  name: 'Usage (avatar group with ellipsis)',
}

export const UsageGroupSpacing: StoryObj<{}> = {
  render: () => (
    <LegacyVStack spacing={16}>
      <LegacyStackItem>
        <AvatarGroup max={4} spacing={8}>
          { SAMPLE_AVATARS.map((avatar) => (
            <Avatar key={avatar.name} {...avatar} />
          )) }
        </AvatarGroup>
      </LegacyStackItem>

      <LegacyStackItem>
        <AvatarGroup max={4} spacing={2}>
          { SAMPLE_AVATARS.map(avatar => <Avatar key={avatar.name} {...avatar} />) }
        </AvatarGroup>
      </LegacyStackItem>

      <LegacyStackItem>
        <AvatarGroup max={4} spacing={-8}>
          { SAMPLE_AVATARS.map(avatar => <Avatar key={avatar.name} {...avatar} />) }
        </AvatarGroup>
      </LegacyStackItem>
    </LegacyVStack>
  ),

  name: 'Usage (avatar group with spacing)',
}

export const VariantsSize: StoryObj<{}> = {
  render: () => (
    <LegacyVStack spacing={16}>
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
          <LegacyStackItem key={size}>
            <LegacyHStack spacing={24}>
              <LegacyStackItem>
                <Text color="txt-black-darkest">{ `Size${size}` }</Text>
              </LegacyStackItem>
              <LegacyStackItem>
                <Avatar
                  {...SAMPLE_AVATARS[0]}
                  size={size}
                />
              </LegacyStackItem>
            </LegacyHStack>
          </LegacyStackItem>
        )) }
    </LegacyVStack>
  ),

  name: 'Variants (size)',
}
