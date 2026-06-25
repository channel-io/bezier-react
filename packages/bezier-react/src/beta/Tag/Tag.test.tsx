import userEvent from '@testing-library/user-event'

import { Tag } from '~/src/beta/Tag'
import { render } from '~/src/utils/test'

describe('Tag', () => {
  it('renders children', () => {
    const { getByText } = render(<Tag>Sales</Tag>)

    expect(getByText('Sales')).toBeInTheDocument()
  })

  it('renders delete button when onDelete is provided', async () => {
    const user = userEvent.setup()
    const onDelete = jest.fn()

    const { getByRole } = render(<Tag onDelete={onDelete}>Sales</Tag>)

    await user.click(getByRole('button', { name: 'Delete tag' }))

    expect(onDelete).toHaveBeenCalledTimes(1)
  })
})
