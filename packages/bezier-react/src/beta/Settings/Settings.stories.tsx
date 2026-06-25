import { type Meta, type StoryObj } from '@storybook/react'

import { Switch } from '~/src/beta/Switch'
import { TextInput } from '~/src/beta/TextInput'

import { Settings, SettingsField } from './Settings'
import type { SettingsFieldProps, SettingsProps } from './Settings.types'



const SETTINGS_WIDTH = 360

const meta: Meta<SettingsProps & SettingsFieldProps> = {
  title: 'Beta components/Settings',
  component: Settings,
  argTypes: {
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
    <Settings style={{ width: SETTINGS_WIDTH }}>
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
    labelPosition: 'left',
  },
}
