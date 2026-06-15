import { ArrowRightIcon, OpenInNewIcon, PlusIcon } from '@channel.io/bezier-icons'
import { type Meta, type StoryObj } from '@storybook/react'

import { Button } from '~/src/v3/Button'
import { IconButton } from '~/src/v3/IconButton'
import { VStack } from '~/src/v3/VStack'

import { TabActions, TabContent, TabItem, TabList, Tabs } from './Tabs'
import { type TabSize, type TabsProps } from './Tabs.types'

function Content({ children }: { children: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 96,
        marginTop: 16,
        color: 'var(--color-text-neutral-light)',
      }}
    >
      {children}
    </div>
  )
}

function getActionButtonSize(size?: TabSize) {
  return (
    {
      s: 'xs',
      m: 's',
    } as const
  )[size ?? 'm']
}

const meta: Meta<typeof Tabs> = {
  title: 'V3 components/Tabs',
  component: Tabs,
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: ['s', 'm'],
    },
    activationMode: {
      control: {
        type: 'radio',
      },
      options: ['automatic', 'manual'],
    },
  },
}

export default meta

export const Primary: StoryObj<TabsProps> = {
  render: (args) => (
    <Tabs
      {...args}
      defaultValue="all"
    >
      <TabList>
        <TabItem
          value="all"
          leadingContent={PlusIcon}
        >
          All
        </TabItem>
        <TabItem value="open">Open</TabItem>
        <TabItem value="closed">Closed</TabItem>
      </TabList>

      <TabContent value="all">
        <Content>All content</Content>
      </TabContent>
      <TabContent value="open">
        <Content>Open content</Content>
      </TabContent>
      <TabContent value="closed">
        <Content>Closed content</Content>
      </TabContent>
    </Tabs>
  ),

  args: {
    size: 'm',
    activationMode: 'automatic',
  },
}

export const WithActions: StoryObj<TabsProps> = {
  render: (args) => (
    <Tabs
      {...args}
      defaultValue="all"
    >
      <TabList>
        <TabItem
          value="all"
          leadingContent={PlusIcon}
        >
          All
        </TabItem>
        <TabItem value="open">Open</TabItem>
        <TabItem value="closed">Closed</TabItem>

        <TabActions>
          <Button
            label="View all"
            trailingContent={OpenInNewIcon}
            size={getActionButtonSize(args.size)}
            variant="ghost"
            semantic="secondary"
          />
          <IconButton
            aria-label="Add tab"
            content={PlusIcon}
            size={getActionButtonSize(args.size)}
            variant="ghost"
            semantic="secondary"
          />
        </TabActions>
      </TabList>

      <TabContent value="all">
        <Content>All content</Content>
      </TabContent>
      <TabContent value="open">
        <Content>Open content</Content>
      </TabContent>
      <TabContent value="closed">
        <Content>Closed content</Content>
      </TabContent>
    </Tabs>
  ),

  args: {
    size: 'm',
    activationMode: 'automatic',
  },
}

export const Sizes: StoryObj<TabsProps> = {
  render: (args) => (
    <VStack spacing={24}>
      {(['s', 'm'] as const).map((size) => (
        <Tabs
          key={size}
          {...args}
          size={size}
          defaultValue="active"
        >
          <TabList>
            <TabItem
              value="active"
              leadingContent={PlusIcon}
            >
              Active
            </TabItem>
            <TabItem value="normal">Normal</TabItem>
            <TabItem
              value="disabled"
              disabled
            >
              Disabled
            </TabItem>

            <TabActions>
              <Button
                label="Action"
                size={getActionButtonSize(size)}
                variant="ghost"
                semantic="secondary"
              />
            </TabActions>
          </TabList>
        </Tabs>
      ))}
    </VStack>
  ),

  args: {
    activationMode: 'automatic',
  },

  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
  },
}

export const Truncation: StoryObj<TabsProps> = {
  render: (args) => (
    <Tabs
      {...args}
      defaultValue="short"
    >
      <TabList>
        <TabItem
          value="short"
          maxWidth={80}
        >
          Short
        </TabItem>
        <TabItem
          value="long"
          maxWidth={120}
          leadingContent={ArrowRightIcon}
        >
          This is a very long label that should truncate
        </TabItem>
        <TabItem
          value="long-with-trailing-icon"
          maxWidth={160}
          trailingContent={ArrowRightIcon}
        >
          This is a very long label with trailing icon
        </TabItem>
      </TabList>
    </Tabs>
  ),

  args: {
    size: 'm',
    activationMode: 'automatic',
  },
}
