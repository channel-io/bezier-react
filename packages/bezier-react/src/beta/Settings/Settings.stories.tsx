import { type Meta, type StoryObj } from '@storybook/react'

import { Switch } from '~/src/beta/Switch'
import { TextInput } from '~/src/beta/TextInput'
import { VStack } from '~/src/beta/VStack'

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

export const FieldSpacing: StoryObj<SettingsProps & SettingsFieldProps> = {
  tags: ['!autodocs'],
  parameters: { controls: { disable: true } },
  render: () => (
    <VStack spacing={24}>
      <Settings style={{ width: SETTINGS_WIDTH }}>
        <SettingsField label="Label left">
          <Switch defaultChecked />
        </SettingsField>
        <SettingsField
          label="Label left with description"
          description="Each field keeps its own vertical padding."
        >
          <Switch />
        </SettingsField>
      </Settings>

      <Settings style={{ width: SETTINGS_WIDTH }}>
        <SettingsField
          label="Label top"
          labelPosition="top"
        >
          <TextInput defaultValue="Channel" />
        </SettingsField>
        <SettingsField
          label="Label top with description"
          description="Dividers stay between the padded fields."
          labelPosition="top"
        >
          <TextInput defaultValue="Bezier" />
        </SettingsField>
      </Settings>
    </VStack>
  ),
}
