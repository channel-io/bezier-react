import userEvent from '@testing-library/user-event'


import { render } from '~/src/utils/test'

import { FormControl } from '~/src/components/FormControl'

import { Search } from './Search'
import type { SearchProps } from './Search.types'


describe('Search', () => {
  const user = userEvent.setup()
  const renderComponent = (props?: SearchProps) => render(<Search {...props} />)

  it('renders search input with fixed search icon', () => {
    const { getByRole, container } = renderComponent({
      placeholder: 'Search by customer name',
    })
    const input = getByRole('searchbox')

    expect(input).toHaveAttribute('type', 'search')
    expect(input).toHaveAttribute('id')
    expect(input).toHaveAttribute('placeholder', 'Search by customer name')
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('shows clear button only when allowClear is true and input has value', () => {
    const { getByLabelText, rerender, queryByLabelText } = renderComponent({
      allowClear: true,
      value: 'hong',
      onChange: jest.fn(),
    })

    expect(getByLabelText('Clear search')).toBeInTheDocument()

    rerender(
      <Search
        allowClear
        value=""
        onChange={jest.fn()}
      />
    )

    expect(queryByLabelText('Clear search')).not.toBeInTheDocument()
  })

  it('clears controlled value through onChange', async () => {
    const onChange = jest.fn()
    const { getByLabelText } = renderComponent({
      allowClear: true,
      value: 'hong',
      onChange,
    })

    await user.click(getByLabelText('Clear search'))

    expect(onChange).toHaveBeenCalled()
  })

  it('clears uncontrolled value', async () => {
    const { getByRole, getByLabelText, queryByLabelText } = renderComponent({
      allowClear: true,
      defaultValue: 'hong',
    })
    const input = getByRole('searchbox') as HTMLInputElement

    await user.click(getByLabelText('Clear search'))

    expect(input.value).toBe('')
    expect(queryByLabelText('Clear search')).not.toBeInTheDocument()
  })

  it('does not consume form field context', () => {
    const { getByRole } = render(
      <FormControl
        hasError
        required
      >
        <Search placeholder="Search by customer name" />
      </FormControl>
    )
    const input = getByRole('searchbox')

    expect(input).not.toHaveAttribute('aria-invalid')
    expect(input).not.toHaveAttribute('aria-required')
  })
})
