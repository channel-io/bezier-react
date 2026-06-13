import {
  BlockIcon,
  CancelIcon,
  ChannelBtnFilledIcon,
  CheckCircleFilledIcon,
  ErrorTriangleFilledIcon,
  InfoIcon,
  LightbulbIcon,
} from '@channel.io/bezier-icons'
import { type Meta, type StoryObj } from '@storybook/react'

import { noop } from '~/src/utils/function'
import { Box } from '~/src/v3/Box'
import { VStack } from '~/src/v3/VStack'

import { Banner } from './Banner'
import {
  type BannerProps,
  type BannerVariant,
} from './Banner.types'

const VARIANTS: BannerVariant[] = [
  'default',
  'blue',
  'cobalt',
  'green',
  'orange',
  'red',
]

const meta: Meta<typeof Banner> = {
  title: 'V3 components/Banner',
  component: Banner,
  args: {
    variant: 'default',
    leadingIcon: LightbulbIcon,
    content: 'Information here.',
    actionIcon: CancelIcon,
    actionAriaLabel: 'Close',
    onClickAction: noop,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: VARIANTS,
    },
    hasLink: {
      control: 'boolean',
    },
    linkText: {
      control: 'text',
    },
    linkTo: {
      control: 'text',
    },
    actionAriaLabel: {
      control: 'text',
    },
  },
}

export default meta

type Story = StoryObj<typeof Banner>

/**
 * Adjust `variant` / `content` / `hasLink` / `actionIcon` with the controls panel.
 */
export const Primary: Story = {}

/**
 * Each variant.
 */
export const Variants: Story = {
  tags: ['!autodocs'],
  parameters: { controls: { disable: true } },
  render: () => (
    <VStack spacing={6}>
      <Banner
        variant="default"
        leadingIcon={LightbulbIcon}
        content="Information here."
        actionIcon={CancelIcon}
      />
      <Banner
        variant="blue"
        leadingIcon={LightbulbIcon}
        content="Information here."
      />
      <Banner
        variant="cobalt"
        leadingIcon={InfoIcon}
        content="This chat has not been assigned to anyone yet. Try to assign a member and proceed the conversation!"
      />
      <Banner
        variant="green"
        leadingIcon={CheckCircleFilledIcon}
        content="Now Running..."
      />
      <Banner
        variant="orange"
        leadingIcon={ErrorTriangleFilledIcon}
        content="This chat has not been assigned to anyone yet. Try to assign a member and proceed the conversation!"
      />
      <Banner
        variant="red"
        leadingIcon={BlockIcon}
        content="This chat has not been assigned to anyone yet. Try to assign a member and proceed the conversation!"
      />
    </VStack>
  ),
}

/**
 * Banner expands to fit its parent width.
 */
export const FullWidth: Story = {
  tags: ['!autodocs'],
  parameters: { controls: { disable: true } },
  render: () => (
    <VStack spacing={6}>
      {[360, 480, 720].map((width) => (
        <Box
          key={width}
          width={width}
        >
          <Banner
            variant="orange"
            leadingIcon={ErrorTriangleFilledIcon}
            content="This chat has not been assigned to anyone yet. Try to assign a member and proceed the conversation!"
          />
        </Box>
      ))}
    </VStack>
  ),
}

/**
 * Banner can show an inline link after the message.
 */
export const Link: Story = {
  tags: ['!autodocs'],
  parameters: { controls: { disable: true } },
  render: () => (
    <Banner
      variant="default"
      leadingIcon={InfoIcon}
      content="아래 내용을 입력해주세요."
      hasLink
      linkText="사용안내"
      actionIcon={CancelIcon}
    />
  ),
}

/**
 * Banner link can point to an external location.
 */
export const ExternalLink: Story = {
  tags: ['!autodocs'],
  parameters: { controls: { disable: true } },
  render: () => (
    <Banner
      variant="cobalt"
      leadingIcon={ChannelBtnFilledIcon}
      content="채널톡 정말 좋은 서비스에요."
      hasLink
      linkText="사용안내"
      linkTo="https://channel.io"
      actionIcon={CancelIcon}
    />
  ),
}

/**
 * Banner content wraps across multiple lines.
 */
export const LongContent: StoryObj<BannerProps> = {
  tags: ['!autodocs'],
  parameters: { controls: { disable: true } },
  render: () => (
    <Banner
      variant="cobalt"
      leadingIcon={InfoIcon}
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis laoreet felis. Fusce sit amet blandit sem. Aliquam erat volutpat. Pellentesque tempor arcu non scelerisque rutrum. Proin placerat imperdiet gravida. In efficitur augue ut maximus placerat."
    />
  ),
}
