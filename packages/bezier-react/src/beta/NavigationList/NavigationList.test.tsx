import { SettingsIcon } from '@channel.io/bezier-icons'
import userEvent from '@testing-library/user-event'

import { render } from '~/src/utils/test'

import {
  NAVIGATION_GROUP_CONTENT_TEST_ID,
  NAVIGATION_GROUP_TEST_ID,
  NAVIGATION_ITEM_TEST_ID,
  NAVIGATION_LIST_TEST_ID,
  NavigationGroup,
  NavigationItem,
  NavigationList,
} from '.'

describe('NavigationList', () => {
  it('renders leaf anchor items', () => {
    const { getByRole, getByTestId } = render(
      <NavigationList aria-label="Settings">
        <NavigationItem
          href="/settings/profile"
          content="Profile"
          active
          aria-current="page"
        />
      </NavigationList>
    )

    const item = getByRole('link', { name: 'Profile' })

    expect(getByTestId(NAVIGATION_LIST_TEST_ID)).toBeInTheDocument()
    expect(getByTestId(NAVIGATION_ITEM_TEST_ID)).toBe(item)
    expect(item).toHaveAttribute('href', '/settings/profile')
    expect(item).toHaveAttribute('aria-current', 'page')
  })

  it('renders button items when onClick is provided', async () => {
    const user = userEvent.setup()
    const onClick = jest.fn()

    const { getByRole } = render(
      <NavigationList>
        <NavigationItem
          content="Open modal"
          onClick={onClick}
        />
      </NavigationList>
    )

    await user.click(getByRole('button', { name: 'Open modal' }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('toggles group content from the parent trigger', async () => {
    const user = userEvent.setup()

    const { getByRole, queryByText } = render(
      <NavigationList>
        <NavigationGroup content="General">
          <NavigationItem
            href="/settings/profile"
            content="Profile"
          />
        </NavigationGroup>
      </NavigationList>
    )

    const trigger = getByRole('button', { name: 'General' })

    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(queryByText('Profile')).not.toBeInTheDocument()

    await user.click(trigger)

    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(queryByText('Profile')).toBeInTheDocument()
  })

  it('supports controlled group open state', async () => {
    const user = userEvent.setup()
    const onOpenChange = jest.fn()

    const { getByRole, queryByTestId } = render(
      <NavigationList>
        <NavigationGroup
          content="General"
          open={false}
          onOpenChange={onOpenChange}
        >
          <NavigationItem
            href="/settings/profile"
            content="Profile"
          />
        </NavigationGroup>
      </NavigationList>
    )

    await user.click(getByRole('button', { name: 'General' }))

    expect(onOpenChange).toHaveBeenCalledWith(true)
    expect(queryByTestId(NAVIGATION_GROUP_CONTENT_TEST_ID)).not.toBeInTheDocument()
  })

  it('keeps disclosure aria props owned by group state', () => {
    const externalButtonProps = {
      'aria-controls': 'external-content',
      'aria-expanded': false,
    }

    const { getByRole } = render(
      <NavigationList>
        <NavigationGroup
          content="General"
          defaultOpen
          {...externalButtonProps}
        >
          <NavigationItem
            href="/settings/profile"
            content="Profile"
          />
        </NavigationGroup>
      </NavigationList>
    )

    const trigger = getByRole('button', { name: 'General' })

    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(trigger).not.toHaveAttribute('aria-controls', 'external-content')
  })

  it('does not toggle disabled groups', async () => {
    const user = userEvent.setup()
    const onOpenChange = jest.fn()

    const { getByRole, queryByText } = render(
      <NavigationList>
        <NavigationGroup
          content="General"
          disabled
          defaultOpen
          onOpenChange={onOpenChange}
        >
          <NavigationItem
            href="/settings/profile"
            content="Profile"
          />
        </NavigationGroup>
      </NavigationList>
    )

    const trigger = getByRole('button', { name: 'General' })

    await user.click(trigger)

    expect(trigger).toBeDisabled()
    expect(queryByText('Profile')).toBeInTheDocument()
    expect(onOpenChange).not.toHaveBeenCalled()
  })

  it('prevents disabled anchor item interaction', async () => {
    const user = userEvent.setup()
    const onClick = jest.fn()

    const { getByRole } = render(
      <div onClick={onClick}>
        <NavigationItem
          href="/settings/profile"
          content="Profile"
          disabled
        />
      </div>
    )

    const link = getByRole('link', { name: 'Profile' })

    await user.click(link)

    expect(link).toHaveAttribute('tabindex', '-1')
    expect(onClick).not.toHaveBeenCalled()
  })

  it('renders icon side content as decorative', () => {
    const { container } = render(
      <NavigationList>
        <NavigationGroup
          content="General"
          leadingContent={SettingsIcon}
        />
      </NavigationList>
    )

    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders chevron only for groups', () => {
    const { getByRole } = render(
      <NavigationList>
        <NavigationItem
          href="/settings/profile"
          content="Profile"
        />
        <NavigationGroup content="General" />
      </NavigationList>
    )

    expect(getByRole('link', { name: 'Profile' }).querySelectorAll('svg')).toHaveLength(0)
    expect(getByRole('button', { name: 'General' }).querySelectorAll('svg')).toHaveLength(1)
  })

  it('renders trailing content for both items and groups', () => {
    const { getByTestId } = render(
      <NavigationList>
        <NavigationItem
          href="/settings/profile"
          content="Profile"
          trailingContent={<span data-testid="item-trailing">Item meta</span>}
        />
        <NavigationGroup
          content="General"
          trailingContent={<span data-testid="group-trailing">Group meta</span>}
        />
      </NavigationList>
    )

    expect(getByTestId('item-trailing')).toBeInTheDocument()
    expect(getByTestId('group-trailing')).toBeInTheDocument()
  })

  it('renders group test id on the wrapper', () => {
    const { getByTestId } = render(
      <NavigationList>
        <NavigationGroup content="General" />
      </NavigationList>
    )

    expect(getByTestId(NAVIGATION_GROUP_TEST_ID)).toBeInTheDocument()
  })
})
