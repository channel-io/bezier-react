import { type Meta, type StoryObj } from '@storybook/react'

import { Switch } from '~/src/v3/Switch'
import { TextInput } from '~/src/v3/TextInput'

import { Settings, SettingsField } from './Settings'
import type { SettingsFieldProps, SettingsProps } from './Settings.types'

const SETTINGS_WIDTH = 360

const meta: Meta<SettingsProps & SettingsFieldProps> = {
  title: 'V3 components/Settings',
  component: Settings,
  argTypes: {
    showDividers: {
      control: {
        type: 'boolean',
      },
    },
    labelPosition: {
      control: {
        type: 'radio',
      },
      options: ['left', 'top'],
    },
  },
}

export default meta

export const Primary: StoryObj<SettingsProps & SettingsFieldProps> = {
  render: (args) => (
    <Settings
      style={{ width: SETTINGS_WIDTH }}
      showDividers={args.showDividers}
    >
      <SettingsField
        label="Workspace name"
        description="Shown to members in this workspace."
        help="Only admins can edit this setting."
        labelPosition={args.labelPosition}
      >
        <TextInput
          defaultValue="Channel"
          style={{ width: 160 }}
        />
      </SettingsField>

      <SettingsField
        label="Notifications"
        description="Receive updates for new conversations."
        labelPosition={args.labelPosition}
      >
        <Switch defaultChecked />
      </SettingsField>

      <SettingsField
        label="Auto assignment"
        description="Assign new conversations to available managers."
        labelPosition={args.labelPosition}
      >
        <Switch />
      </SettingsField>
    </Settings>
  ),

  args: {
    showDividers: true,
    labelPosition: 'left',
  },
}

export const WithoutDividers: StoryObj<SettingsProps & SettingsFieldProps> = {
  render: (args) => (
    <Settings
      style={{ width: SETTINGS_WIDTH }}
      showDividers={false}
    >
      <SettingsField
        label="Workspace name"
        description="Shown to members in this workspace."
        labelPosition={args.labelPosition}
      >
        <TextInput
          defaultValue="Channel"
          style={{ width: 160 }}
        />
      </SettingsField>

      <SettingsField
        label="Notifications"
        description="Receive updates for new conversations."
        labelPosition={args.labelPosition}
      >
        <Switch defaultChecked />
      </SettingsField>
    </Settings>
  ),

  args: {
    labelPosition: 'left',
  },

  argTypes: {
    showDividers: {
      table: {
        disable: true,
      },
    },
  },
}
