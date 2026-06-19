import { useState } from 'react'

import {
  ChevronDownIcon,
  ChevronUpIcon,
  InfoIcon,
} from '@channel.io/bezier-icons'
import type { Meta, StoryObj } from '@storybook/react'

import { Box } from '~/src/v3/Box'
import { SectionItem } from '~/src/v3/Section'
import { Text } from '~/src/v3/Text'

import {
  CollapsibleSection,
  CollapsibleSectionTrigger,
} from './CollapsibleSection'

const meta: Meta<typeof CollapsibleSection> = {
  title: 'V3 components/CollapsibleSection',
  component: CollapsibleSection,
}

export default meta

type Story = StoryObj<typeof CollapsibleSection>

function ControlledExample() {
  const [open, setOpen] = useState(true)

  return (
    <Box width={320}>
      <CollapsibleSection
        open={open}
        onOpenChange={setOpen}
      >
        <CollapsibleSectionTrigger
          content="Controlled section"
          trailingContent={open ? ChevronUpIcon : ChevronDownIcon}
        />
        <SectionItem
          content="Profile"
          description="This section is controlled externally."
        />
      </CollapsibleSection>
    </Box>
  )
}

export const Primary: Story = {
  render: () => (
    <Box width={320}>
      <CollapsibleSection defaultOpen>
        <CollapsibleSectionTrigger
          content="General"
          leadingContent={InfoIcon}
          trailingContent="Optional"
          help="These settings apply to the section."
        />
        <SectionItem
          content="Profile"
          description="Update name and avatar"
        />
        <SectionItem
          content="Notifications"
          description="Email, push, and desktop alerts"
        />
      </CollapsibleSection>
    </Box>
  ),
}

export const Controlled: Story = {
  tags: ['!autodocs'],
  parameters: { controls: { disable: true } },
  render: () => <ControlledExample />,
}

export const WithoutTrigger: Story = {
  tags: ['!autodocs'],
  parameters: { controls: { disable: true } },
  render: () => (
    <Box width={320}>
      <CollapsibleSection defaultOpen>
        <Text typo="14">
          Without `CollapsibleSectionTrigger`, children are treated as
          collapsible content.
        </Text>
      </CollapsibleSection>
    </Box>
  ),
}
