import {
  ArchiveIcon,
  CheckIcon,
  ChevronSmallRightIcon,
  EditIcon,
  InfoIcon,
  PlusIcon,
  TrashIcon,
} from '@channel.io/bezier-icons'
import type { Meta, StoryObj } from '@storybook/react'

import { noop } from '~/src/utils/function'
import { Box } from '~/src/v3/Box'
import { Text } from '~/src/v3/Text'
import { VStack } from '~/src/v3/VStack'

import { Section, SectionItem, SectionLabel } from './Section'

const meta: Meta<typeof Section> = {
  title: 'V3 components/Section',
  component: Section,
}

export default meta

type Story = StoryObj<typeof Section>

export const Primary: Story = {
  render: (args) => (
    <Box width={320}>
      <Section {...args}>
        <SectionLabel content="General" />
        <SectionItem
          content="Profile"
          description="Update name and avatar"
          leadingContent={EditIcon}
          trailingContent={ChevronSmallRightIcon}
        />
        <SectionItem
          content="Notifications"
          description="Email, push, and desktop alerts"
          leadingContent={InfoIcon}
          trailingContent={ChevronSmallRightIcon}
        />
        <SectionItem
          content="Security"
          leadingContent={CheckIcon}
          trailingContent={ChevronSmallRightIcon}
        />
      </Section>
    </Box>
  ),
}

export const WithHelp: Story = {
  tags: ['!autodocs'],
  parameters: { controls: { disable: true } },
  render: () => (
    <Box width={360}>
      <Section>
        <SectionLabel
          content="Assignment"
          leadingContent={InfoIcon}
          trailingContent={
            <Text
              typo="12"
              color="text-neutral-lighter"
            >
              Optional
            </Text>
          }
          help="These settings apply to newly created conversations."
        />
        <SectionItem
          content="Round robin"
          description="Distribute conversations evenly across the team."
          leadingContent={CheckIcon}
          active
        />
        <SectionItem
          content="Manual assignment"
          description="Members choose conversations directly."
        />
      </Section>
    </Box>
  ),
}

export const InteractiveItems: Story = {
  tags: ['!autodocs'],
  parameters: { controls: { disable: true } },
  render: () => (
    <Box width={320}>
      <Section>
        <SectionLabel content="Actions" />
        <SectionItem
          content="Create channel"
          leadingContent={PlusIcon}
          onClick={noop}
        />
        <SectionItem
          content="Open archive"
          description="Rendered as an anchor."
          href="#archive"
          leadingContent={ArchiveIcon}
          trailingContent={ChevronSmallRightIcon}
        />
        <SectionItem
          content="Delete"
          leadingContent={TrashIcon}
          disabled
          onClick={noop}
        />
      </Section>
    </Box>
  ),
}

export const RichContent: Story = {
  tags: ['!autodocs'],
  parameters: { controls: { disable: true } },
  render: () => (
    <Box width={360}>
      <Section>
        <SectionLabel content="Rich content" />
        <SectionItem
          content={
            <Text typo="14">
              Move to <Text color="text-accent-blue">priority inbox</Text>
            </Text>
          }
          description={
            <Text
              typo="12"
              color="text-neutral-light"
            >
              ReactNode content can be used for inline emphasis.
            </Text>
          }
          leadingContent={CheckIcon}
          trailingContent={
            <Text
              typo="12"
              color="text-neutral-lighter"
            >
              Optional
            </Text>
          }
        />
      </Section>
    </Box>
  ),
}

export const Sizes: Story = {
  tags: ['!autodocs'],
  parameters: { controls: { disable: true } },
  render: () => (
    <VStack spacing={16}>
      <Box width={320}>
        <Section>
          <SectionLabel content="Size m" />
          <SectionItem
            size="m"
            content="Default item"
            description="32px minimum height."
            leadingContent={InfoIcon}
          />
        </Section>
      </Box>
      <Box width={320}>
        <Section>
          <SectionLabel content="Size l" />
          <SectionItem
            size="l"
            content="Large item"
            description="For roomier list rows."
            leadingContent={InfoIcon}
          />
        </Section>
      </Box>
    </VStack>
  ),
}
