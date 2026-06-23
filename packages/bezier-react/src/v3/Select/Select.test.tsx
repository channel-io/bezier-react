import { PeopleIcon } from '@channel.io/bezier-icons'
import { waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { render } from '~/src/utils/test'

import { Select, SelectGroup, SelectOption, SelectTrigger } from './'

describe('Select', () => {
  it('selects an option and closes the dropdown', async () => {
    const user = userEvent.setup()
    const onValueChange = jest.fn()

    const { getByRole, queryByRole } = render(
      <Select
        onValueChange={onValueChange}
        placeholder="Select channel"
      >
        <SelectOption value="chat" />
        <SelectOption value="email" />
      </Select>
    )

    await user.click(getByRole('button'))
    await user.click(getByRole('option', { name: 'email' }))

    expect(onValueChange).toHaveBeenCalledWith('email')
    expect(queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('uses label as the default trigger display', () => {
    const { getByRole } = render(
      <Select value="manager-1">
        <SelectOption
          value="manager-1"
          label="Amy Kim"
        />
      </Select>
    )

    expect(getByRole('button', { name: 'Amy Kim' })).toBeInTheDocument()
  })

  it('shows selected indicator on the right without replacing leading content', () => {
    const { getByRole } = render(
      <Select
        defaultValue="manager-1"
        defaultShow
      >
        <SelectOption
          value="manager-1"
          label="Amy Kim"
          leadingContent={PeopleIcon}
        />
      </Select>
    )

    const option = getByRole('option', { name: 'Amy Kim' })

    expect(option).toHaveAttribute('aria-selected', 'true')
    expect(option.querySelectorAll('svg')).toHaveLength(2)
  })

  it('supports custom trigger render props', async () => {
    const user = userEvent.setup()
    const onValueChange = jest.fn()

    const { getByRole } = render(
      <Select
        onValueChange={onValueChange}
        placeholder="Select theme"
      >
        <SelectTrigger>
          {({ triggerProps, selectedOption, placeholder }) => (
            <button {...triggerProps}>
              {selectedOption?.label ?? placeholder}
            </button>
          )}
        </SelectTrigger>
        <SelectOption
          value="dark"
          label="Dark"
        />
      </Select>
    )

    await user.click(getByRole('button', { name: 'Select theme' }))
    await user.click(getByRole('option', { name: 'Dark' }))

    expect(onValueChange).toHaveBeenCalledWith('dark')
  })

  it('supports grouped options without including group labels in option navigation', async () => {
    const user = userEvent.setup()

    const { getByRole, getAllByRole } = render(
      <Select
        defaultShow
        defaultValue="email"
      >
        <SelectGroup label="Messaging">
          <SelectOption
            value="chat"
            label="Chat"
          />
          <SelectOption
            value="email"
            label="Email"
          />
        </SelectGroup>
        <SelectGroup label="Broadcast">
          <SelectOption
            value="sms"
            label="SMS"
          />
        </SelectGroup>
      </Select>
    )

    expect(getByRole('group', { name: 'Messaging' })).toBeInTheDocument()
    expect(getAllByRole('option')).toHaveLength(3)

    await user.keyboard('{ArrowDown}')

    expect(getByRole('option', { name: 'SMS' })).toHaveFocus()
  })

  it('collects fragment-wrapped options while ignoring non-option children', async () => {
    const user = userEvent.setup()

    const { getByRole, getAllByRole } = render(
      <Select
        defaultShow
        defaultValue="email"
      >
        <>
          <span>Ignored child</span>
          <SelectOption
            value="chat"
            label="Chat"
          />
          <SelectOption
            value="email"
            label="Email"
          />
        </>
      </Select>
    )

    expect(getAllByRole('option')).toHaveLength(2)

    await waitFor(() => {
      expect(getByRole('option', { name: 'Email' })).toHaveFocus()
    })

    await user.keyboard('{ArrowUp}')

    expect(getByRole('option', { name: 'Chat' })).toHaveFocus()
  })

  it('supports keyboard navigation from the trigger and the listbox', async () => {
    const user = userEvent.setup()

    const { getByRole } = render(
      <Select defaultValue="email">
        <SelectOption
          value="chat"
          label="Chat"
        />
        <SelectOption
          value="email"
          label="Email"
        />
        <SelectOption
          value="sms"
          label="SMS"
        />
      </Select>
    )

    getByRole('button').focus()
    await user.keyboard('{Enter}')

    await waitFor(() => {
      expect(getByRole('option', { name: 'Email' })).toHaveFocus()
    })

    await user.keyboard('{ArrowDown}')
    expect(getByRole('option', { name: 'SMS' })).toHaveFocus()

    await user.keyboard('{Home}')
    expect(getByRole('option', { name: 'Chat' })).toHaveFocus()

    await user.keyboard('{End}')
    expect(getByRole('option', { name: 'SMS' })).toHaveFocus()
  })

  it('does not open when disabled or when trigger keydown is prevented', async () => {
    const user = userEvent.setup()
    const { getByRole, queryByRole, rerender } = render(
      <Select disabled>
        <SelectOption value="chat" />
      </Select>
    )

    await user.click(getByRole('button'))

    expect(queryByRole('listbox')).not.toBeInTheDocument()

    rerender(
      <Select
        onKeyDown={(event) => event.preventDefault()}
      >
        <SelectOption value="chat" />
      </Select>
    )

    getByRole('button').focus()
    await user.keyboard('{ArrowDown}')

    expect(queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('renders icon and text leading content in the default trigger', () => {
    const { getByRole, rerender } = render(
      <Select
        value="manager-1"
        leadingContent={PeopleIcon}
      >
        <SelectOption
          value="manager-1"
          label="Amy Kim"
        />
      </Select>
    )

    expect(getByRole('button').querySelector('svg')).toBeInTheDocument()

    rerender(
      <Select
        value="manager-1"
        leadingContent="Owner"
      >
        <SelectOption
          value="manager-1"
          label="Amy Kim"
        />
      </Select>
    )

    expect(getByRole('button')).toHaveTextContent('Owner')
  })

  it('ignores disabled options and respects prevented option keydown', async () => {
    const user = userEvent.setup()
    const onValueChange = jest.fn()

    const { getByRole } = render(
      <Select
        defaultShow
        onValueChange={onValueChange}
      >
        <SelectOption
          value="chat"
          label="Chat"
          disabled
        />
        <SelectOption
          value="email"
          label="Email"
          onKeyDown={(event) => event.preventDefault()}
        />
      </Select>
    )

    await user.click(getByRole('option', { name: 'Chat' }))
    expect(onValueChange).not.toHaveBeenCalled()

    getByRole('option', { name: 'Email' }).focus()
    await user.keyboard('{Enter}')

    expect(onValueChange).not.toHaveBeenCalled()
  })
})
