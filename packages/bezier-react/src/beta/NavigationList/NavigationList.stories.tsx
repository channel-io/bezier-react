import {
  AppsIcon,
  ChatProgressIcon,
  DotIcon,
  ErrorFilledIcon,
  SettingsIcon,
} from '@channel.io/bezier-icons'
import type { Meta, StoryObj } from '@storybook/react'

import { Badge } from '~/src/beta/Badge'
import { Icon } from '~/src/beta/Icon'

import { NavigationGroup, NavigationItem, NavigationList } from '.'

const meta: Meta<typeof NavigationList> = {
  title: 'Beta components/NavigationList',
  component: NavigationList,
}

export default meta

type Story = StoryObj<typeof NavigationList>

export const Primary: Story = {
  render: () => (
    <NavigationList
      aria-label="Settings"
      style={{ width: 260 }}
    >
      <NavigationItem
        href="/settings/dashboard"
        content="Dashboard"
        leadingContent={ChatProgressIcon}
      />
      <NavigationGroup
        content="General"
        leadingContent={SettingsIcon}
        defaultOpen
      >
        <NavigationItem
          href="/settings/general/profile"
          content="Channel profile with a very long navigation item label that should be truncated"
          active
          aria-current="page"
        />
        <NavigationItem
          href="/settings/general/apps"
          content="Apps"
          trailingContent={
            <Badge
              size="xs"
              variant="blue"
            >
              Beta
            </Badge>
          }
        />
      </NavigationGroup>
      <NavigationGroup
        content="Integrations"
        leadingContent={AppsIcon}
      >
        <NavigationItem
          href="/settings/integrations/web"
          content="Web"
        />
      </NavigationGroup>
    </NavigationList>
  ),
}

export const Nested: Story = {
  render: () => (
    <NavigationList
      aria-label="Nested navigation"
      style={{ width: 260 }}
    >
      <NavigationGroup
        content="Workspace"
        leadingContent={SettingsIcon}
        defaultOpen
      >
        <NavigationItem
          href="/workspace/overview"
          content="Overview"
        />
        <NavigationGroup
          content="Members"
          defaultOpen
          trailingContent={
            <Icon
              source={DotIcon}
              size="16"
              color="icon-accent-orange"
            />
          }
        >
          <NavigationItem
            href="/workspace/members/all"
            content="All members"
          />
          <NavigationItem
            href="/workspace/members/invited"
            content="Invited"
            trailingContent={
              <Icon
                source={ErrorFilledIcon}
                size="16"
                color="icon-accent-orange"
              />
            }
          />
          <NavigationGroup
            content="Permissions"
            defaultOpen
          >
            <NavigationItem
              href="/workspace/members/permissions/admin"
              content="Admins"
              active
              aria-current="page"
            />
            <NavigationItem
              href="/workspace/members/permissions/roles"
              content="Roles"
            />
          </NavigationGroup>
        </NavigationGroup>
        <NavigationItem
          href="/workspace/billing"
          content="Billing"
        />
      </NavigationGroup>
    </NavigationList>
  ),
}
