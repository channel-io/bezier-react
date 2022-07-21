/* External dependencies */
import React from 'react'
import {
  type Meta,
  type Story,
} from '@storybook/react'
import {
  range,
} from 'lodash-es'
import base from 'paths.macro'

/* Internal dependencies */
import { styled } from 'Foundation'
import { getTitle } from 'Utils/storyUtils'
import {
  Avatar,
  AvatarSize,
} from 'Components/Avatars/Avatar'
import {
  AvatarGroup,
  AvatarGroupEllipsisType,
} from 'Components/Avatars/AvatarGroup'
import {
  CheckableAvatar,
} from 'Components/Avatars/CheckableAvatar'
import {
  Emoji,
  EmojiSize,
} from 'Components/Emoji'
import {
  HStack,
  StackItem,
  VStack,
} from 'Components/Stack'
import {
  StatusType,
} from 'Components/Status'
import {
  Text,
} from 'Components/Text'
import mdx from './Avatars.mdx'

export default {
  title: getTitle(base),
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as Meta

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

export const Overview: Story<{}> = () => (
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
                isChecked={i % 2 === 0}
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
            { range(6).map(i => (
              <Avatar
                key={i}
                {...SAMPLE_AVATARS[0]}
              />
            )) }
          </AvatarGroup>
        </StackItem>

        <StackItem>
          <AvatarGroup max={4} spacing={-8} size={AvatarSize.Size36}>
            { range(6).map(i => (
              <Avatar
                key={i}
                {...SAMPLE_AVATARS[0]}
              />
            )) }
          </AvatarGroup>
        </StackItem>

        <StackItem>
          <AvatarGroup max={4} spacing={-8} ellipsisType={AvatarGroupEllipsisType.Count} size={AvatarSize.Size36}>
            { range(6).map(i => (
              <Avatar
                key={i}
                {...SAMPLE_AVATARS[0]}
              />
            )) }
          </AvatarGroup>
        </StackItem>
      </HStack>
    </StackItem>
  </VStack>
)

export const UsageBasic: Story<{}> = () => (
  <HStack spacing={16}>
    { SAMPLE_AVATARS.map(meta => (
      <StackItem key={meta.name}>
        <Avatar
          {...meta}
          size={AvatarSize.Size36}
        />
      </StackItem>
    )) }
  </HStack>
)

UsageBasic.storyName = 'Usage (basic)'

export const UsagePresetStatus: Story<{}> = () => (
  <HStack spacing={16}>
    { [
      StatusType.Online,
      StatusType.Offline,
      StatusType.Lock,
      StatusType.OnlineCrescent,
      StatusType.OfflineCrescent,
    ]
      .map(status => (
        <StackItem key={status}>
          <Avatar
            {...SAMPLE_AVATARS[0]}
            status={status}
            size={AvatarSize.Size24}
          />
        </StackItem>
      )) }
  </HStack>
)

UsagePresetStatus.storyName = 'Usage (with preset status)'

export const UsagePresetStatusWithSize: Story<{}> = () => (
  <HStack spacing={16}>
    { [AvatarSize.Size24, AvatarSize.Size36, AvatarSize.Size48]
      .map(size => (
        <StackItem key={size}>
          <Avatar
            {...SAMPLE_AVATARS[0]}
            status={StatusType.Online}
            size={size}
          />
        </StackItem>
      )) }
  </HStack>
)

UsagePresetStatusWithSize.storyName = 'Usage (with preset status and size)'

const EmojiStatusWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 42%;
  background-color: ${({ foundation }) => foundation?.theme['bg-white-high']};
`

export const UsageCustomStatus: Story<{}> = () => (
  <HStack spacing={16}>
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

    <StackItem>
      <Avatar
        {...SAMPLE_AVATARS[0]}
        size={AvatarSize.Size36}
      >
        <Avatar
          {...NAVER_TALK_AVATAR}
          size={AvatarSize.Size20}
          showBorder
        />
      </Avatar>
    </StackItem>

    <StackItem>
      <Avatar
        {...SAMPLE_AVATARS[0]}
        size={AvatarSize.Size36}
      >
        <Avatar
          {...SAMPLE_AVATARS[0]}
          size={AvatarSize.Size20}
          showBorder
        />
      </Avatar>
    </StackItem>

    <StackItem>
      <Avatar
        {...SAMPLE_AVATARS[0]}
        size={AvatarSize.Size36}
      >
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
)

UsageCustomStatus.storyName = 'Usage (with custom status)'

export const UsageCustomStatusAvatar: Story<{}> = () => (
  <Avatar
    {...SAMPLE_AVATARS[0]}
    size={AvatarSize.Size48}
  >
    <Avatar
      {...KAKAO_AVATAR}
      size={AvatarSize.Size20}
      showBorder
    />
  </Avatar>
)

UsageCustomStatusAvatar.storyName = 'Usage (avatar as custom status)'

export const UsageDisabled: Story<{}> = () => (
  <Avatar
    {...SAMPLE_AVATARS[0]}
    size={AvatarSize.Size36}
    disabled
  />
)

UsageDisabled.storyName = 'Usage (disabled)'

export const UsageCheckableAvatar: Story<{}> = () => (
  <VStack spacing={16}>
    <StackItem>
      <HStack align="center" spacing={24}>
        <StackItem size={270}>
          <Text color="txt-black-darkest">Checkable (checked=false)</Text>
        </StackItem>

        <StackItem>
          <CheckableAvatar
            {...SAMPLE_AVATARS[0]}
            size={AvatarSize.Size36}
          />
        </StackItem>
      </HStack>
    </StackItem>

    <StackItem>
      <HStack align="center" spacing={24}>
        <StackItem size={270}>
          <Text color="txt-black-darkest">Checkable (checked=false, readonly)</Text>
        </StackItem>

        <StackItem>
          <CheckableAvatar
            {...SAMPLE_AVATARS[0]}
            size={AvatarSize.Size36}
            isCheckable={false}
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
            isChecked
          />
        </StackItem>
      </HStack>
    </StackItem>
  </VStack>
)

UsageCheckableAvatar.storyName = 'Usage (checkable avatars)'

export const UsageGroupEllipsis: Story<{}> = () => (
  <VStack spacing={16}>
    <StackItem>
      <HStack align="center" spacing={24}>
        <StackItem size={150}>
          <Text color="txt-black-darkest">Ellipsis type = Icon</Text>
        </StackItem>

        <StackItem>
          <AvatarGroup max={4} size={AvatarSize.Size36}>
            { SAMPLE_AVATARS.map(meta => <Avatar {...meta} />) }
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
            { SAMPLE_AVATARS.map(meta => <Avatar {...meta} />) }
          </AvatarGroup>
        </StackItem>
      </HStack>
    </StackItem>
  </VStack>
)

UsageGroupEllipsis.storyName = 'Usage (avatar group with ellipsis)'

export const UsageGroupSpacing: Story<{}> = () => (
  <VStack spacing={16}>
    <StackItem>
      <AvatarGroup max={4} spacing={8}>
        { SAMPLE_AVATARS.map(meta => <Avatar {...meta} />) }
      </AvatarGroup>
    </StackItem>

    <StackItem>
      <AvatarGroup max={4} spacing={2}>
        { SAMPLE_AVATARS.map(meta => <Avatar {...meta} />) }
      </AvatarGroup>
    </StackItem>

    <StackItem>
      <AvatarGroup max={4} spacing={-8}>
        { SAMPLE_AVATARS.map(meta => <Avatar {...meta} />) }
      </AvatarGroup>
    </StackItem>
  </VStack>
)

UsageGroupSpacing.storyName = 'Usage (avatar group with spacing)'

export const VariantsSize: Story<{}> = () => (
  <VStack spacing={16}>
    {
      [
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
        ))
    }
  </VStack>
)

VariantsSize.storyName = 'Variants (size)'
