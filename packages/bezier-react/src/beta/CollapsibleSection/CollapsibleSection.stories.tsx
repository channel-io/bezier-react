import { useState } from 'react'

import {
  ChevronSmallRightIcon,
  InfoIcon,
  PlusIcon,
} from '@channel.io/bezier-icons'
import type { Meta, StoryObj } from '@storybook/react'


import { Box } from '~/src/beta/Box'
import { Text } from '~/src/beta/Text'

import {
  CollapsibleSection,
  CollapsibleSectionItem,
  CollapsibleSectionTrigger,
} from './CollapsibleSection'


const meta: Meta<typeof CollapsibleSection> = {
  title: 'Beta components/CollapsibleSection',
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
        <CollapsibleSectionTrigger content="Controlled section" />
        <CollapsibleSectionItem
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
          help="These settings apply to the section."
        />
        <CollapsibleSectionItem
          content="Profile"
          description="Update name and avatar"
        />
        <CollapsibleSectionItem
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

export const RichLabel: Story = {
  tags: ['!autodocs'],
  parameters: { controls: { disable: true } },
  render: () => (
    <Box width={360}>
      <CollapsibleSection defaultOpen>
        <CollapsibleSectionTrigger
          leadingContent={PlusIcon}
          help="Help text"
          content="Trigger"
          trailingContent={ChevronSmallRightIcon}
        />
        <CollapsibleSectionItem
          content="Profile"
          description="Chevron stays next to the label, trailing content stays at the right edge."
        />
      </CollapsibleSection>
    </Box>
  ),
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
