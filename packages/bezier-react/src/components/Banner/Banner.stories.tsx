import React from 'react'

import {
  BlockIcon,
  CancelIcon,
  CancelSmallIcon,
  ChannelIcon,
  CheckCircleFilledIcon,
  ErrorTriangleFilledIcon,
  Hourglass3Icon,
  InfoIcon,
  LightbulbIcon,
} from '@channel.io/bezier-icons'
import type {
  Meta,
  StoryFn,
  StoryObj,
} from '@storybook/react'

import { noop } from '~/src/utils/function'
import { getObjectFromEnum } from '~/src/utils/story'

import {
  LegacyStackItem,
  LegacyVStack,
} from '~/src/components/LegacyStack'

import { Banner } from './Banner'
import mdx from './Banner.mdx'
import {
  type BannerProps,
  BannerVariant,
} from './Banner.types'

const meta: Meta<typeof Banner> = {
  component: Banner,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    variant: {
      control: {
        type: 'radio',
      },
      options: getObjectFromEnum(BannerVariant),
    },
    hasLink: {
      control: {
        type: 'boolean',
      },
    },
    linkText: {
      control: {
        type: 'text',
      },
    },
    linkTo: {
      control: {
        type: 'text',
      },
    },
  },
}
export default meta

export const Playground: StoryObj<BannerProps> = {
  args: {
    variant: BannerVariant.Default,
    icon: LightbulbIcon,
    content: 'Information here.',
    actionIcon: CancelSmallIcon,
    onClickAction: noop,
  },
}

export const Overview: StoryFn<{}> = () => (
  <LegacyVStack spacing={6} align="stretch">
    <LegacyStackItem>
      <Banner
        variant={BannerVariant.Default}
        icon={LightbulbIcon}
        content="Information here."
        actionIcon={CancelIcon}
      />
    </LegacyStackItem>
    <LegacyStackItem>
      <Banner
        variant={BannerVariant.Blue}
        icon={LightbulbIcon}
        content="Information here."
      />
    </LegacyStackItem>
    <LegacyStackItem>
      <Banner
        variant={BannerVariant.Cobalt}
        icon={InfoIcon}
        content="This chat has not been assigned to anyone yet. Try to assign a member and proceed the conversation!"
      />
    </LegacyStackItem>
    <LegacyStackItem>
      <Banner
        variant={BannerVariant.Green}
        icon={CheckCircleFilledIcon}
        content="Now Running..."
      />
    </LegacyStackItem>
    <LegacyStackItem>
      <Banner
        variant={BannerVariant.Orange}
        icon={ErrorTriangleFilledIcon}
        content="This chat has not been assigned to anyone yet. Try to assign a member and proceed the conversation!"
      />
    </LegacyStackItem>
    <LegacyStackItem>
      <Banner
        variant={BannerVariant.Red}
        icon={BlockIcon}
        content="This chat has not been assigned to anyone yet. Try to assign a member and proceed the conversation!"
      />
    </LegacyStackItem>
    <LegacyStackItem>
      <Banner
        variant={BannerVariant.Alt}
        icon={Hourglass3Icon}
        content="This chat has not been assigned to anyone yet. Try to assign a member and proceed the conversation!"
      />
    </LegacyStackItem>
  </LegacyVStack>
)

export const UsageMinWidth: StoryObj<{}> = {
  render: () => (
    <LegacyVStack spacing={6} align="start">
      <LegacyStackItem>
        <Banner
          variant={BannerVariant.Orange}
          icon={ErrorTriangleFilledIcon}
          content="네."
        />
      </LegacyStackItem>
    </LegacyVStack>
  ),

  name: 'Usage (min width)',
}

export const UsageFullWidth: StoryObj<{}> = {
  render: () => (
    <LegacyVStack spacing={6} align="start">
      <LegacyStackItem style={{ width: 360, border: '1px solid red' }}>
        <Banner
          variant={BannerVariant.Orange}
          icon={ErrorTriangleFilledIcon}
          content="This chat has not been assigned to anyone yet. Try to assign a member and proceed the conversation!"
        />
      </LegacyStackItem>
      <LegacyStackItem style={{ width: 480, border: '1px solid red' }}>
        <Banner
          variant={BannerVariant.Orange}
          icon={ErrorTriangleFilledIcon}
          content="This chat has not been assigned to anyone yet. Try to assign a member and proceed the conversation!"
        />
      </LegacyStackItem>
      <LegacyStackItem style={{ width: 720, border: '1px solid red' }}>
        <Banner
          variant={BannerVariant.Orange}
          icon={ErrorTriangleFilledIcon}
          content="This chat has not been assigned to anyone yet. Try to assign a member and proceed the conversation!"
        />
      </LegacyStackItem>
    </LegacyVStack>
  ),

  name: 'Usage (full width)',
}

export const UsageMaxWidth: StoryObj<{}> = {
  render: () => (
    <LegacyVStack spacing={6} align="start">
      <LegacyStackItem>
        <Banner
          variant={BannerVariant.Cobalt}
          icon={InfoIcon}
          // eslint-disable-next-line max-len
          content={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis laoreet felis. Fusce sit amet blandit sem. Aliquam erat volutpat. Pellentesque tempor arcu non scelerisque rutrum. Proin placerat imperdiet gravida. In efficitur augue ut maximus placerat. Quisque vitae pellentesque urna. Sed sagittis enim quis laoreet dictum. Morbi fringilla, justo sit amet dapibus bibendum, nisl nisl suscipit dolor, eget venenatis urna velit in dolor.\n\nNunc accumsan ligula sit amet interdum accumsan. Etiam gravida est risus, in interdum elit egestas ut. Aliquam sit amet lorem malesuada, commodo tortor eu, semper dui. Integer ultricies porta ex sed tincidunt. Sed accumsan orci eu arcu facilisis congue ac hendrerit lacus. Etiam erat velit, interdum auctor cursus at, interdum vel augue. Integer gravida, nibh vel lacinia blandit, ex quam dapibus lectus, at sollicitudin lorem purus vel nulla. Suspendisse ac tellus eget risus condimentum facilisis sed vitae turpis. Fusce fringilla commodo aliquam. Quisque eget justo purus. Suspendisse ut lobortis turpis, vitae fermentum augue. Donec viverra, orci ut lobortis euismod, est nibh iaculis metus, sit amet mattis ex elit eget tellus.'
          }
        />
      </LegacyStackItem>
    </LegacyVStack>
  ),

  name: 'Usage (max width)',
}

export const UsageConsecutive: StoryObj<{}> = {
  render: () => (
    <LegacyVStack spacing={6} align="stretch">
      <LegacyStackItem>
        <Banner
          variant={BannerVariant.Cobalt}
          icon={InfoIcon}
          content="전화번호 설정하는 게 좋아요."
          hasLink
          linkText="설정하기"
        />
      </LegacyStackItem>
      <LegacyStackItem>
        <Banner
          variant={BannerVariant.Orange}
          icon={ErrorTriangleFilledIcon}
          content="빠진 내용을 모두 입력해주세요."
        />
      </LegacyStackItem>
      <LegacyStackItem>
        <Banner
          variant={BannerVariant.Default}
          icon={InfoIcon}
          content="아래 내용을 입력해주세요."
          hasLink
          linkText="사용안내"
          actionIcon={CancelIcon}
        />
      </LegacyStackItem>
    </LegacyVStack>
  ),

  name: 'Usage (consecutive)',
}

export const UsageNoIcon: StoryObj<{}> = {
  render: () => (
    <Banner
      icon={null}
      variant={BannerVariant.Green}
      content="이제는 모든 기능을 사용할 수 있습니다."
      hasLink
      linkText="바로가기"
    />
  ),

  name: 'Usage (no icon)',
}

export const UsageLink: StoryObj<{}> = {
  render: () => (
    <Banner
      variant={BannerVariant.Default}
      icon={InfoIcon}
      content="아래 내용을 입력해주세요."
      hasLink
      linkText="사용안내"
      actionIcon={CancelIcon}
    />
  ),

  name: 'Usage (link)',
}

export const UsageLinkTo: StoryObj<{}> = {
  render: () => (
    <Banner
      variant={BannerVariant.Cobalt}
      icon={ChannelIcon}
      content="채널톡 정말 좋은 서비스에요."
      hasLink
      linkText="사용안내"
      linkTo="https://channel.io"
      actionIcon={CancelIcon}
    />
  ),

  name: 'Usage (link to external location)',
}
