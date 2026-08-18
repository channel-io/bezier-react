import {
  AppsIcon,
  ChatProgressIcon,
  DotIcon,
  ErrorFilledIcon,
  SettingsIcon,
} from '@channel.io/bezier-icons'
import type { Meta, StoryObj } from '@storybook/react'

import { defineBezierMetadata } from '~/src/storybook/defineBezierMetadata'
import { Badge } from '~/src/beta/Badge'
import { Icon } from '~/src/beta/Icon'

import { NavigationGroup, NavigationItem, NavigationList } from '.'

const meta: Meta<typeof NavigationList> = {
  title: 'Beta components/NavigationList',
  component: NavigationList,
  parameters: {
    bezier: defineBezierMetadata({
      model: 'compound', root: 'NavigationList',
      parts: {
        NavigationGroup: { requiresAncestor: ['NavigationList'] },
        NavigationItem: { requiresAncestor: ['NavigationList'] },
      },
      independent: {},
    }),
  },
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
        label="General"
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
        label="Integrations"
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
        label="Workspace"
        leadingContent={SettingsIcon}
        defaultOpen
      >
        <NavigationItem
          href="/workspace/overview"
          content="Overview"
        />
        <NavigationGroup
          label="Members"
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
            label="Permissions"
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

export const IndentStyle: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 40 }}>
      <div style={{ width: 260 }}>
        <div style={{ marginBottom: 12, fontSize: 16, fontWeight: 500 }}>
          With Icon
        </div>
        <NavigationList aria-label="Navigation group with icon">
          <NavigationGroup
            label="Workspace"
            leadingContent={SettingsIcon}
            defaultOpen
          >
            <NavigationItem
              href="/with-icon/overview"
              content="Overview"
              active
              aria-current="page"
            />
            <NavigationItem
              href="/with-icon/activity"
              content="Recent activity"
            />
            <NavigationGroup
              label="Members"
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
                href="/with-icon/members/all"
                content="All members"
              />
              <NavigationItem
                href="/with-icon/members/invited"
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
                label="Roles"
                leadingContent={AppsIcon}
                defaultOpen
              >
                <NavigationItem
                  href="/with-icon/members/roles/admin"
                  content="Admins"
                />
                <NavigationItem
                  href="/with-icon/members/roles/guest"
                  content="Guests"
                />
              </NavigationGroup>
            </NavigationGroup>
            <NavigationGroup
              label="Settings"
              leadingContent={AppsIcon}
            >
              <NavigationItem
                href="/with-icon/settings/apps"
                content="Apps"
              />
            </NavigationGroup>
          </NavigationGroup>
        </NavigationList>
      </div>

      <div style={{ width: 260 }}>
        <div style={{ marginBottom: 12, fontSize: 16, fontWeight: 500 }}>
          Text Only
        </div>
        <NavigationList aria-label="Navigation group text only">
          <NavigationGroup
            label="Workspace"
            defaultOpen
          >
            <NavigationItem
              href="/text-only/overview"
              content="Overview"
              active
              aria-current="page"
            />
            <NavigationItem
              href="/text-only/activity"
              content="Recent activity"
            />
            <NavigationGroup
              label="Members"
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
                href="/text-only/members/all"
                content="All members"
              />
              <NavigationItem
                href="/text-only/members/invited"
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
                label="Roles"
                defaultOpen
              >
                <NavigationItem
                  href="/text-only/members/roles/admin"
                  content="Admins"
                />
                <NavigationItem
                  href="/text-only/members/roles/guest"
                  content="Guests"
                />
              </NavigationGroup>
            </NavigationGroup>
            <NavigationGroup label="Settings">
              <NavigationItem
                href="/text-only/settings/apps"
                content="Apps"
              />
            </NavigationGroup>
          </NavigationGroup>
        </NavigationList>
      </div>
    </div>
  ),
}
