import { Switch } from '~/src/beta/Switch'
import { render } from '~/src/utils/test'

import { Settings, SettingsField } from './Settings'

import styles from './Settings.module.scss'

describe('Settings', () => {
  it('groups each field with a following divider except for the last field', () => {
    const { container, getAllByTestId, getByRole } = render(
      <Settings>
        <SettingsField label="Notifications">
          <Switch />
        </SettingsField>
        <SettingsField label="Auto assignment">
          <Switch />
        </SettingsField>
      </Settings>
    )

    const fields = getAllByTestId('bezier-beta-switch')
    const divider = getByRole('separator')
    const wrappers = container.querySelectorAll(
      `.${styles.SettingsFieldWrapper}`
    )

    expect(wrappers).toHaveLength(2)
    expect(wrappers[0]).toContainElement(fields[0])
    expect(wrappers[0]).toContainElement(divider)
    expect(wrappers[1]).toContainElement(fields[1])
    expect(wrappers[1]).not.toContainElement(divider)
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
