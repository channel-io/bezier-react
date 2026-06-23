import { TagIcon } from '@channel.io/bezier-icons'
import userEvent from '@testing-library/user-event'

import { render } from '~/src/utils/test'

import {
  MultiSelect,
  MultiSelectGroup,
  MultiSelectOption,
  MultiSelectTrigger,
} from './'

describe('MultiSelect', () => {
  it('toggles an option and keeps the dropdown open', async () => {
    const user = userEvent.setup()
    const onValueChange = jest.fn()

    const { getByRole } = render(
      <MultiSelect
        value={[]}
        onValueChange={onValueChange}
        placeholder="Select tags"
      >
        <MultiSelectOption value="sales" />
        <MultiSelectOption value="support" />
      </MultiSelect>
    )

    await user.click(getByRole('combobox'))
    await user.click(getByRole('option', { name: 'sales' }))

    expect(onValueChange).toHaveBeenCalledWith(['sales'])
    expect(getByRole('listbox')).toBeInTheDocument()
  })

  it('deselects an already selected option', async () => {
    const user = userEvent.setup()
    const onValueChange = jest.fn()

    const { getByRole } = render(
      <MultiSelect
        value={['sales']}
        onValueChange={onValueChange}
        defaultShow
      >
        <MultiSelectOption
          value="sales"
          label="Sales"
        />
      </MultiSelect>
    )

    await user.click(getByRole('option', { name: 'Sales' }))

    expect(onValueChange).toHaveBeenCalledWith([])
  })

  it('renders selected values as removable tags in the default trigger', async () => {
    const user = userEvent.setup()
    const onValueChange = jest.fn()

    const { getAllByRole } = render(
      <MultiSelect
        value={['sales', 'support']}
        onValueChange={onValueChange}
      >
        <MultiSelectOption
          value="sales"
          label="Sales"
        />
        <MultiSelectOption
          value="support"
          label="Support"
        />
      </MultiSelect>
    )

    await user.click(getAllByRole('button', { name: 'Delete tag' })[0])

    expect(onValueChange).toHaveBeenCalledWith(['support'])
  })

  it('keeps the dropdown open when a selected tag is removed from the default trigger', async () => {
    const user = userEvent.setup()

    const { getAllByRole, getByRole } = render(
      <MultiSelect
        defaultValue={['sales', 'support']}
        defaultShow
      >
        <MultiSelectOption
          value="sales"
          label="Sales"
        />
        <MultiSelectOption
          value="support"
          label="Support"
        />
      </MultiSelect>
    )

    await user.click(getAllByRole('button', { name: 'Delete tag' })[0])

    expect(getByRole('listbox')).toBeInTheDocument()
    expect(getAllByRole('button', { name: 'Delete tag' })).toHaveLength(1)
  })

  it('summarizes selected values that do not fit when selectedValuesOverflow is ellipsis', () => {
    const originalGetBoundingClientRect = HTMLElement.prototype.getBoundingClientRect

    HTMLElement.prototype.getBoundingClientRect = function getBoundingClientRect() {
      const element = this as HTMLElement

      if (element.dataset.bSelectTriggerMain === 'true') {
        return {
          width: 155,
          height: 32,
          top: 0,
          right: 155,
          bottom: 32,
          left: 0,
          x: 0,
          y: 0,
          toJSON: () => {},
        }
      }

      if (element.dataset.bSelectMeasureTag === 'true') {
        return {
          width: 50,
          height: 24,
          top: 0,
          right: 50,
          bottom: 24,
          left: 0,
          x: 0,
          y: 0,
          toJSON: () => {},
        }
      }

      if (element.dataset.bSelectMeasureCountValue) {
        return {
          width: 36,
          height: 18,
          top: 0,
          right: 36,
          bottom: 18,
          left: 0,
          x: 0,
          y: 0,
          toJSON: () => {},
        }
      }

      return originalGetBoundingClientRect.call(this)
    }

    try {
      const { getAllByRole, getAllByText } = render(
        <MultiSelect
          defaultValue={['sales', 'support', 'marketing']}
          selectedValuesOverflow="ellipsis"
        >
          <MultiSelectOption
            value="sales"
            label="Sales"
          />
          <MultiSelectOption
            value="support"
            label="Support"
          />
          <MultiSelectOption
            value="marketing"
            label="Marketing"
          />
        </MultiSelect>
      )

      expect(getAllByRole('button', { name: 'Delete tag' })).toHaveLength(2)
      expect(
        getAllByText('+1').filter(
          (element) => !element.hasAttribute('data-b-select-measure-count-value')
        )
      ).toHaveLength(1)
    } finally {
      HTMLElement.prototype.getBoundingClientRect = originalGetBoundingClientRect
    }
  })

  it('falls back to selected count when ellipsis cannot measure width', () => {
    const originalGetBoundingClientRect = HTMLElement.prototype.getBoundingClientRect

    HTMLElement.prototype.getBoundingClientRect = function getBoundingClientRect() {
      const element = this as HTMLElement

      if (element.dataset.bSelectTriggerMain === 'true') {
        return {
          width: 0,
          height: 32,
          top: 0,
          right: 0,
          bottom: 32,
          left: 0,
          x: 0,
          y: 0,
          toJSON: () => {},
        }
      }

      return originalGetBoundingClientRect.call(this)
    }

    try {
      const { getAllByRole, getAllByText } = render(
        <MultiSelect
          defaultValue={['sales', 'support']}
          selectedValuesOverflow="ellipsis"
        >
          <MultiSelectOption
            value="sales"
            label="Sales"
          />
          <MultiSelectOption
            value="support"
            label="Support"
          />
        </MultiSelect>
      )

      expect(getAllByRole('button', { name: 'Delete tag' })).toHaveLength(2)
      expect(
        getAllByText('+1').filter(
          (element) => !element.hasAttribute('data-b-select-measure-count-value')
        )
      ).toHaveLength(0)
    } finally {
      HTMLElement.prototype.getBoundingClientRect = originalGetBoundingClientRect
    }
  })

  it('uses window resize when ResizeObserver is unavailable', () => {
    const originalResizeObserver = window.ResizeObserver
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener')
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener')

    Object.defineProperty(window, 'ResizeObserver', {
      configurable: true,
      value: undefined,
    })

    const { unmount } = render(
      <MultiSelect
        defaultValue={['sales']}
        selectedValuesOverflow="ellipsis"
      >
        <MultiSelectOption
          value="sales"
          label="Sales"
        />
      </MultiSelect>
    )

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'resize',
      expect.any(Function)
    )

    unmount()

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'resize',
      expect.any(Function)
    )

    Object.defineProperty(window, 'ResizeObserver', {
      configurable: true,
      value: originalResizeObserver,
    })
    addEventListenerSpy.mockRestore()
    removeEventListenerSpy.mockRestore()
  })

  it('shows selected indicator on the right without replacing leading content', async () => {
    const { getByRole } = render(
      <MultiSelect
        value={['sales']}
        defaultShow
      >
        <MultiSelectOption
          value="sales"
          label="Sales"
          leadingContent={TagIcon}
        />
      </MultiSelect>
    )

    const option = getByRole('option', { name: 'Sales' })

    expect(option).toHaveAttribute('aria-selected', 'true')
    expect(option.querySelectorAll('svg')).toHaveLength(2)
  })

  it('renders icon and text leading content in the default trigger', () => {
    const { getByRole, rerender } = render(
      <MultiSelect
        value={['sales']}
        leadingContent={TagIcon}
      >
        <MultiSelectOption
          value="sales"
          label="Sales"
        />
      </MultiSelect>
    )

    expect(getByRole('combobox').querySelector('svg')).toBeInTheDocument()

    rerender(
      <MultiSelect
        value={['sales']}
        leadingContent="Type"
      >
        <MultiSelectOption
          value="sales"
          label="Sales"
        />
      </MultiSelect>
    )

    expect(getByRole('combobox')).toHaveTextContent('Type')
  })

  it('passes value and onValueChange to custom trigger render props', async () => {
    const user = userEvent.setup()
    const onValueChange = jest.fn()

    const { getByRole } = render(
      <MultiSelect
        value={['sales']}
        onValueChange={onValueChange}
      >
        <MultiSelectTrigger>
          {({ triggerProps, value, onValueChange }) => (
            <button
              {...triggerProps}
              onClick={(event) => {
                triggerProps.onClick?.(event)
                onValueChange(value.filter((item) => item !== 'sales'))
              }}
            >
              Clear
            </button>
          )}
        </MultiSelectTrigger>
        <MultiSelectOption value="sales" />
      </MultiSelect>
    )

    await user.click(getByRole('button', { name: 'Clear' }))

    expect(onValueChange).toHaveBeenCalledWith([])
  })

  it('supports grouped options and keeps selected labels available to the trigger', () => {
    const { getByRole, getAllByRole } = render(
      <MultiSelect
        value={['sales']}
        defaultShow
      >
        <MultiSelectGroup label="Teams">
          <MultiSelectOption
            value="sales"
            label="Sales"
          />
          <MultiSelectOption
            value="support"
            label="Support"
          />
        </MultiSelectGroup>
      </MultiSelect>
    )

    expect(getByRole('group', { name: 'Teams' })).toBeInTheDocument()
    expect(getByRole('button', { name: 'Delete tag' })).toBeInTheDocument()
    expect(getByRole('combobox')).toHaveTextContent('Sales')
    expect(getAllByRole('option')).toHaveLength(2)
  })
})
