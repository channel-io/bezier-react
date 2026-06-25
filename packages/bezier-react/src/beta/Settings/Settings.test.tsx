
import { Switch } from '~/src/beta/Switch'
import { render } from '~/src/utils/test'

import { Settings, SettingsField } from './Settings'


describe('Settings', () => {
  it('renders dividers between fields by default', () => {
    const { getAllByRole } = render(
      <Settings>
        <SettingsField label="Notifications">
          <Switch />
        </SettingsField>
        <SettingsField label="Auto assignment">
          <Switch />
        </SettingsField>
      </Settings>
    )

    expect(getAllByRole('separator')).toHaveLength(1)
  })
})

describe('SettingsField', () => {
  it('renders label, description, help, and control', () => {
    const { getByText, getByTestId, getByRole } = render(
      <SettingsField
        label="Notifications"
        description="Receive updates for new conversations."
        help="Helpful description"
      >
        <Switch />
      </SettingsField>
    )

    expect(getByText('Notifications')).toBeInTheDocument()
    expect(
      getByText('Receive updates for new conversations.')
    ).toBeInTheDocument()
    expect(getByTestId('bezier-beta-help')).toBeInTheDocument()
    expect(getByRole('switch')).toBeInTheDocument()
  })
})
